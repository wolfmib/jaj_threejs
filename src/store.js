// path: src/store.js
import { create } from 'zustand'

export const useOverlayStore = create((set) => ({
  // 🔁 UI toggle for TV screen
  showTV: false,
  toggleTV: () => set((s) => ({ showTV: !s.showTV })),

  // ✅ NEW: trigger to show dropping logos (e.g., Ctrl+0)
  showLogos: false, // <--- NEW
  triggerLogos: () => set({ showLogos: true }), // <--- NEW

  // 🧭 Step system (for floating text instructions)
  step: 0,
  next: () => set((s) => ({ step: s.step + 1 })),
  setStep: (n) => set({ step: n }),

  // 🎮 Player physics API (for position tracking, etc.)
  playerAPI: null,
  setPlayerAPI: (api) => set({ playerAPI: api }),
}))
