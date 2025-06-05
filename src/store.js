import { create } from 'zustand'

export const useOverlayStore = create((set) => ({
  step: 0,
  next: () => set((s) => ({ step: s.step + 1 })),
  setStep: (n) => set({ step: n })
}))
