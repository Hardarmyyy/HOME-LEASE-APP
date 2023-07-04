import './App.css'
import { Outlet } from 'react-router-dom'
import Navigation from './Components/Navigation'
import {useState} from 'react'

function App() {

const [user, setUser] = useState({
  login: false,
  signUp: false,
})

const handleLoginPage = () => {
    setUser((user) => { return{...user, login: true} })
}

const handleSignUpPage = () => {
    setUser((user) => { return{...user, signUp: true} })
}

  return (
    <>
      <header>

        <Navigation user = {user} handleLoginPage = {handleLoginPage} handleSignUpPage={handleSignUpPage}></Navigation>

      </header>
      

      <Outlet></Outlet>
    </>
  )
}

export default App
