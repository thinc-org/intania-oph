import type { ScoreType } from "./score";

export type Subject = "cal" | "phys" | "chem" | "draw" | "com" | "mat";
export type Point = Record<Subject, number>;

export interface Question {
  message: string;
  points: Point;
  goto: string;
}

export type Scene = Record<string, { message: string; choices: Question[] }>;

export const CustomResponse: Record<string, string> = {
  ศิลปะ: "มาช่วยทำกราฟิกให้พี่ ๆ หน่อย จะตายละ ;-;",
  ดนตรี: "ชมรม IMC (Intania Music Club) รอคุณอยู่นะ !",
  พละ: "ชมรมกีฬารอคุณอยู่นะ !",
};

export const BaseScore: ScoreType = {
  cal: 0,
  chem: 0,
  com: 0,
  draw: 0,
  mat: 0,
  phys: 0,
};

export const GameScene: Scene = {
  Game00: {
    message:
      "สวัสดีคุณ{{name}} ! คุณตื่นมาโรงเรียน วันนี้คุณรู้สึกอยากไปโรงเรียนสุด ๆ เพราะจะได้เรียนวิชา...",
    choices: [
      {
        message: "คณิตศาสตร์",
        points: { ...BaseScore, cal: 2 },
        goto: "Game01",
      },
      {
        message: "ฟิสิกส์",
        points: { ...BaseScore, phys: 2 },
        goto: "Game01",
      },
      {
        message: "เคมี",
        points: { ...BaseScore, chem: 2 },
        goto: "Game01",
      },
      {
        message: "ศิลปะ",
        points: { ...BaseScore },
        goto: "Gamealt00",
      },
      {
        message: "ดนตรี",
        points: { ...BaseScore },
        goto: "Gamealt00",
      },
      {
        message: "พละ",
        points: { ...BaseScore },
        goto: "Gamealt00",
      },
    ],
  },
  Gamealt00: {
    message: "แน่ใจว่ามาถูกคณะแล้วแน่นะ",
    choices: [
      {
        message: "แน่นอน เราสนใจทำอะไรหลายอย่าง",
        points: { ...BaseScore },
        goto: "Gamealt00_1",
      },
      {
        message: "ไม่อะ",
        points: { ...BaseScore },
        goto: "Gamealt00_2",
      },
    ],
  },
  Gamealt00_1: {
    message: "{{response}}",
    choices: [
      {
        message: "ได้เลย !",
        points: { ...BaseScore },
        goto: "Game01",
      },
    ],
  },
  Gamealt00_2: {
    message: "แบร่ ไม่ยอมหรอกนะ มาเล่นกันต่อก่อน !",
    choices: [
      {
        message: "...ก็ได้",
        points: { ...BaseScore },
        goto: "Game01",
      },
    ],
  },
  Game01: {
    message:
      "วิชาแรกจบแล้ว ! อาจารย์วิชาต่อไปเดินเข้ามาในห้อง วิชานั้นคือวิชาชีววิทยา คุณรู้สึกยังไง",
    choices: [
      {
        message: "ชีวะอีกแล้วหรอ เบื่อจัง",
        points: { ...BaseScore },
        goto: "Game02",
      },
      {
        message: "ก็โอเคนะ ฟังชิล ๆ ได้",
        points: { ...BaseScore, mat: 1 },
        goto: "Game02",
      },
      {
        message: "ชอบเลยรักเลย อยากเรียนสุด ๆ",
        points: { ...BaseScore },
        goto: "Gamealt01",
      },
    ],
  },
  Gamealt01: {
    message: "คุณมาถูกคณะแน่นะ",
    choices: [
      {
        message: "แน่สิอยากเข้าวิศวะมากกก",
        points: { ...BaseScore, mat: 1 },
        goto: "Game02",
      },
      {
        message: "นั่นสิ ก็งงอยู่เหมือนกัน",
        points: { ...BaseScore },
        goto: "Game02",
      },
    ],
  },
  Game02: {
    message:
      "ในที่สุดคาบชีวะก็จบลง มีเพื่อนคนหนึ่งของคุณเดินมาบอกว่าในอีกสองวันจะมีการลงชื่อเลือกชมรม เพื่อนชวนคุณไปอยู่่ชมรมเคมี คุณ{{name}}จะไปมั้ย ?",
    choices: [
      {
        message: "ไปสิ น่าสนุกจะตาย",
        points: { ...BaseScore, chem: 1, mat: 1 },
        goto: "Game03",
      },
      {
        message: "ไม่ดีกว่า ไม่ได้สนใจเคมีขนาดนั้น",
        points: { ...BaseScore, chem: -1 },
        goto: "Game03",
      },
    ],
  },
  Game03: {
    message:
      "คาบต่อไปของคุณเป็นคาบว่างเพราะอาจารย์ไม่สบาย แต่เพราะห้องคุณเรียนไม่ทัน อาจารย์สองวิชาจึงแย่งกันเข้าสอนแต่ตกลงกันไม่สำเร็จ สุดท้ายอาจารย์ทั้งสองเลยให้ห้องคุณโหวตว่าอยากเรียนวิชาไหน",
    choices: [
      {
        message: "คณิตศาสตร์",
        points: { ...BaseScore, cal: 1 },
        goto: "Game04",
      },
      {
        message: "ฟิสิกส์",
        points: { ...BaseScore, phys: 1 },
        goto: "Game04",
      },
      {
        message: "โดดดีกว่าถ้าต้องเรียนสองวิชานี้",
        points: { ...BaseScore },
        goto: "Game04",
      },
    ],
  },
  Game04: {
    message:
      "กริ๊ง ! ถึงเวลาพักเที่ยงแล้ว ขณะที่คุณกำลังรับประทานอาหารกลางวัน เพื่อนคุณก็มาชวนไป Workshop เขียนโปรแกรมเพื่อเก็บ Portfolio เข้ามหาลัย คุณจะตอบอย่างไร",
    choices: [
      {
        message: "เขียนโค้ดเป็นอยู่แล้ว เรียนพื้นฐานไปก็ไม่ได้อะไร",
        points: { ...BaseScore, com: 2 },
        goto: "Game05",
      },
      {
        message: "ไปสิ น่าสนใจมาก ๆ",
        points: { ...BaseScore, com: 1 },
        goto: "Game05",
      },
      {
        message: "ไม่อะ ไม่ชอบโค้ดเลย เห็นแล้วอยากนอนสุด ๆ",
        points: { ...BaseScore, com: -1 },
        goto: "Game05",
      },
    ],
  },
  Game05: {
    message:
      "หมดเวลาพักแล้วถึงเวลาวิชานอน เอ้ย ! วิชาศิลปะต่างหาก วันนี้อาจารย์มีงานมาให้ทำนั้นคือ การทดสอบมองภาพสามมิติ คุณรู้สึกยังไง",
    choices: [
      {
        message: "ของง่าย ๆ เลย ถนัดสุด ๆ",
        points: { ...BaseScore, draw: 2 },
        goto: "waiting",
      },
      {
        message: "น่าสนุกนะ แต่คงต้องใช้เวลาสักพักใหญ่ ๆ เลย",
        points: { ...BaseScore, draw: 1 },
        goto: "waiting",
      },
      {
        message: "ฟังดูยากจัง ต้องคิดจนปวดหัวแน่เลย",
        points: { ...BaseScore, draw: -1 },
        goto: "waiting",
      },
    ],
  },

  // goto tiebreaker
};

