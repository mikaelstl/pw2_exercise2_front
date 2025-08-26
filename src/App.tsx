import { BrowserRouter, Route, Routes } from "react-router-dom"
import CreateAccount from "./pages/CreateAccount"
import Login from "./pages/Login"
import Chat from "./pages/Chat"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        
        <Route path="/chat" element={<Chat />} />
        <Route path="/create-account" element={<CreateAccount />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
