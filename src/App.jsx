
import './App.css'
import Experiences from './components/Experience'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import InfoSection from './components/InfoSection'
import NavBar from './Components/NavBar'
import NewsSection from './components/News'

import PhotoSlider from './components/PhotoSlider'
import Strip from './components/Strip'
import Welcome from './components/Welcome'



function App() {
  

  return (
    <>
      <NavBar/>
      <HeroSection/>
      <Strip/>
      <Welcome/>
      <PhotoSlider/>
      <InfoSection/>
      <Experiences/>
      <NewsSection/>
      <Footer/>
     
      
      
    </>
  )
}

export default App
