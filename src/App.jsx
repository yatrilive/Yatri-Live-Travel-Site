import { useState } from 'react'
import Hero from './components/custom/Hero'
import CoursesSection from './components/custom/hero-page-components/CoursesSection'
import PopularBlogs from './components/custom/hero-page-components/PopularBlogs'
import PopularVideos from './components/custom/hero-page-components/PopularVideos'
import RecentTrips from './components/custom/hero-page-components/RecentTrips'



function App() {

  return (
    <>
  <Hero/>
  <CoursesSection/>
  <RecentTrips/>
  <PopularBlogs/>
  <PopularVideos/>


    </>
  )
}

export default App
