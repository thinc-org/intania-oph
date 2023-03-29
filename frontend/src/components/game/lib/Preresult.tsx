import { Fragment, useState } from "react";
import type { Majors } from "../GameLogic";
import { NextButton } from "./components";

import Loading from "./Loading";

export default function Preresult({ major }: { major: Majors }) {
  const [reveal, setReveal] = useState(false);

  return (
    <Fragment>
      {!reveal && <Loading />}

      <h1 className="text-center text-2xl text-space-medium">ผลผลผลผลผผล</h1>

      {reveal && <h2>{major}</h2>}

      <NextButton
        onClick={() => {
          setReveal(true);
        }}
      >
        แสดงผล !
      </NextButton>
    </Fragment>
  );
}
