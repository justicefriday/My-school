import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../components/Footer';
const MainLayout = () => {
  return (
      <>
      <NavBar/>
      <Outlet />
      <Footer />
      <ToastContainer/>
      </>
  )
}

export default MainLayout