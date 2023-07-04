import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, Route, createRoutesFromElements, createBrowserRouter  } from 'react-router-dom'
import FindHome from './Components/FindHome.jsx'
import ListHome from './Components/ListHome.jsx'
import Login from './Components/Login.jsx'
import Signup from './Components/Signup.jsx'
import Home from './Components/Home.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App></App>}>

      <Route path='/' element={<Home></Home>}></Route>

      <Route path='/findproperty' element={<FindHome></FindHome>}></Route>

      <Route path='/listproperty' element={<ListHome></ListHome>}></Route>

      <Route path='/login' element={<Login></Login>}></Route>

      <Route path='/signup' element={<Signup></Signup>}></Route>

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
