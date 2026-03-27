import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Login } from './Views/Login'
import { Profile } from './Views/Profile'
import ResponsiveAppBar from './components/AppBar'
import { useState } from 'react'

function App() {
  const [isLogin, setIsLogin] = useState(false)

  return (
    <BrowserRouter>
      {isLogin && <ResponsiveAppBar />}
      <Routes>
        <Route path='/' element={<Login setIsLogin={setIsLogin} />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
