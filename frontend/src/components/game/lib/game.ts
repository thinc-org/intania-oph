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
export const BaseScore = { cal: 0, chem: 0, com: 0, draw: 0, mat: 0, phys: 0 };

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
        goto: "Game02",
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
