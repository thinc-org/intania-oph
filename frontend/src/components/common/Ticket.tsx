import clsx from "clsx";

export default function Ticket({ bg }: { bg: string }) {
  //name, bg, major,
  const name = localStorage.getItem("name") as string;
  const major = localStorage.getItem("major") as string;

  return (
    <div className="relative mx-auto flex aspect-[9/16] h-full w-full max-w-md items-center justify-center bg-[#F6F3EC] font-name">
      <div className="relative flex h-full w-full flex-col text-center">
        <div className="relative flex">
          <img alt="bg" src={`/assets/ticket/${bg}.png`} />
        </div>

        <div
          style={{
            top: 195,
            left: "50%",
            transform: "translateX(-50%)",
          }}
          className="absolute z-50 flex"
        >
          <p
            className="rounded-full bg-[#F6F3EC] py-3 px-8 text-xl font-bold text-black shadow-md"
            // className="font-bold text-white"
          >
            {name?.length <= 18 ? name : name?.slice(0, 18) + "..."}
          </p>
        </div>

        {/* major */}
        <div
          style={{
            top: 325,
            left: "50%",
            transform: "translateX(-50%)",
          }}
          className="absolute z-50 flex"
        >
          <img width={175} height={175} src={`/assets/major/${major}.png`} />
        </div>
      </div>
    </div>
  );
}
