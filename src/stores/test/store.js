import { create } from "zustand";

// store 생성
const useStore = create((set) => ({
  // store 변수 생성
  count: 0,
  selectedButton: null,

  // store action 생성
  setSelectedButton: (button) => set({ selectedButton: button }),
  incrementCount: () => set((state) => ({ count: state.count + 1 })),
  removeCount: () => set({ count: 0 }),
}));

export default useStore;