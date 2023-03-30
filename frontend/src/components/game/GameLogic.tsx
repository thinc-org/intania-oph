import { useEffect, useReducer, useState } from "react";
import { BaseScore, GameScene, Point, Subject, TieBreaker } from "./lib/game";
import GameContainer from "./lib/GameContainer";
import IsInter from "./lib/IsInter";
import Onboard from "./lib/Onboard";
import Preresult from "./lib/Preresult";
import { calculateScore } from "./lib/score";
import TieBreakerContainer from "./lib/TieBreaker";

function reducer(state: Point, action: Point) {
  Object.keys(action).forEach((subject) => {
    state[subject as Subject] += action[subject as Subject];
  });

  return state;
}

export type Majors =
  | "civil"
  | "elec"
  | "mech"
  | "auto"
  | "ie"
  | "che"
  | "geo"
  | "pt"
  | "sv"
  | "env"
  | "mt"
  | "cp"
  | "cedt"
  | "nt"
  | "chpe"
  | "adme"
  | "ice"
  | "nano"
  | "aero"
  | "ai";

export default function GameLogic() {
  const [name, setName] = useState("");
  const [isInter, setIsInter] = useState(false);
  const [chosen, setChosen] = useState<Record<string, string>>({});
  const [page, setPage] = useState("onboarding");

  // score
  const [score, addScore] = useReducer(reducer, BaseScore);
  const [major, setMajor] = useState<Majors | null>(null);

  useEffect(() => {
    if (page === "waiting") {
      const result = calculateScore(score, isInter);

      if (result.startsWith("tie")) {
        // tiebreaker
        setPage(result);
      } else {
        // major result
        setPage(`RESULT_${result}`);
      }
    }

    if (page.startsWith("RESULT_")) {
      const majorName = page.replace("RESULT_", "") as Majors;
      setMajor(majorName);
      setPage("preresult");

      // set localStorage
      localStorage.setItem("name", name);
      localStorage.setItem("major", majorName);
    }
  }, [page]);

  return (
    <div className="flex min-h-[100px] w-full max-w-lg flex-col items-center justify-center gap-6 rounded-3xl bg-white py-8 px-6 font-body shadow-2xl">
      {page === "onboarding" && (
        <Onboard name={name} setName={setName} setPage={setPage} />
      )}
      {page === "isinter" && (
        <IsInter setIsInter={setIsInter} name={name} setPage={setPage} />
      )}
      {page.startsWith("Game") && (
        <GameContainer
          scene={{
            id: page,
            choices: GameScene[page].choices,
            message: GameScene[page].message,
          }}
          chosen={chosen}
          setChosen={setChosen}
          name={name}
          setPage={setPage}
          addScore={addScore}
        />
      )}
      {page.startsWith("tie") && (
        <TieBreakerContainer
          scene={{
            id: page,
            choices: TieBreaker[page].choices,
            message: TieBreaker[page].message,
          }}
          chosen={chosen}
          setChosen={setChosen}
          name={name}
          setPage={setPage}
        />
      )}
      {page === "preresult" && (
        <Preresult name={name} major={major as Majors} />
      )}
    </div>
  );
}
