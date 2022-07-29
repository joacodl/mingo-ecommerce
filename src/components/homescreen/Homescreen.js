import React from 'react'

// Components
import MainHome from './MainHome'
import SaleHomescreen from './SaleHomescreen'
import RoomHomescreen from './RoomHomescreen'
import AboutUsHomescreen from './AboutUsHomescreen'
import BlogHomescreen from './BlogHomescreen'

const Homescreen = () => {
  return (
    <>
        <MainHome />
        <SaleHomescreen />
        <RoomHomescreen />
        <AboutUsHomescreen />
        <BlogHomescreen />
    </>
  )
}

export default Homescreen