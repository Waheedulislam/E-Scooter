import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Home from './Pages/Home/Home.jsx'
import router from './Components/Route/Route.jsx'
import { RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>
)
