import { Dispatch, Fragment, SetStateAction, useMemo, useState } from "react";
import { NextButton } from "./components";
import clsx from "clsx";

export default function Onboard({
  name,
  setName,
  setPage,
}: {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  setPage: Dispatch<SetStateAction<string>>;
}) {
  const isBlank = name === "";

  return (
    <Fragment>
      <p className="text-center text-2xl text-space-medium">
        ยินดีต้อนรับเข้าสู่เกม ค้นหาภาคที่ใช่
        <br />
        ในวิศวะจุฬา ที่ทำมาเพื่อคุณโดยเฉพาะ !
      </p>

      <div className="flex w-full flex-col gap-2 text-lg">
        <p className="text-space-medium">กรุณากรอกชื่อ</p>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            if (e.target.value.length <= 24) {
              setName(e.target.value);
            }
          }}
          className={clsx(
            isBlank ? "border-red-500/50" : "border-gray-400/75",
            "rounded-full border py-2 px-4"
          )}
          placeholder="ชื่อสั้น ๆ ที่อยากให้พวกเราเรียกคุณ"
        />
      </div>

      <NextButton
        onClick={() => {
          if (!isBlank) {
            setPage("isinter");
          }
        }}
        disabled={isBlank}
      />
    </Fragment>
  );
}
