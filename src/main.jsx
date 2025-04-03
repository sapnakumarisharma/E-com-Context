import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import State from './store/State.jsx'
import UserState from './store/UserState.jsx'

createRoot(document.getElementById("root")).render(
  <UserState>
    <State>
      <App />
    </State>
  </UserState>
);
