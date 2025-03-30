import { atom } from 'jotai';

// 시간
export const defaultTimeAtom = atom(25 * 60);
export const secondsLeftAtom = atom(25 * 60);
export const isRunningAtom = atom(false)

// 라운드, 골
export const roundCountAtom = atom(0);
export const goalCountAtom = atom(0);