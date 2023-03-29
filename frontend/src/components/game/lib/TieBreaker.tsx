import type { Dispatch, SetStateAction } from "react";
import { ChoiceButton, ChoiceContainer } from "./components";
import type { Point, TiebreakQuestion } from "./game";

export default function TieBreakerContainer({
  name,
  scene,
  setPage,
  chosen,
  setChosen,
}: {
  name: string;
  scene: { id: string; message: string; choices: TiebreakQuestion[] };
  setPage: Dispatch<SetStateAction<string>>;
  chosen: Record<string, string>;
  setChosen: Dispatch<SetStateAction<Record<string, string>>>;
}) {
  // const [chosenChoice]

  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-center text-2xl text-space-medium">
        {scene.message.replace("{{name}}", name)}
      </p>

      <ChoiceContainer>
        {scene.choices.map((choice: TiebreakQuestion) => (
          <ChoiceButton
            key={choice.message}
            onClick={() => {
              setChosen({ ...chosen, [scene.id]: choice.message });
              setPage(choice.goto);
            }}
          >
            {choice.message}
          </ChoiceButton>
        ))}
      </ChoiceContainer>
    </div>
  );
}
