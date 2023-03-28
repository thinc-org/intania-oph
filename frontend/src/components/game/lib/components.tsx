import clsx from "clsx";
import type { ReactNode } from "react";

export function NextButton({
  onClick,
  disabled,
}: {
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      onClick={() => onClick()}
      disabled={disabled}
      className={clsx(
        !disabled ? "hover:bg-space-medium" : "cursor-not-allowed",
        "group flex items-center gap-6 rounded-full bg-space-normal py-3 px-12 text-white shadow-md transition-colors duration-500"
      )}
    >
      <span className="text-xl">มาเริ่มกันเลย</span>
      <img
        src="/assets/icons/arrowrightwhite.svg"
        className={clsx(
          !disabled && "group-hover:translate-x-4",
          "h-4 w-4 transition-transform duration-500"
        )}
        alt="arrow right"
      />
    </button>
  );
}

export function ChoiceButton({
  onClick,
  children,
}: {
  onClick: () => void;
  children: string;
}) {
  return (
    <button
      onClick={() => onClick()}
      className="jusitfy-center flex w-full items-center rounded-full border border-gray-500/50 bg-white py-3 px-4 text-center text-lg text-black transition-colors duration-500 hover:bg-space-normal/50"
    >
      {children}
    </button>
  );
}

export function ChoiceContainer({
  children,
}: {
  children: ReactNode | ReactNode[];
}) {
  return <div className="flex w-full flex-col gap-4">{children}</div>;
}
