import './App.css'
import { useLocation } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import {useEffect} from 'react'


function App() {

const location = useLocation()
const Location = location.pathname

// define a use effect hook to scroll page to top when page changes;

useEffect(() => {
window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
});
}, [Location]);

return (
  <>

    <Outlet></Outlet>
  </>
)
}

export default App
