import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, Route, createRoutesFromElements, createBrowserRouter  } from 'react-router-dom'
import FindProperty from './Components/FindProperty.jsx'
import ListProperty from './Components/LandLord-Dashboard/ListProperty.jsx'
import Login from './Components/Login.jsx'
import Signup from './Components/Signup.jsx'
import Home from './Components/Home.jsx'
import NotFound from './Components/NotFound.jsx'
import PrivatesRoutes from './Utilities/PrivatesRoutes.jsx'
import UserContextProvider from './Utilities/UserContext.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App></App>}>

      <Route index element={<Home></Home>}></Route>

      <Route path='/find-property' element={<FindProperty></FindProperty>}></Route>

      <Route  element={<PrivatesRoutes></PrivatesRoutes>}>

        <Route path='/list-property' element={<ListProperty></ListProperty>}></Route>

      </Route>

      <Route path='/login' element={<Login></Login>}></Route>

      <Route path='/signup' element={<Signup></Signup>}></Route>

      <Route path='*' element={<NotFound></NotFound>}></Route>

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextProvider>
      <RouterProvider router = {router}>
        <App />
      </RouterProvider>
    </UserContextProvider>
  </React.StrictMode>,
)
