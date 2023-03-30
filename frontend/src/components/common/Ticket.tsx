import clsx from "clsx";

const AllMajors = [
  {
    id: "civil",
    nameTH: "วิศวกรรมโยธา",
    nameEN: "Civil Engineering",
  },
  //วิศวกรรมไฟฟ้า (Electrical Engineering)
  {
    id: "elec",
    nameTH: "วิศวกรรมไฟฟ้า",
    nameEN: "Electrical Engineering",
  },
  // วิศวกรรมเครื่องกล (Mechanical Engineering)
  {
    id: "mech",
    nameTH: "วิศวกรรมเครื่องกล",
    nameEN: "Mechanical Engineering",
  },
  // วิศวกรรมยานยนต์ (Automative Engineering)
  {
    id: "auto",
    nameTH: "วิศวกรรมยานยนต์",
    nameEN: "Automative Engineering",
  },
  // วิศวกรรมอุตสาหการ (Industrial Engineering)
  {
    id: "ie",
    nameTH: "วิศวกรรมอุตสาหการ",
    nameEN: "Industrial Engineering",
  },
  // วิศวกรรมสิ่งแวดล้อม (Environmental Engineering)
  {
    id: "env",
    nameTH: "วิศวกรรมสิ่งแวดล้อม",
    nameEN: "Environmental Engineering",
  },
  // วิศวกรรมโลหการ (Metallurgical Engineering)
  {
    id: "mt",
    nameTH: "วิศวกรรมโลหการ",
    nameEN: "Metallurgical Engineering",
  },
  // วิศวกรรมเหมืองแร่และปิโตรเลียม (Mining and Petroleum Engineering)
  {
    id: "pt",
    nameTH: "วิศวกรรมเหมืองแร่และปิโตรเลียม",
    nameEN: "Mining and Petroleum Engineering",
  },
  // ภาควิชาวิศวกรรมนิวเคลียร์ (Nuclear Engineering)
  {
    id: "nt",
    nameTH: "ภาควิชาวิศวกรรมนิวเคลียร์",
    nameEN: "Nuclear Engineering",
  },
  // วิศวกรรมสำรวจ (Survey Engineering)
  {
    id: "sv",
    nameTH: "วิศวกรรมสำรวจ",
    nameEN: "Survey Engineering",
  },
  // วิศวกรรมเคมี (Chemical Engineering)
  {
    id: "che",
    nameTH: "วิศวกรรมเคมี",
    nameEN: "Chemical Engineering",
  },
  // วิศวกรรมคอมพิวเตอร์ (Computer Engineering)
  {
    id: "cp",
    nameTH: "วิศวกรรมคอมพิวเตอร์",
    nameEN: "Computer Engineering",
  },
  // วิศวกรรมคอมพิวเตอร์และเทคโนโลยีดิจิทัล (CEDT)
  {
    id: "cedt",
    nameTH: "วิศวกรรมคอมพิวเตอร์และเทคโนโลยีดิจิทัล",
    nameEN: "CEDT",
  },
  // วิศวกรรมหุ่นยนต์และปัญญาประดิษฐ์ (Robotics & AI)
  {
    id: "ai",
    nameTH: "วิศวกรรมหุ่นยนต์และปัญญาประดิษฐ์",
    nameEN: "Robotics & AI",
  },
  // วิศวกรรมสารสนเทศและการสื่อสาร (ICE)
  {
    id: "ice",
    nameTH: "วิศวกรรมสารสนเทศและการสื่อสาร",
    nameEN: "ICE",
  },
  // วิศวกรรมนาโน (NANO)
  {
    id: "nano",
    nameTH: "วิศวกรรมนาโน",
    nameEN: "NANO",
  },
  // วิศวกรรมการออกแบบและการผลิตยานยนต์ (ADME)
  {
    id: "adme",
    nameTH: "วิศวกรรมการออกแบบและการผลิตยานยนต์",
    nameEN: "ADME",
  },
  // วิศวกรรมอากาศยาน (AERO)
  {
    id: "aero",
    nameTH: "วิศวกรรมอากาศยาน",
    nameEN: "AERO",
  },
  // Chemical and Process Engineering (ChPe)
  {
    id: "chpe",
    nameTH: "Chemical and Process Engineering",
    nameEN: "ChPe",
  },
];

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

        <div className="absolute top-1/4 left-1/2 z-50 mt-1 flex -translate-y-1/4 -translate-x-1/2 md:mt-2">
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
        <div className="absolute top-1/2 left-1/2  z-50 -translate-y-1/2 -translate-x-1/2 pt-8">
          <img
            src={`/assets/major/${major}.png`}
            className="h-28 w-28 object-contain md:h-36 md:w-36 lg:h-48 lg:w-48"
          />
        </div>

        <div className="absolute top-3/4 w-full -translate-y-3/4 pt-6 text-center text-white">
          <div className="font-body text-xs font-bold md:text-xl">
            {AllMajors.find((currMajor) => currMajor.id === major)?.nameTH}
          </div>
          <div className="-mt-2 font-body text-xs md:text-lg">
            {AllMajors.find((currMajor) => currMajor.id === major)?.nameEN}
          </div>
        </div>
      </div>
    </div>
  );
}
