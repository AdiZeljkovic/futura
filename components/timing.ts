// Shared choreography: hero intro and nav wait for the preloader to finish.
// The preloader plays once per browser session; afterwards everything starts immediately.
export const INTRO_HOLD = 2.0; // s — when the preloader starts its exit

const KEY = "futura-intro-played";

export function introAlreadyPlayed(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return sessionStorage.getItem(KEY) === "1";
  } catch {
    return false;
  }
}

export function markIntroPlayed() {
  try {
    sessionStorage.setItem(KEY, "1");
  } catch {
    /* storage unavailable — intro will simply replay */
  }
}

export function getIntroHold(): number {
  return introAlreadyPlayed() ? 0 : INTRO_HOLD;
}
