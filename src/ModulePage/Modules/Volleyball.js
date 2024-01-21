import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Mahd from './volleyballmedia/mahd.png'
import './Volleyball.css'
import VPFP from './volleyballmedia/volleyball-pfp.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import VRPFP from './volleyballmedia/vertical-jump-pfp.png'
import TallPFP from './volleyballmedia/taller-pfp.jpg'

export default function Volleyball() {
    
    return (
        <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>
                <div className="about-section20">
                    <h1>Volleyball Module</h1>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{ flex: '1' }}>
                            <img src={Mahd} alt="" style={{
                                width: "36%", /* Adjust the width as needed */
                                height: "auto", /* Maintain aspect ratio */
                                margin: "0 auto", /* Center the container horizontally */
                                padding: "1.5rem"
                            }} />
                            <div style={{ color: '#FF7F7F', textAlign: 'center', fontSize: "30px" }}>Module Head<br />Mahd Khan</div>
                        </div>
                        <div style={{ flex: '1', fontSize: '25px', marginLeft: '40px', marginRight: '40px' }}>
                            Welcome to IBA CON's Volleyball Module, where the excitement of volleyball takes center stage with a variety of
                            engaging activities. Dive into the sand for beach volleyball matches that blend skill and teamwork, providing an
                            energetic and social atmosphere. Test your accuracy and finesse in fun serving challenges, perfect for players of
                            all levels.
                        </div>
                    </div>
                </div></SwiperSlide>

                <SwiperSlide><div className="about-section21">
                    <h1> First to 10 Points - Win Team Volleyball</h1>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{ flex: '1', fontSize: '25px', marginLeft: '40px', marginRight: '40px' }}>
                        Get ready for intense, fast-paced action as teams compete to be the first to reach 10 points. This condensed version of 
                        traditional volleyball emphasizes quick thinking, strategic plays, and precise execution. With shorter matches, the 
                        First to 10 Points format adds an extra layer of excitement, making every point crucial and the competition highly 
                        unpredictable.
                        </div>
                        <div style={{ flex: '1' }}>
                            <img src={VPFP} alt="" style={{
                                width: "25.5%", /* Adjust the width as needed */
                                height: "auto", /* Maintain aspect ratio */
                                margin: "0 auto", /* Center the container horizontally */
                                padding: "1.5rem"
                            }} />
                        </div>
                    </div>
                </div></SwiperSlide>

                <SwiperSlide><div className="about-section22">
                    <h1>Highest Vertical Reach Competition</h1>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{ flex: '1' }}>
                            <img src={VRPFP} alt="" style={{
                                width: "82.5%", /* Adjust the width as needed */
                                height: "auto", /* Maintain aspect ratio */
                                margin: "0 auto", /* Center the container horizontally */
                                padding: "1.5rem"
                            }} />
                        </div>
                        <div style={{ flex: '1', fontSize: '25px', marginLeft: '40px', marginRight: '40px' }}>
                        For those who want to showcase their vertical prowess, the Highest Vertical Reach competition is the perfect stage. 
                        Participants will have the opportunity to demonstrate their explosive jumps and impressive agility as they aim for the 
                        highest point above the net. This competition not only highlights individual athleticism but also adds an element of 
                        suspense as spectators eagerly anticipate who will reach the highest heights.
                        </div>
                    </div>
                </div></SwiperSlide>

                <SwiperSlide><div className="about-section23">
                    <h1>"Are You Taller Than Tuskishima?" Challenge</h1>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{ flex: '1' }}>
                            <img src={TallPFP} alt="" style={{
                                width: "30%", /* Adjust the width as needed */
                                height: "auto", /* Maintain aspect ratio */
                                margin: "0 auto", /* Center the container horizontally */
                                padding: "1.5rem"
                            }} />
                        </div>
                        <div style={{ flex: '1', fontSize: '25px', marginLeft: '40px', marginRight: '40px' }}>
                        For all haikyuu fanboys/fangirls, this light-hearted challenge invites participants to measure up 
                        against the fictional character Kei Tuskishima, known for his exceptional height on the volleyball court. Participants 
                        will have the chance to stand next to a life-sized cutout of Tuskishima and find out if they measure up to his towering 
                        stature. It adds a fun and interactive element to the module, sparking friendly banter and memorable moments.
                        </div>
                    </div>
                </div></SwiperSlide>
                </Swiper>
        </div>
    )
}
