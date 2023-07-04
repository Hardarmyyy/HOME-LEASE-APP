import './App.css'
import { Outlet } from 'react-router-dom'
import Navigation from './Components/Navigation'
import { useContext } from 'react'
import { myUserContext } from './Utilities/UserContext'


function App() {

const {user, handleLoginPage, handleSignUpPage, homePageRedirect} = useContext(myUserContext)

  return (
    <>
      <header>

      <Navigation user = {user} handleLoginPage = {handleLoginPage} handleSignUpPage={handleSignUpPage} homePageRedirect={homePageRedirect}></Navigation>

      </header>
      

      <Outlet></Outlet>
    </>
  )
}

export default App
