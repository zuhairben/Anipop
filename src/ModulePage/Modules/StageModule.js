import React from 'react'
import '../Modules/StageModule.css'
import Zuhair from './stagemedia/Zuhair.png'
import Myrol from './stagemedia/Myrol.png'
import FFAnime from './stagemedia/family-feud-pfp.jpg'
import TierList from './stagemedia/tierlist-pfp.jpg'
import AnimeOp from './stagemedia/opening-pfp.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import GamingFinale from './stagemedia/gaming-pfp.avif'
import PerformancePFP from './stagemedia/performance-pfp.avif'
import GGV from './stagemedia/geeks-vocals-pfp.jpg'
import cosplayWalk from './stagemedia/cosplay-walk-pfp.jpg'


export default function StageModule() {
    
  return (
    <div className='container'>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      <SwiperSlide><div className="about-section5" >
            <h1>Stage Module</h1>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div style={{ flex: '1', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <div style={{ marginRight: "10px" }}>
                  <img src={Myrol} alt="" style={{
                    width: "48%", /* Adjust the width as needed */
                    height: "100%", /* Maintain aspect ratio */
                    margin: "0 auto", /* Center the container horizontally */
                    padding: "1.5rem",
                  }} />
                  <div style={{ color: 'pink', textAlign: 'center' }}>Module Head<br />Miraal Aftab</div>
                </div>
                <div>
                  <img src={Zuhair} alt="" style={{
                    width: "65%", /* Adjust the width as needed */
                    height: "auto", /* Maintain aspect ratio */
                    margin: "0 auto", /* Center the container horizontally */
                    padding: "1.5rem"
                  }} />
                  <div style={{ color: 'pink', textAlign: 'center' }}>Module Head<br />Zuhair Shah</div>
                </div>
              </div>
              <div style={{ flex: '1', fontSize: '25px', marginLeft: '40px', marginRight: '40px' }}>
                Get ready for a non-stop thrill ride at our event's stage module! Our carefully curated lineup promises to keep
                you entertained and engaged throughout the day.
                <br /><span style={{ fontSize: '2rem', lineHeight: 1.5 }}>Here's a glimpse of what's in store:</span>
              </div>
            </div>
          </div></SwiperSlide>

          <SwiperSlide><div className="about-section6">
            <h1>Family Feud</h1>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div style={{ flex: '1', fontSize: '25px', marginLeft: '40px', marginRight: '40px' }}>
                Watch families battle it out in a hilarious and friendly competition that will have you on the edge of your seat.
                Laughter and surprises guaranteed!
              </div>
              <div style={{ flex: '1' }}>
                <img src={FFAnime} alt="" style={{
                  width: "55%", /* Adjust the width as needed */
                  height: "auto", /* Maintain aspect ratio */
                  margin: "0 auto", /* Center the container horizontally */
                  padding: "1.5rem"
                }} />
              </div>
            </div>
          </div></SwiperSlide>

          <SwiperSlide><div className="about-section7">
            <h1>Hot Takes/Tier List</h1>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div style={{ flex: '1' }}>
                <img src={TierList} alt="" style={{
                  width: "73%", /* Adjust the width as needed */
                  height: "auto", /* Maintain aspect ratio */
                  margin: "0 auto", /* Center the container horizontally */
                  padding: "1.5rem"
                }} />
              </div>
              <div style={{ flex: '1', fontSize: '25px', marginLeft: '40px', marginRight: '40px' }}>
                Engage in spirited discussions as participants share their hot takes and create tier lists on popular characters/topics.
                Get ready for some passionate opinions and lively debates!
              </div>
            </div>
          </div></SwiperSlide>

          <SwiperSlide><div className="about-section8">
            <h1>Guess the Anime Opening</h1>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div style={{ flex: '1', fontSize: '25px', marginLeft: '40px', marginRight: '40px' }}>
              Test your pop culture knowledge as you try to guess the opening sequences of iconic movies, TV shows, and games. 
              Quick thinking and a sharp eye will be your best assets!
              </div>
              <div style={{ flex: '1' }}>
                <img src={AnimeOp} alt="" style={{
                  width: "73%", /* Adjust the width as needed */
                  height: "auto", /* Maintain aspect ratio */
                  margin: "0 auto", /* Center the container horizontally */
                  padding: "1.5rem"
                }} />
              </div>
            </div>
          </div></SwiperSlide>

          <SwiperSlide><div className="about-section9">
          <h1>Gaming Tournament Finale</h1>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ flex: '1' }}>
              <img src={GamingFinale} alt="" style={{
                width: "61%", /* Adjust the width as needed */
                height: "auto", /* Maintain aspect ratio */
                margin: "0 auto", /* Center the container horizontally */
                padding: "1.5rem"
              }} />
            </div>
            <div style={{ flex: '1', fontSize: '25px', marginLeft: '40px', marginRight: '40px' }}>
            Get ready for the ultimate gaming showdown as our stage module hosts the intense finale of the Tekken 7 and Super Smash Bros tournaments
            ! Top-tier players will battle it out in thrilling one-on-one matches, showcasing jaw-dropping moves and strategic gameplay. Don't miss 
            the excitement as iconic characters collide on the big screen, delivering an adrenaline-pumping spectacle that defines the pinnacle of 
            our gaming tournament. Who will emerge victorious in this epic duel of skills? Find out as the stage lights up with gaming glory!
            </div>
          </div>
        </div></SwiperSlide>

        <SwiperSlide><div className="about-section10">
            <h1>Performance</h1>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div style={{ flex: '1', fontSize: '25px', marginLeft: '40px', marginRight: '40px' }}>
              Enjoy a variety of captivating performances showcasing talent in music, dance, and other exciting acts. From jaw-dropping displays 
              to soulful melodies, our stage is set to be a feast for the senses.
              </div>
              <div style={{ flex: '1' }}>
                <img src={PerformancePFP} alt="" style={{
                  width: "72.5%", /* Adjust the width as needed */
                  height: "auto", /* Maintain aspect ratio */
                  margin: "0 auto", /* Center the container horizontally */
                  padding: "1.5rem"
                }} />
              </div>
            </div>
          </div></SwiperSlide>

          <SwiperSlide><div className="about-section11">
          <h1>Geeks Got Talent</h1>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ flex: '1' }}>
              <img src={GGV} alt="" style={{
                width: "20.5%", /* Adjust the width as needed */
                height: "auto", /* Maintain aspect ratio */
                margin: "0 auto", /* Center the container horizontally */
                padding: "1.5rem"
              }} />
            </div>
            <div style={{ flex: '1', fontSize: '25px', marginLeft: '40px', marginRight: '40px' }}>
            Geeks Got Talent brings together the most extraordinary talents of the day. From mind-blowing magic tricks to awe-inspiring 
            performances, be prepared to be amazed!
            <br/>Don't miss out on the chance to be part of the action. For those with hidden talents, our Geeks Got Talent competition awaits 
            you! If you think you have what it takes, sign up now by going to the competition signups.
            </div>
          </div>
        </div></SwiperSlide>

        <SwiperSlide><div className="about-section12">
            <h1>Cosplay Walk</h1>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div style={{ flex: '1', fontSize: '25px', marginLeft: '40px', marginRight: '40px' }}>
              The grand finale awaits! Witness a parade of creativity as cosplayers strut their stuff on the stage.
               Marvel at the intricate costumes and impeccable character portrayals that bring fantasy to life.
               <br /><span style={{ fontSize: '4rem', lineHeight: 1.5 }}>MAZA AYEGA GUYZ!!!!</span>
              </div>
              <div style={{ flex: '1' }}>
                <img src={cosplayWalk} alt="" style={{
                  width: "33%", /* Adjust the width as needed */
                  height: "auto", /* Maintain aspect ratio */
                  margin: "0 auto", /* Center the container horizontally */
                  padding: "1.5rem"
                }} />
              </div>
            </div>
          </div></SwiperSlide>

      
        </Swiper>
    </div>
  )
}
