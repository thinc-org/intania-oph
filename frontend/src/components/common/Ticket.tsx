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
            left: "50%",
            transform: "translateX(-50%)",
          }}
          className="absolute top-[100px] z-50 flex sm:top-[195px]"
        >
          <p
            className="rounded-full bg-[#F6F3EC] py-[5px] px-[20px] text-[10px] font-bold text-black shadow-md sm:py-3 sm:px-8 sm:text-xl"
            // className="font-bold text-white"
          >
            {name?.length <= 18 ? name : name?.slice(0, 18) + "..."}
          </p>
        </div>

        <div
          style={{
            left: "50%",
            transform: "translateX(-50%)",
          }}
          className="absolute top-[100px] z-50 flex sm:top-[245px]"
        >
          <p
            className="rounded-full text-[10px] font-bold text-white sm:text-xl"
            // className="font-bold text-white"
          >
            {name?.length <= 18 ? name : name?.slice(0, 18) + "..."}
          </p>
        </div>

        {/* major */}
        <div
          style={{
            left: "50%",
            transform: "translateX(-50%)",
          }}
          className="absolute top-[155px] z-50 flex sm:top-[325px]"
        >
          <img width={175} height={175} src={`/assets/major/${major}.png`} />
        </div>
      </div>
    </div>
  );
}
