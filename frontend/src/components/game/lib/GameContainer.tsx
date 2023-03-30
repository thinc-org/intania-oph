import type { Dispatch, SetStateAction } from "react";
import { ChoiceButton, ChoiceContainer } from "./components";
import { CustomResponse, Point, Question, Scene } from "./game";

export default function GameContainer({
  name,
  scene,
  setPage,
  chosen,
  setChosen,
  addScore,
}: {
  name: string;
  scene: { id: string; message: string; choices: Question[] };
  setPage: Dispatch<SetStateAction<string>>;
  chosen: Record<string, string>;
  setChosen: Dispatch<SetStateAction<Record<string, string>>>;
  addScore: (point: Point) => void;
}) {
  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-center text-2xl text-space-medium">
        {scene.message
          .replace("{{name}}", name)
          .replace("{{response}}", CustomResponse[chosen["Game00"]])}
      </p>

      <ChoiceContainer>
        {scene.choices.map((choice: Question) => (
          <ChoiceButton
            key={choice.message}
            onClick={() => {
              console.log("choice", choice);
              setChosen({ ...chosen, [scene.id]: choice.message });
              setPage(choice.goto);
              addScore(choice.points);
            }}
          >
            {choice.message}
          </ChoiceButton>
        ))}
      </ChoiceContainer>
    </div>
  );
}