export interface TiebreakQuestion {
  message: string;
  goto: string;
}

export type TiebreakScene = Record<
  string,
  { message: string; choices: TiebreakQuestion[] }
>;

export const TieBreaker: TiebreakScene = {
  // mech, auto
  tie01: {
    message:
      "วันนี้เลิกเรียนก่อนเวลาคุณมีนัดกับเพื่อนไปงาน motor show เมื่อถึงงานคุณกับเพื่อนหยุดอยู่ที่รถคันหนึ่งคุณสนใจอะไร",
    choices: [
      {
        message: "แน่นอนว่าต้องเป็นเครื่องยนต์ V12 6.5 ลิตรนั่นสิ",
        goto: "tiealt01",
      },
      {
        message: "สนใจการออกแบบของรถมากกว่านะ",
        goto: "RESULT_auto",
      },
    ],
  },
  tiealt01: {
    message:
      "เจ้าของงานเห็นคุณสนใจมากจึงชวนคุณและเพื่อนไปดูงานจัดแสดงเครื่องยนต์สำหรับเครื่องบิน คุณจะตอบรับคำเชิญไหม ?",
    choices: [
      {
        message: "ไปสิ อยากรู้วิธีการทำงานของมันมาก ๆ",
        goto: "RESULT_mech",
      },
      {
        message: "ไม่ไปดีกว่า สนใจเครื่องยนต์รถมากกว่า",
        goto: "RESULT_auto",
      },
    ],
  },
  // che, pt , env, nt
  tie02: {
    message:
      'วันนี้เลิกเรียนก่อนเวลา คุณตัดสินใจไปกินข้าวที่ห้างกับเพื่อน ๆ ของคุณ ระหว่างเดินทางมีคนมาขอสัมภาษณ์ว่า "คุุณอยากแก้ไขปัญหาอะไรมากที่สุดในตอนนี้"',
    choices: [
      {
        message: "ปัญหาน้ำเสียจากโรงงานอุตสาหกรรม ต้องหาวิธีจัดการได้แล้ว",
        goto: "RESULT_che",
      },
      {
        message: "ปัญหาน้ำมันขาดแคลน จะหมดเมื่อไหร่ก็ไม่รู้เลย",
        goto: "RESULT_pt",
      },
      {
        message: "ปัญหามลพิษ แน่นอนอยู่แล้ว อากาศตอนนี้ฆ่าคนได้เลยนะ",
        goto: "RESULT_env",
      },
      {
        message:
          "อุปกรณ์ทางการแพทย์ขาดการพัฒนา อยากพัฒนาเครื่องมือทางการแพทย์ให้มีประสิทธิภาพยิ่งขึ้น",
        goto: "RESULT_che",
      },
      {
        message: "ปัญหาพลังงาน อยากให้มีแหล่งพลังงานมากยิ่งขึ้น",
        goto: "RESULT_nt",
      },
      {
        message:
          "อยากวิจัยเกี่ยวกับวัสดุที่ใช้สร้างเครื่องจักรที่มีความทนทานกว่ายิ่งกว่าที่มีอยู่ตอนนี้ ที่จะทำให้เครื่องจักรมีอายุการใช้งานได้นานยิ่งข้น",
        goto: "RESULT_mt",
      },
    ],
  },
  // civil, geo, mt
  tie03: {
    message:
      "วันนี้เลิกเรียนก่อนเวลาระหว่างเดินกลับกับเพื่อน เพื่อนคุณได้ชวนคุณเก็บพอร์ต คุณอยากเก็บพอร์ตแบบไหน",
    choices: [
      {
        message: "สายโปรแกรมมิ่งละกัน ช่วงนี้กำลังมาแรง",
        goto: "tienew3",
      },
      {
        message:
          "อยากไปค่ายชนบทนะ พอดีว่ารู้สึกอยากเข้าถึงกลุ่มคน อยากได้ประสบการณ์ใหม่ๆด้วย",
        goto: "tienew2",
      },
      {
        message: "อยากไปค่ายสายวิทย์เช่นพวกค่ายทำแลปต่างๆนะ น่าสนใจดี",
        goto: "tienew1",
      },
    ],
  },
  tiealt03: {
    message:
      "เพื่อนคุณจึงบอกว่ามีอยู่สองค่าย ค่ายแรก ไปอาสาช่วยคนชนบทสร้างบ้าน ค่ายที่สอง ไปเป็น staff ช่วยนักสำรวจ สำรวจพื้นที่ชนบท คุณจะไปค่ายไหน ?",
    choices: [
      {
        message: "ค่ายแรกแน่นอน เรื่องสร้างขอให้บอก",
        goto: "RESULT_civil",
      },
      {
        message: "เกิดมาเป็นนักสำรวจแบบนี้ก็ค้องค่ายที่สองแล้วแหละ",
        goto: "RESULT_sv",
      },
    ],
  },
  // sv, cp
  tie04: {
    message:
      "วันนี้เลิกเรียนก่อนเวลาระหว่างเดินกลับกับเพื่อน เพื่อนคุณชวนคุณไปเดินเขา คุณจะไปกับเพื่อนด้วยไหม ?",
    choices: [
      { message: "ไปดิ น่าสนุกจะตาย", goto: "RESULT_sv" },
      { message: "เดินเขานี่ต้องลุยไหมนะ", goto: "tiealt04" },
    ],
  },
  tiealt04: {
    message: '"ลุยสิ คิดว่าจะไปเดินเล่นหรอ" คุณจะยังไปอยู่ไหม ?',
    choices: [
      { message: "ไปดิ น่าสนุกจะตาย", goto: "RESULT_sv" },
      {
        message: "ไม่เป็นไร ขอนั่งกลับไปนั่งเขียนโค้ดที่บ้านดีกว่า",
        goto: "tiealtcp",
      },
    ],
  },
  // cp
  tiealtcp: {
    message:
      "หลังจากเลิกเรียนคุณก็กลับบ้านทันที และคุณก็อยากพัฒนาสกิลด้านการเขียนโปรแกรมของคุณ จะทำอย่างไรดี​ ?",
    choices: [
      {
        message:
          "ลองทำโปรเจกต์ พยายามหาโอกาสได้ลองทำงานจริง และวางแผนฝึกงานกับบริษัทต่าง ๆ ในอนาคต",
        goto: "RESULT_cedt",
      },
      {
        message:
          "เปิด w3schools แล้วก็นั่งฝึกสกิลโปรแกรมมิ่ง ขอลองเก็บเกี่ยวประสบการณ์และความรู้ไปก่อนนะ",
        goto: "RESULT_cp",
      },
    ],
  },

  // adme, aero
  tie10: {
    message:
      "วันนี้เลิกเรียนก่อนเวลาคุณมีนัดกับเพื่อนไปงาน motor show เมื่อถึงงานคุณกับเพื่อนหยุดอยู่ที่รถคันหนึ่งคุณสนใจอะไร",
    choices: [
      {
        message: "แน่นอนว่าต้องเป็นเครื่องยนต์ V12 6.5 ลิตรนั่นสิ",
        goto: "tiealt10",
      },
      {
        message: "สนใจการออกแบบของรถมากกว่านะ",
        goto: "RESULT_adme",
      },

      {
        message: "ไม่สนใจเลย ไปดูอย่างอื่นแทนได้ไหม",
        goto: "tiealt2-10",
      },
    ],
  },
  tiealt10: {
    message:
      "เจ้าของงานเห็นคุณสนใจมากจึงชวนคุณและเพื่อนไปดูงานจัดแสดงเครื่องยนต์สำหรับเครื่องบิน คุณจะตอบรับคำเชิญไหม ?",
    choices: [
      {
        message: "ไปสิ อยากรู้วิธีการทำงานของมันมาก ๆ",
        goto: "RESULT_adme",
      },
      {
        message: "ไม่ไปดีกว่า สนใจเครื่องบินมากกว่า",
        goto: "RESULT_aero",
      },
    ],
  },
  "tiealt2-10": {
    message:
      "ข้าง ๆ งาน motor show มีการจัดงานสัปดาห์วิทยาศาสตร์แห่งชาติ คุณจึงชวนเพื่อนคุณไปดูงานนั้นแทน จะเริ่มเดินที่ส่วนไหนดี ?",
    choices: [
      {
        message: "โซนจัดแสดงนวัตกรรมและเทคโนโลยีต่าง ๆ อยากเห็นหุ่นยนต์เจ๋ง ๆ",
        goto: "RESULT_ai",
      },
      {
        message:
          "โซนนวัตกรรม start up ต่าง ๆ ที่ใช้เทคโนโลยีเจ๋ง ๆ ในการแก้ปัญหาต่าง ๆ",
        goto: "RESULT_ice",
      },
      {
        message:
          "ไปฟัง talk เกี่ยวกับการผลิตหุ่นยนต์จิ่วเพื่อช่วยเหลือทางการแพทย์",
        goto: "RESULT_nano",
      },
      {
        message:
          "โซน exbition ที่ให้ความรู้เกี่ยวกับีความแตกต่างของสูตรน้ำมันหลาย ๆ แบบ",
        goto: "RESULT_chpe",
      },
    ],
  },

  // chpe, nano
  tie11: {
    message:
      "เรียนเสร็จแล้ว ! เพื่อนชวนคุณไปเยี่ยมชมนิทรรศการวิทยาศาสตร์ โดยนิทรรศการมีอยู่ 2 ส่วน — ส่วนแรกเป็นการบรรยายวิธีการผลิตหุ่นยนต์นาโนเพื่อช่วยเหลือทางการแพทย์ และอีกส่วนเป็นการอธิบายความแตกต่างของน้ำมันที่ใช้ในเครื่องยนต์ คุณจะเลือกเข้าส่วนไหนก่อน ?",
    choices: [
      {
        message: "ก็ต้องหุ่นยนต์นาโนเลย ฟังดูเท่มาก ๆ",
        goto: "RESULT_nano",
      },
      {
        message: "ส่วนน้ำมันน่าสนใจมาก ๆ อยากรู้เกี่ยวกับโครสร้างเคมีต่าง ๆ",
        goto: "RESULT_chpe",
      },
    ],
  },
  // ai, ice
  tie12: {
    message:
      "โรงเรียนคุณเปิดหลักสูตรให้เลือกวิชาเสรีได้ 1 วิชา คุณกำลังเลือกระหว่างวิชาทำหุ่นยนต์ กับวิชาเขียนเว็บไซต์คุณจะเลือกลงวิชาอะไร ?",
    choices: [
      {
        message: "วิชาทำหุ่นยนต์เลย อยากสร้าง hardware มาก ๆ",
        goto: "RESULT_ai",
      },
      {
        message: "วิชาเว็บไซต์ดิ อยากเขียนเว็บไซต์เป็น",
        goto: "RESULT_ice",
      },
    ],
  },
  tienew1: {
    message: "ขอถามอีกที คุณชอบชีวะหรือเคมีมากกว่ากันนะ",
    choices: [
      {
        message: "เคมี",
        goto: "RESULT_che",
      },
      {
        message: "ชีวะ",
        goto: "RESULT_mt",
      },
    ],
  },
  tienew2: {
    message:
      "เพื่อนคุณจึงบอกว่ามีอยู่สองค่าย ค่ายแรก ไปอาสาช่วยคนชนบทสร้างสร้างบ้าน ค่ายที่สอง ไปเป็นสตาฟช่วยนักสำรวจ สำรวจพื้นที่ชนบทคุณจะไปค่ายไหน",
    choices: [
      {
        message: "ค่ายแรกแน่นอนเรื่องสร้างขอให้บอก",
        goto: "RESULT_civil",
      },
      {
        message: "ค่ายสองสิ เพราะเราเกิดมาเป็นนักสำรวจ !",
        goto: "RESULT_sv",
      },
    ],
  },
  tienew3: {
    message:
      "เพื่อนของคุณบอกว่า ไม่เป็นไร และถามต่อว่า ถ้าอย่างนั้นเราไปฝึกงานสายคอมกันไหมล่ะ ในเมื่อพวกเราสนใจด้านโปรแกรมมิ่งทั้งคู่",
    choices: [
      {
        message: "เอาสิ ได้พอร์ตและได้ประสบการณ์ด้วย",
        goto: "RESULT_cedt",
      },
      {
        message:
          "ไม่ล่ะ เราอาจจะยังไม่พร้อมในตอนนี้ ขออ่านหนังสือและฝึกเอาเองก่อนนะ",
        goto: "RESULT_cp",
      },
    ],
  },
};
