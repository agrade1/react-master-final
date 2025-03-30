import { atom } from 'jotai';
import { darkTheme, lightTheme } from '../theme';

export const themeAtom = atom<'dark' | 'light'>('light');

export const themeObjectAtom = atom((get) =>
  get(themeAtom) === 'dark' ? darkTheme : lightTheme
);