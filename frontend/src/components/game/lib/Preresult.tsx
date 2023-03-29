import { Fragment, useEffect, useState } from "react";
import type { Majors } from "../GameLogic";
import { NextButton } from "./components";

import Loading from "./Loading";

export default function Preresult({
  major,
  name,
}: {
  major: Majors;
  name: string;
}) {
  const [pageState, setPageState] = useState<"pre" | "loading">("pre");

  useEffect(() => {
    // redirect to /ticket

    if (pageState === "loading") {
      setTimeout(() => {
        window.location.href = `/ticket`;
      }, 2000);
    }
  }, [pageState]);

  return (
    <Fragment>
      {pageState === "loading" && <Loading />}

      {pageState === "loading" && (
        <p className="mt-6 text-center text-lg text-space-medium">
          กำลังประมวลผล
        </p>
      )}

      {pageState === "pre" && (
        <p className="text-center text-2xl text-space-medium">
          สุดท้ายแล้ว อยากให้รู้ว่าคุณ{name}น่ะเก่งมาก หวังว่าคุณ{name}
          จะสัมผัสได้ถึงกำลังใจจากพวกเรา และหวังว่าคุณ{name}
          จะเดินทางต่อไปและสำเร็จความฝันในอนาคตนะ พี่ๆวิศวะจุฬารออยู่ !
        </p>
      )}

      {pageState === "pre" && (
        <NextButton
          onClick={() => {
            setPageState("loading");
          }}
        >
          แสดงผล !
        </NextButton>
      )}
    </Fragment>
  );
}
