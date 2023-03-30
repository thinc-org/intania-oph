import { useState } from "react";

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
    nameEN: "Computer and Digital Technology Engineering",
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

const BG = ["bg1", "bg2", "bg3"];

export default function TicketLogic() {
  const name = localStorage.getItem("name") as string;
  const major = localStorage.getItem("major") as string;
  const [bg, setBg] = useState(BG[0]);

  const download = () => {
    const link = document.createElement("a");
    link.download = "ticket.png";
    link.href = `https://oph-ticket-gen.vercel.app/api/og?name=${name}&major=${major}&bg=${bg}`;
    link.click();
  };

  return (
    <section className="relative h-full min-h-screen bg-[url('/assets/hero.png')] bg-cover bg-center">
      <div className="flex h-full flex-col justify-center gap-8 px-20 py-32 sm:py-20">
        <p className="text-center font-body text-xl text-white sm:text-5xl">
          คุณ{name} อาจจะเหมาะกับภาควิชา
          <br />
          <span className="text-4xl leading-none text-space-normal">
            {AllMajors.find((currMajor) => currMajor.id === major)?.nameTH}(
            {AllMajors.find((currMajor) => currMajor.id === major)?.nameEN})
          </span>
        </p>

        {bg}

        <img
          src={`https://oph-ticket-gen.vercel.app/api/og?name=${name}&major=${major}&bg=${bg}`}
          alt="ticket"
          height={200}
          width={200}
          className="mx-auto"
        />

        <div className="flex w-full flex-col justify-center gap-2 sm:flex-row">
          <button
            onClick={() => {
              localStorage.removeItem("major");
              localStorage.removeItem("name");
              window.location.href = "/game";
            }}
            className={
              "group flex items-center gap-6 rounded-full bg-space-normal py-3 px-16 text-white shadow-md transition-colors duration-500 hover:bg-space-normal/50"
            }
          >
            <span className="text-xl">เล่นเกมอีกรอบ</span>
          </button>

          <button
            onClick={() => download()}
            className={
              "group flex items-center gap-6 rounded-full bg-space-normal py-3 px-16 text-white shadow-md transition-colors duration-500 hover:bg-space-normal/50"
            }
          >
            <span className="text-xl">ดาวน์โหลดรูป</span>
          </button>

          {/* <button
            onClick={() => {
              // swap between bg1, bg2 and bg3
              setBg((prev) => {
                if (prev === BG[0]) {
                  return BG[1];
                } else if (prev === BG[1]) {
                  return BG[2];
                } else {
                  return BG[0];
                }
              });
            }}
            className={
              "group flex items-center gap-6 rounded-full bg-space-normal py-3 px-16 text-white shadow-md transition-colors duration-500 hover:bg-space-normal/50"
            }
          >
            <span className="text-xl">เปลี่ยนพื้นหลังรูป</span>
          </button> */}
        </div>
      </div>
    </section>
  );
}
