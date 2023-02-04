import React, { useEffect }  from 'react';
import './App.css';
import Header from './componants/header/header';
import Home from './componants/home_page/home';
import Latest from './componants/latest_work/latest';
import gsap from 'gsap';
import { Expo } from 'gsap/src/gsap-core';
import ScrollTrigger from 'gsap/ScrollTrigger';
import TeamSection from './componants/team/team_section';
import ContactUs from './componants/contact_us/contact-us';
import Footer from './componants/footer/footer';
function App() {
 
  gsap.registerPlugin(ScrollTrigger);
  const timeline = gsap.timeline();


     const header = document.querySelector(".header");

    function stickyNav() {
        header?.classList.toggle("scrolledNav" , window.scrollY > 70);
    }

    useEffect(()=>{
        window.addEventListener("scroll", stickyNav); 
       timeline.fromTo(".overlay h1" , {},{
          opacity: 0, 
          duration: 1 ,
          y: -60, 
          delay: 1,
          ease: Expo.easeInOut,
        }).fromTo(".overlay " ,{}, {
          duration: 2 ,
          top: "-140%", 
          ease: Expo.easeInOut,
        }).fromTo(".ellipse-container " , {
          duration: 1 ,
          opacity: 0,   
          ease: Expo.easeInOut,
        }, {opacity:1 }).fromTo(".circle1", {
          duration: 0.4 ,
          opacity: 0,   
          ease: Expo.easeInOut,
        },{opacity:1 }).fromTo(".circle2", {
          duration: 0.4 ,
          opacity: 0,   
          ease: Expo.easeInOut,
        }, {opacity:1 }, ).fromTo(".yellow", {
          duration: 1 ,
          opacity: 0,   
          ease: Expo.easeInOut,
        },{opacity:1 }, ).fromTo(".logo", {
          delay: 2,
          duration: 1 ,
          y: -100,
          opacity: 0,   
          ease: Expo.easeInOut,
        }, {opacity:1, y: 0}, 3).fromTo(".item", {

          x: -100,
          opacity: 0,  
          ease: Expo.easeInOut,
         
        }, {opacity:1, x: 0 , stagger: 0.5,          delay: 2,
          duration: 1 ,}, 3).then(()=> timeline.kill());
        

    })
  return (
    <div className="App">
    <div className="overlay">
      <h1>squadra</h1>
    </div>
    <Header/>
    <Home/>
    <Latest/>
    <TeamSection/>
    <ContactUs/>
    <Footer/>
    </div>
  );
}

export default App;
