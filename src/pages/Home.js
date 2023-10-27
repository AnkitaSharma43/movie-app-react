import React from 'react'
import "./Home.css"
const Home = () => {
    return (
        <>
            <section className="home-banner">
                <div class="hero-content">

                    <p class="hero-subtitle">Filmlane</p>

                    <h1 class="h1 hero-title">
                        Unlimited <strong>Movie</strong>, TVs Shows, &amp; More.
                    </h1>

                    <div class="meta-wrapper">

                        <div class="badge-wrapper">
                            <div class="badge badge-fill">PG 18</div>

                            <div class="badge badge-outline">HD</div>
                        </div>

                        <div class="ganre-wrapper">
                            <a  className="primarytext" href="#">Romance,</a>

                            <a className="primarytext" href="#">Drama</a>
                        </div>

                        <div class="date-time">

                            <div>
                               <div className="primarysvg">
                             
                               </div>

                                <time datetime="2022">2022</time>
                            </div>

                            <div>
                            <div className="primarysvg">
                           
                               </div>

                                <time datetime="PT128M">128 min</time>
                            </div>

                        </div>

                    </div>

                    <button class="btn btn-primary pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" height="12" width="12" class="ionicon s-ion-icon" viewBox="0 0 512 512"><title>Play</title><path d="M133 440a35.37 35.37 0 01-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37 7.46-27.53 19.46-34.33a35.13 35.13 0 0135.77.45l247.85 148.36a36 36 0 010 61l-247.89 148.4A35.5 35.5 0 01133 440z" fill="#fff"></path></svg>
                        <span>Watch now</span>
                    </button>

                </div>
            </section>


        </>
    )
}

export default Home