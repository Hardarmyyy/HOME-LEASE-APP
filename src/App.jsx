import './App.css'
import Navigation from './Components/Navigation'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Navigation></Navigation>

      <Outlet></Outlet>
    </>
  )
}

export default App
