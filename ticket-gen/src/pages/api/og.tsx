import { NextApiRequest, NextApiResponse } from "next"

import { ImageResponse } from "@vercel/og"

export const config = {
  runtime: "experimental-edge",
}

const RobotoSlab = fetch(new URL("../../fonts/RobotoSlab-Bold.ttf", import.meta.url)).then((res) => res.arrayBuffer())
// const FCFriday = fetch(new URL("../../fonts/FC Friday Medium.ttf", import.meta.url)).then((res) => res.arrayBuffer())

const majors = [
  "adme",
  "aero",
  "ai",
  "auto",
  "che",
  "chpe",
  "civil",
  "cedt",
  "cp",
  "elec",
  "env",
  "ice",
  "ie",
  "mech",
  "metal",
  "sv",
  "nano",
  "nt",
  "pt",
  "mt",
  "sv",
]

const bgNames = ["bg1", "bg2", "bg3"]

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
    nameTH: "วิศวกรรมคอมพิวเตอร์\nและเทคโนโลยีดิจิทัล",
    nameEN: "CEDT",
  },
  // วิศวกรรมหุ่นยนต์และปัญญาประดิษฐ์ (Robotics & AI)
  {
    id: "ai",
    nameTH: "วิศวกรรมหุ่นยนต์\nและปัญญาประดิษฐ์",
    nameEN: "Robotics & AI",
  },
  // วิศวกรรมสารสนเทศและการสื่อสาร (ICE)
  {
    id: "ice",
    nameTH: "วิศวกรรมสารสนเทศ\nและการสื่อสาร",
    nameEN: "ICE",
  },
  // วิศวกรรมนาโน (NANO)
  {
    id: "nano",
    nameTH: "วิศวกรรมนาโน",
    nameEN: "NANO",
  },
  {
    id: "nt",
    nameTH: "วิศวกรรมนิวเคลียร์",
    nameEN: "Nuclear Engineering",
  },
  // วิศวกรรมการออกแบบและการผลิตยานยนต์ (ADME)
  {
    id: "adme",
    nameTH: "วิศวกรรมการออกแบบ\nและการผลิตยานยนต์",
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
    nameTH: "Chemical and\nProcess Engineering",
    nameEN: "ChPe",
  },
]

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const url = new URL(req.url ?? "")
    const name = url.searchParams.get("name") ?? "Name"
    const bg =
      url.searchParams.get("bg") && bgNames.includes(url?.searchParams?.get("bg") ?? "")
        ? url.searchParams.get("bg")
        : "bg1"
    const major =
      url.searchParams.get("major") && majors.includes(url?.searchParams?.get("major") ?? "")
        ? url.searchParams.get("major")
        : "adme"

    return new ImageResponse(
      (
        <div tw="bg-[#F6F3EC] flex justify-center items-center relative w-full h-full">
          <div style={{ fontFamily: "Roboto Slab" }} tw="flex flex-col text-center relative w-full h-full">
            <div tw="relative flex">
              <img alt="bg" height={1920} width={1080} src={`${url.origin}/assets/bg/${bg}.png`} />
            </div>

            <div
              style={{
                zIndex: "50",
                top: name.length <= 13 ? 450 : 460,
                left: "50%",
                transform: "translateX(-50%)",
              }}
              tw="flex absolute"
            >
              <p
                style={{
                  fontSize: name.length <= 13 ? 72 : 60,
                }}
                tw="text-6xl font-bold py-3 px-8 rounded-full bg-[#F6F3EC] shadow-md text-black"
                // tw="font-bold text-white"
              >
                {name.length <= 18 ? name : name.slice(0, 18) + "..."}
              </p>
            </div>

            {/* major */}
            <div
              style={{
                zIndex: "50",
                top: 800,
                left: "50%",
                transform: "translateX(-50%)",
              }}
              tw="flex absolute"
            >
              <img width={420} height={420} src={`${url.origin}/assets/major/${major}.png`} />
            </div>
          </div>

          <div
            style={{
              zIndex: "50",
              bottom: "20%",
              left: "50%",
              transform: "translateX(-50%)",
            }}
            tw="flex flex-col items-center absolute"
          >
            {AllMajors.find((currMajor) => currMajor.id === major)
              ?.nameTH.split("\n")
              .map((line) => (
                <p
                  style={{
                    fontSize: 50,
                    lineHeight: 1,
                    marginTop: -30,
                  }}
                  tw="font-bold text-center text-white"
                >
                  {line}
                </p>
              ))}

            <p
              style={{
                fontSize: 36,
                marginTop: -10,
              }}
              tw="font-bold text-white"
            >
              ({AllMajors.find((currMajor) => currMajor.id === major)?.nameEN})
            </p>
          </div>
        </div>
      ),
      {
        width: 1080,
        height: 1920,
        fonts: [
          // {
          //   name: "FC Friday",
          //   data: await FCFriday,
          //   weight: 500,
          //   style: "normal",
          // },
          {
            name: "Roboto Slab",
            data: await RobotoSlab,
            weight: 600,
            style: "normal",
          },
        ],
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          "Access-Control-Allow-Headers":
            "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
        },
      }
    )
  } catch (e: any) {
    console.error(`ERROR : ${e.message}`)
    return new Response(`Failed to generate the image:\n${e.message}`, {
      status: 500,
    })
  }
}
