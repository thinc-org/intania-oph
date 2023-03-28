import { useReducer, useState } from "react";
import { BaseScore, GameScene, Point, Subject } from "./lib/game";
import GameContainer from "./lib/GameContainer";
import IsInter from "./lib/IsInter";
import Onboard from "./lib/Onboard";

function reducer(state: Point, action: Point) {
  Object.keys(action).forEach((subject) => {
    state[subject as Subject] += action[subject as Subject];
  });

  return state;
}

export default function GameLogic() {
  const [name, setName] = useState("");
  const [isInter, setIsInter] = useState(false);
  const [chosen, setChosen] = useState<Record<string, string>>({});
  const [page, setPage] = useState("onboarding");

  // score
  const [score, addScore] = useReducer(reducer, BaseScore);

  if (page === "waiting") {
    console.log(score);
  }

  return (
    <div className="flex min-h-[100px] w-full max-w-lg flex-col items-center justify-center gap-6 rounded-3xl bg-white py-8 px-8 font-body shadow-2xl">
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
    </div>
  );
}
