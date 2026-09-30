// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import './css/style.css'
import Navbar from './components/Navbar'
// import PageLinks from './components/PageLinks'
// import SocialLinks from './components/SocialLinks'
import Footer from './components/footer'
import Hero from './components/Hero'
import About from './components/About'
import Title from './components/Title'
import Services from './components/Services'
import Tours from './components/Tours'

function App() {

  return (
/* <!-- navbar --> */
<>
    <Navbar />
{/* // <!-- hero --> */}
{/* <section className="hero" id="home">
    <div className="hero-banner">
        <h1>continue exploring</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat debitis explicabo velit quisquam accusamus assumenda.</p>
        <a href="#tours" className="btn hero-btn" role="button">explore tours</a>
    </div>
</section> */}
<Hero />

{/*  about */}
<About />
{/* <section className="section" id="about">
    <div className="section-title">
        <h2>about<span>us</span></h2>
    </div>
    <div className="section-center about-center">
        <div className="about-img">
            <img src="./images/Gemini_Generated_Image_xgbryixgbryixgbr.jpeg" alt="hill-photo" className="about-photo"/>
        </div>
        <article className="about-info">
            <h3>explore the difference</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, earum!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, earum!</p>
            <a href="#" className="btn" role="button">read more</a>
        </article>
    </div>
</section> */}

{/* // <!-- services --> */}
<Services />

{/* // <!-- tour section --> */}
<Tours />
{/* <section className="section tours" id="tours">
   <div className="section-title">
        <h2>featured<span>tours</span></h2>
    </div>  
    <div className="section-center tours-center">
        <article className="tour-card">
            <div className="tour-img-container">
                <img src="./images/Copilot_20260918_103647.png" alt="tour photo" className="tour-img"/>
                <p className="tour-date">september 26th, 2026</p>
            </div>
            <div className="tour-info">
                <div className="tour-title"><h4>mount everest</h4></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, earum!</p>
                <div className="tour-footer">
                    <p><span><i className="fa-solid fa-map"></i>china</span></p>
                    <p>6 days</p>
                    <p>from $2100</p>
                </div>
           </div>
        </article>
        <article className="tour-card">
            <div className="tour-img-container">
                <img src="./images/Copilot_20260918_103651.png" alt="tour photo" className="tour-img"/>
                <p className="tour-date">september 26th, 2026</p>
            </div>
           <div className="tour-info">
                <div className="tour-title"><h4>mount everest</h4></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, earum!</p>
                <div className="tour-footer">
                    <p><span><i className="fa-solid fa-map"></i>china</span></p>
                    <p>6 days</p>
                    <p>from $2100</p>
                </div>
           </div>
        </article>
        <article className="tour-card">
            <div className="tour-img-container">
                <img src="./images/Copilot_20260918_103654.png" alt="tour photo" className="tour-img"/>
                <p className="tour-date">september 26th, 2026</p>
            </div>
           <div className="tour-info">
                <div className="tour-title"><h4>mount everest</h4></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, earum!</p>
                <div className="tour-footer">
                    <p><span><i className="fa-solid fa-map"></i>china</span></p>
                    <p>6 days</p>
                    <p>from $2100</p>
                </div>
           </div>
        </article>
        <article className="tour-card">
            <div className="tour-img-container">
                <img src="./images/Copilot_20260918_103657.png" alt="tour photo" className="tour-img"/>
                <p className="tour-date">september 26th, 2026</p>
            </div>
            <div className="tour-info">
                <div className="tour-title"><h4>mount everest</h4></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, earum!</p>
                <div className="tour-footer">
                    <p><span><i className="fa-solid fa-map"></i>china</span></p>
                    <p>6 days</p>
                    <p>from $2100</p>
                </div>
           </div>
        </article>
    </div>
</section> */}

{/* <!-- footer --> */}
<Footer />
{/* <footer className="section footer">
    <PageLinks groupClass="footer-list" />
    <SocialLinks groupClass="footer-icons" listItemClass="footer-icon"/>
    <p className="copyright">copyright &copy; backroads travel tours company <span id="date"></span>. all rights reserved</p>
</footer> */}
</>
)
}

export default App
