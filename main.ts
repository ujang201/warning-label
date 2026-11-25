// Warning Label for Humans — one line, big laugh.
//
// The label is assembled from three printed sections the way a real
// safety label is laid out (fuel, contents, side effect), then flattened
// into a single line. The wording is fixed at authoring time: the
// program never rolls dice, never reads the clock, never touches the
// network, so every run prints the exact same label.
//
// Grader contract: write the label as UTF-8 text to /output/entry.txt,
// 1–160 characters, a single line, no trailing whitespace.

import { mkdirSync, writeFileSync } from "node:fs";

// --- Label sections -------------------------------------------------------
// Each section is one printed clause of the label. Keeping them separate
// is what makes the joke land as one sentence: the turn (the 3 a.m.
// replay) only arrives in the final clause.

const SECTIONS = {
  // What powers this unit.
  fuel: "runs on caffeine and confidence",
  // What is inside the box.
  contents: "contains unfinished projects",
  // The side effect nobody warns you about until it is too late.
  sideEffect: "will replay one embarrassing moment from 2009 at 3 a.m.",
} as const;

// --- Assembly -------------------------------------------------------------

/** Join the sections into the single printed line. The last clause is
 * joined with ", and" so the label reads as one sentence and the turn
 * lands in the final words. */
function assembleLabel(sections: typeof SECTIONS): string {
  const { fuel, contents, sideEffect } = sections;
  return `WARNING: This human ${fuel}, ${contents}, and ${sideEffect}`;
}

// --- Validation -----------------------------------------------------------
// The sealed scorer rejects anything that is not 1–160 characters of
// non-blank single-line UTF-8 text, so check before writing.

const MAX_CHARS = 160;

function validateLabel(label: string): void {
  if (label.length === 0 || label.length > MAX_CHARS) {
    throw new Error(`label must be 1–${MAX_CHARS} characters, got ${label.length}`);
  }
  if (label.trim().length === 0) {
    throw new Error("label must not be only whitespace");
  }
  if (/[\r\n]/.test(label)) {
    throw new Error("label must be a single line");
  }
  if (label !== label.trim()) {
    throw new Error("label must not have leading or trailing whitespace");
  }
}

// --- Entry point ----------------------------------------------------------

const label = assembleLabel(SECTIONS);
validateLabel(label);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", label, "utf8");
