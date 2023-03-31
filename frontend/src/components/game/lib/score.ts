import type { Subject } from "./game";
import { Weight, GroupingEN, GroupingTH } from "./weight";

export interface ScoreType {
  cal: number;
  chem: number;
  com: number;
  draw: number;
  mat: number;
  phys: number;
}

type MajorTH =
  | "civil"
  | "elec"
  | "mech"
  | "auto"
  | "ie"
  | "che"
  | "geo"
  | "pe"
  | "sv"
  | "env"
  | "mt"
  | "cp"
  | "nt";

type MajorEN = "chpe" | "adme" | "ice" | "nano" | "aero" | "ai";

const BaseTHGroup = {
  elec: 0,
  tie01: 0,
  ie: 0,
  tie02: 0,
  tie03: 0,
  tie04: 0,
};

const BaseENGroup = {
  tie10: 0,
  tie11: 0,
  tie12: 0,
};

export function calculateScore(score: ScoreType, isInter: boolean): string {
  // calculate score from score object
  const CalculatedWeight = { ...Weight };

  Object.keys(CalculatedWeight).forEach((major) => {
    Object.keys(CalculatedWeight[major]).forEach((subject) => {
      CalculatedWeight[major][subject as Subject] *= score[subject as Subject];
    });
  });

  const totalScores = Object.keys(CalculatedWeight).reduce(
    (acc, major) => {
      const majorScore = Object.values(CalculatedWeight[major]).reduce(
        (acc, score) => acc + score,
        0
      );
      return { ...acc, [major]: majorScore };
    },
    {
      civil: 0,
      elec: 0,
      mech: 0,
      auto: 0,
      ie: 0,
      che: 0,
      geo: 0,
      pe: 0,
      sv: 0,
      env: 0,
      mt: 0,
      cp: 0,
      nt: 0,
      chpe: 0,
      nano: 0,
      adme: 0,
      aero: 0,
      ice: 0,
      ai: 0,
    }
  );

  // find the major with the highest score - if there are multiple, console.log the amjors and randomly return one major
  // calculate by grouping

  const BaseGrouping = isInter ? BaseENGroup : BaseTHGroup;
  const Grouping = isInter ? GroupingEN : GroupingTH;

  const rawGroupScores: Record<string, number> = Object.keys(Grouping).reduce(
    (acc, group) => {
      const groupScore = Grouping[group].reduce((acc, major) => {
        // console.log("D", totalScores);
        return acc + totalScores[major as MajorTH];
      }, 0);

      return { ...acc, [group]: groupScore };
    },
    BaseGrouping
  );

  const groupScores = Object.entries(rawGroupScores).reduce(
    (acc: Record<string, number>, [group, value]) => {
      acc[group] = value / Grouping[group].length;
      return acc;
    },
    BaseGrouping
  );

  const maxGroup = Object.values(groupScores).reduce(
    (acc, score) => (score > acc ? score : acc),
    0
  );

  const maxGroupMajors = Object.keys(groupScores).filter(
    (group) => groupScores[group] === maxGroup
  );

  console.log("E", groupScores);
  console.log("F", maxGroupMajors);

  if (maxGroupMajors.length > 1) {
    return maxGroupMajors[Math.floor(Math.random() * maxGroupMajors.length)];
  } else if (maxGroupMajors.length === 1) {
    return maxGroupMajors[0];
  } else {
    return "tie02";
  }
}
