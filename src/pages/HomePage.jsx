import React from 'react'
import Home from '../components/Home'
import StudentListings from '../components/StudentListings'
const HomePage = () => {
  return (
      <>
          <Home />
          <StudentListings isHome={true} />
      </>
  )
}

export default HomePage