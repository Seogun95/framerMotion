import { atom, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist';

/* ======= 다크모드 Atom ======= */
const { persistAtom: darkPersist } = recoilPersist({
  key: 'themeLocal',
  storage: localStorage,
});

export const isDarkAtom = atom<boolean>({
  key: 'isDark',
  default: false,
  effects_UNSTABLE: [darkPersist],
});
/* ======= END ======= */
