// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

//demo context hacker
import { useOverlayStore } from './store'

window.addEventListener('keydown', (e) => {
  if (e.metaKey || e.ctrlKey) {
    const num = parseInt(e.key)
    if (!isNaN(num)) {
      useOverlayStore.getState().setStep(num - 1)
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

