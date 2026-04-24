import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login  from './Views/Login'
import Profile  from './Views/Profile'
import ResponsiveAppBar from './components/AppBar'
import { useEffect, useState } from 'react'
import Admin from './Views/Admin'

const API_URL = "http://localhost:8000"
//const usuarios =[{_id:1, name:"primero"},{_id:2, name:"segundo"},{_id:3, name:"tercero"}]

function App() {
  const [isLogin, setIsLogin] = useState(false)
  const [user, setUser] = useState({})
  const [users, setUsers] = useState([])
  useEffect(()=>{
    if(isLogin){
      const getUsers = async ()=>{
        const res = await fetch(API_URL+"/users")
        const data = await res.json()
        console.log(data)
        setUsers(data)


      }
      getUsers()
    }
  },[isLogin])

  const login = async (user) => {

    const res = await fetch(API_URL+"/login", {
      method: "POST",
      headers:{"content-type":"application/json"},
      body: JSON.stringify(user)
    })
    const data = await res.json()
    setIsLogin(data.login)
    setUser(data.user)
    return data

  }
  const delUser = async (id)=>{
    setUsers(users.filter((u)=> u._id !== id))
    await fetch(API_URL+"/users/"+id, {
      method: "DELETE"
    })

  }
  const addUser = async (newUser)=>{

    const res = await fetch(API_URL+"/users", {
      method: "post",
      headers:{"content-type":"application/json"},
      body: JSON.stringify(newUser)
    })

    const data = await res.json()
   //  const{name,username,password} = newUser
    //const data ={user:{_id:4, name:name}}
    setUsers([...users, data.users])

  }

  const logout = ()=>{
    setIsLogin(false)
    setUser({})
  }

  return (
    <BrowserRouter>
      {isLogin && <ResponsiveAppBar logout={logout} />}
      <Routes>
        <Route path='/' element={<Login login={login} />} />
        <Route path='/profile' element={<Profile user={user} />} />
        <Route path='/Admin' element={<Admin addUser={addUser} users={users} delUser={delUser} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
