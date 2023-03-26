import { NextApiRequest, NextApiResponse } from "next"

import { ImageResponse } from "@vercel/og"

export const config = {
  runtime: "experimental-edge",
}

const RobotoSlab = fetch(new URL("../../fonts/RobotoSlab-Bold.ttf", import.meta.url)).then((res) => res.arrayBuffer())

const majors = [
  "adme",
  "aero",
  "ai",
  "automative",
  "chemical",
  "chpe",
  "civil",
  "comp-cedt",
  "computer",
  "electrical",
  "environmental",
  "ice",
  "ie",
  "mechanical",
  "metal",
  "mining",
  "nano",
  "nuclear",
  "survey",
]

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const url = new URL(req.url ?? "")
    const name = url.searchParams.get("name") ?? "Name"
    const major =
      url.searchParams.get("major") && majors.includes(url?.searchParams?.get("major") ?? "")
        ? url.searchParams.get("major")
        : "adme"

    return new ImageResponse(
      (
        <div tw="bg-[#F6F3EC] flex justify-center items-center relative w-full h-full" height={1920} width={1080}>
          <div style={{ fontFamily: "Roboto Slab" }} tw="flex flex-col text-center relative w-full h-full">
            <div tw="relative flex">
              <img alt="bg" height={1920} width={1080} src={`${url.origin}/assets/bg/bg1.png`} />
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
