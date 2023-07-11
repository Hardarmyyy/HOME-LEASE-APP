import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, Route, createRoutesFromElements, createBrowserRouter  } from 'react-router-dom'
import FindProperty from './Components/Tenant-Dashboard/FindProperty.jsx'
import ListProperty from './Components/LandLord-Dashboard/ListProperty.jsx'
import Login from './Components/Login/Login.jsx'
import Signup from './Components/SignUp/Signup.jsx'
import Home from './Components/LandingPage/Home.jsx'
import NotFound from './Components/NotFoundPage/NotFound.jsx'
import PrivatesRoutes from './Utilities/PrivatesRoutes.jsx'
import UserContextProvider from './Utilities/UserContext.jsx'
import PropertyContextProvider from './Utilities/PropertyContext.jsx'


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
      <PropertyContextProvider>
        <RouterProvider router = {router}>
          <App />
        </RouterProvider>
      </PropertyContextProvider>
    </UserContextProvider>
  </React.StrictMode>,
)
