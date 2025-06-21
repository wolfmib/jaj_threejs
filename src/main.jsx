// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'



// ✅ Import Zustand store
import { useOverlayStore } from './store'

// ✅ Debug: test toggleTV once on load
//const showTV = useOverlayStore.getState().showTV
//console.log("✅ toggleTV type:", typeof showTV) // should be "function"
//showTV?.()  // optional chaining prevents crash if undefined


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

