
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Login } from './Views/Login'
import { Profile } from './Views/Profile'
import ResponsiveAppBar from './components/AppBar'

function App() {

  const isLogin = true

  return (
    <>
    <BrowserRouter>
    {isLogin && <ResponsiveAppBar />}
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/profile' element={<Profile/>} />
    </Routes> 


    </BrowserRouter>
    </>
     
  )
}

export default App
