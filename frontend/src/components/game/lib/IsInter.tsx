import { Dispatch, Fragment, SetStateAction } from "react";
import { ChoiceButton, ChoiceContainer, NextButton } from "./components";

export default function IsInter({
  name,
  setPage,
  setIsInter,
}: {
  name: string;
  setPage: Dispatch<SetStateAction<string>>;
  setIsInter: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <Fragment>
      <p className="text-center text-2xl text-space-medium">
        คุณ{name}สนใจภาคอินเตอร์ หรือภาคไทย ?
      </p>

      <ChoiceContainer>
        <ChoiceButton
          onClick={() => {
            setPage("Game00");
            setIsInter(true);
          }}
        >
          สนใจภาคอินเตอร์
        </ChoiceButton>
        <ChoiceButton
          onClick={() => {
            setPage("Game00");
            setIsInter(false);
          }}
        >
          สนใจภาคไทย
        </ChoiceButton>
      </ChoiceContainer>
    </Fragment>
  );
}
