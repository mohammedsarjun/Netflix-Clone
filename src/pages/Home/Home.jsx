import React from 'react'
import'./home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/Play_icon.png'
import info_icon from '../../assets/Info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'
const Home = () => {

  return (
    <div>
      <Navbar/>
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-img' />
        <div className="hero-caption">
          <img src={hero_title} alt=""className='caption-img' />
          <p>Discovering his ties to a secret ancient order, a young man living in mordern Istanbul embarks on a quest to save a city from an immortal enemy.</p>
          <div className="hero-btns">
            <button className="btn "><img src={play_icon} alt="" />Play</button>
              <button className="btn dark-btn"><img src={info_icon} alt="" />More Info</button>
          </div>
           <TitleCards title="Popupar on Netflix"/>
        </div>
         
      </div>
    <div className="more-cards">
      <TitleCards title="Blockbuster Movies" category="upcoming"/>
      <TitleCards title="Only on Netflix" category="popular"/>
      <TitleCards title="Upcoming" category="top_rated"/>
      <TitleCards title="Top picks for you"   category="now_playing"/>
    </div>
    
    <Footer/>
    </div>
  )
}

export default Home
