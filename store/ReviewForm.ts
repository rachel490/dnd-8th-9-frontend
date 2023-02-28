import { create } from "zustand";

interface FormMenuStore {
  id: number;
  name: string;
  menuImage: string;

  setMenu: (menu: IMenu) => void;
}

interface IMenu {
  id: number;
  name: string;
  menuImage: string;
}

interface FormSizeDangdoStore {
  size: string;
  dangdo: number;

  setSizeDangdo: ({ size, dangdo }: ISizeDangdo) => void;
}

interface ISizeDangdo {
  size: string;
  dangdo: number;
}

interface FormDetailStore {
  best: string;
  comment: string;
  imgFiles: (string | ArrayBuffer | null)[];

  setDetail: ({ best, comment, imgFiles }: IDetail) => void;
}

interface IDetail {
  best: string;
  comment: string;
  imgFiles: (string | ArrayBuffer | null)[];
}

export const useFormMenuStore = create<FormMenuStore>()(set => ({
  id: 0,
  name: "",
  menuImage: "",

  setMenu: (menu: IMenu) => set({ id: menu.id, name: menu.name, menuImage: menu.menuImage }),
}));

export const useFormSizeDangdoStore = create<FormSizeDangdoStore>()(set => ({
  size: "미니",
  dangdo: 100,

  setSizeDangdo: ({ size, dangdo }: ISizeDangdo) => set({ size, dangdo }),
}));

export const useFormDetailStore = create<FormDetailStore>()(set => ({
  best: "",
  comment: "",
  imgFiles: [],

  setDetail: ({ best, comment, imgFiles }: IDetail) => set({ best, comment, imgFiles }),
}));
