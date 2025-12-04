import { create } from "zustand";

export const useMacStore = create((set) => ({
    color : '#adb5bd',
    setColor : (color) => set({ color }),  

    scale: 0.08,
    setScale : (scale) => set({ scale }),

    reset: () => set({ color: '#adb5bd', scale: 0.08 }),
}));

export default useMacStore;