//path: src/store.js
import { create } from 'zustand'

export const useOverlayStore = create((set) => ({
  showTV: false,
  toggleTV: () => set((s) => ({ showTV: !s.showTV })),

  step: 0,
  next: () => set((s) => ({ step: s.step + 1 })),
  setStep: (n) => set({ step: n }),

  playerAPI: null,
  setPlayerAPI: (api) => set({ playerAPI: api }),
}))
