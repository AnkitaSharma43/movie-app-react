import React from 'react'
import "./card.css";
import Cards from "./index"
import vinlandSagabg from "../../assets/Vinland-Sagabg.webp"
import vinlandSaga from "../../assets/Vinland-Saga.jpg"
const CardDetails = () => {
  return (
    <>
      <section className="card-detail">
        <img className="deatail-img" src={vinlandSagabg} width="100" height="100" />
        <div className="main-wrapper absolute-content">
          <div className=" flex-items flex-start gap40">

            <div className=" relative">
              <img  className= "movie-img" src={vinlandSaga} width="280" height="450" />
              <div className="absolute-content">
                <div className="video-circle">
                  <svg width="35" height="60" viewBox="0 0 55 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M47.0633 21.6462C52.3122 24.4156 52.3122 31.5844 47.0633 34.3538L15.3706 51.0748C10.2692 53.7664 4 50.2631 4 44.7211V11.279C4 5.73683 10.2692 2.23365 15.3705 4.92515L47.0633 21.6462Z" stroke="white" stroke-width="8" />
                  </svg>



                </div>

              </div>
            </div>
            <div className='movie-detail-content'>
              <div class="hero-content main-wrapper">
                <p class="hero-subtitle primary-color">
                  Filmlane</p><h1 class="h1 hero-title">
                  Unlimited <strong class="primary-color">Movie</strong>,  TVs Shows,  &amp;   More.</h1>
                <div class="meta-wrapper">
                  <div class="badge-wrapper">
                    <div class="badge badge-fill">PG 18</div>
                    <div class="badge badge-outline">HD</div>
                  </div>
                  <div class="ganre-wrapper">
                    <a class="primarytext" href="#">Romance,</a>
                    <a class="primarytext" href="#">Drama</a></div>
                  <div class="date-time"><div class="flex-items">
                    <div class="primarysvg">
                      <svg width="20" height="18" viewBox="0 0 85 91" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M75.0006 51.4H64.6006V61.8H75.0006V51.4ZM72.2006 59H67.4006V54.2H72.2006V59Z" fill="#E91E63"></path><path d="M61.1998 37.6H50.7998V48H61.1998V37.6ZM58.3998 45.2H53.5998V40.4H58.3998V45.2Z" fill="#E91E63"></path><path d="M19.8 51.4H9.5V61.8H19.9V51.4H19.8ZM17 59H12.2V54.2H17V59Z" fill="#E91E63"></path><path d="M19.8 65.2H9.5V75.6H19.9V65.2H19.8ZM17 72.8H12.2V68H17V72.8Z" fill="#E91E63"></path><path d="M75.0006 37.6H64.6006V48H75.0006V37.6ZM72.2006 45.2H67.4006V40.4H72.2006V45.2Z" fill="#E91E63"></path><path d="M61.1998 65.2H50.7998V75.6H61.1998V65.2ZM58.3998 72.8H53.5998V68H58.3998V72.8Z" fill="#E91E63"></path><path d="M47.4 51.4H37V61.8H47.4V51.4ZM44.6 59H39.8V54.2H44.6V59Z" fill="#E91E63"></path><path d="M33.6002 65.2H23.2002V75.6H33.6002V65.2ZM30.8002 72.8H26.0002V68H30.8002V72.8Z" fill="#E91E63"></path><path d="M47.4 37.6H37V48H47.4V37.6ZM44.6 45.2H39.8V40.4H44.6V45.2Z" fill="#E91E63"></path><path d="M33.6002 37.6H23.2002V48H33.6002V37.6ZM30.8002 45.2H26.0002V40.4H30.8002V45.2Z" fill="#E91E63"></path><path d="M61.1998 51.4H50.7998V61.8H61.1998V51.4ZM58.3998 59H53.5998V54.2H58.3998V59Z" fill="#E91E63"></path><path d="M33.6002 51.4H23.2002V61.8H33.6002V51.4ZM30.8002 59H26.0002V54.2H30.8002V59Z" fill="#E91E63"></path><path d="M47.4 65.2H37V75.6H47.4V65.2ZM44.6 72.8H39.8V68H44.6V72.8Z" fill="#E91E63"></path><path d="M79.6 4.4H65.2C64.6 1.9 62.4 0 59.7 0C57 0 54.8 1.9 54.1 4.4H30.3C29.7 1.9 27.4 0 24.7 0C22 0 19.8 1.9 19.1 4.4H4.8C2.2 4.4 0 6.5 0 9.2V85.3C0 87.9 2.1 90.1 4.8 90.1H79.5C82.1 90.1 84.3 88 84.3 85.3V9.1C84.3 6.5 82.2 4.4 79.6 4.4ZM56.8 5.7C56.8 4.1 58.1 2.8 59.7 2.8C61.3 2.8 62.6 4.1 62.6 5.7V9.6C62.6 11.2 61.3 12.5 59.7 12.5C58.1 12.5 56.8 11.2 56.8 9.6V5.7ZM21.8 5.7C21.8 4.1 23.1 2.8 24.7 2.8C26.3 2.8 27.6 4.1 27.6 5.7V9.6C27.6 11.2 26.3 12.5 24.7 12.5C23.1 12.5 21.8 11.2 21.8 9.6V5.7ZM2.9 9.1C2.9 8 3.8 7.2 4.8 7.2H18.9V9.6C18.9 12.8 21.5 15.4 24.7 15.4C25 15.4 25.2 15.4 25.5 15.4C28.4 15 30.6 12.4 30.6 9.4V7.2H53.9V9.6C53.9 12.8 56.5 15.4 59.7 15.4C60 15.4 60.2 15.4 60.5 15.4C63.4 15 65.6 12.4 65.6 9.4V7.2H79.7C80.8 7.2 81.6 8.1 81.6 9.1V26H2.9V9.1ZM81.5 85.2C81.5 86.3 80.6 87.1 79.6 87.1H4.8C3.7 87.1 2.9 86.2 2.9 85.2V29H81.5V85.2Z" fill="#E91E63"></path></svg>
                    </div>
                    <time class="text-white" datetime="2022">2022</time>
                  </div>
                    <div class="flex-items">
                      <div class="primarysvg">
                        <svg width="18" height="18" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <mask id="path-1-inside-1_515_48" fill="white"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 0C4.92487 0 0 4.92487 0 11C0 17.0752 4.92487 22 11 22C17.0752 22 22 17.0752 22 11C22 4.92487 17.0752 0 11 0ZM1.69231 11C1.69231 5.8595 5.8595 1.69231 11 1.69231C16.1406 1.69231 20.3077 5.8595 20.3077 11C20.3077 16.1406 16.1406 20.3077 11 20.3077C5.8595 20.3077 1.69231 16.1406 1.69231 11Z"></path></mask><path fill-rule="evenodd" clip-rule="evenodd" d="M11 0C4.92487 0 0 4.92487 0 11C0 17.0752 4.92487 22 11 22C17.0752 22 22 17.0752 22 11C22 4.92487 17.0752 0 11 0ZM1.69231 11C1.69231 5.8595 5.8595 1.69231 11 1.69231C16.1406 1.69231 20.3077 5.8595 20.3077 11C20.3077 16.1406 16.1406 20.3077 11 20.3077C5.8595 20.3077 1.69231 16.1406 1.69231 11Z" fill="#E91E63"></path><path d="M11 -2C3.8203 -2 -2 3.8203 -2 11H2C2 6.02944 6.02944 2 11 2V-2ZM-2 11C-2 18.1798 3.82031 24 11 24V20C6.02943 20 2 15.9706 2 11H-2ZM11 24C18.1798 24 24 18.1798 24 11H20C20 15.9706 15.9706 20 11 20V24ZM24 11C24 3.82031 18.1798 -2 11 -2V2C15.9706 2 20 6.02943 20 11H24ZM3.69231 11C3.69231 6.96407 6.96407 3.69231 11 3.69231V-0.307692C4.75493 -0.307692 -0.307692 4.75493 -0.307692 11H3.69231ZM11 3.69231C15.036 3.69231 18.3077 6.96406 18.3077 11H22.3077C22.3077 4.75493 17.2451 -0.307692 11 -0.307692V3.69231ZM18.3077 11C18.3077 15.036 15.036 18.3077 11 18.3077V22.3077C17.2451 22.3077 22.3077 17.2451 22.3077 11H18.3077ZM11 18.3077C6.96406 18.3077 3.69231 15.036 3.69231 11H-0.307692C-0.307692 17.2451 4.75493 22.3077 11 22.3077V18.3077Z" fill="#E91E63" mask="url(#path-1-inside-1_515_48)"></path><mask id="path-3-inside-2_515_48" fill="white"><path d="M10.6801 7C10.6801 6.53977 10.5523 6 10 6C9.44771 6 9 6.37311 9 6.83334V12.6667C9 12.8877 9.10531 13.0997 9.29295 13.2559L12.293 15.7559C12.6835 16.0814 13.3165 16.0814 13.7071 15.7559C14.0976 15.4305 14.0976 14.9029 13.7071 14.5774L12.293 13.2559L10.83 12.1562L10.6801 7Z"></path></mask>
                          <path d="M10.6801 7C10.6801 6.53977 10.5523 6 10 6C9.44771 6 9 6.37311 9 6.83334V12.6667C9 12.8877 9.10531 13.0997 9.29295 13.2559L12.293 15.7559C12.6835 16.0814 13.3165 16.0814 13.7071 15.7559C14.0976 15.4305 14.0976 14.9029 13.7071 14.5774L12.293 13.2559L10.83 12.1562L10.6801 7Z" fill="#E91E63"></path><path d="M10.6801 7H8.68011V7.02906L8.68095 7.0581L10.6801 7ZM9.29295 13.2559L10.5733 11.7195L10.5729 11.7191L9.29295 13.2559ZM12.293 15.7559L13.5733 14.2195L13.5733 14.2195L12.293 15.7559ZM13.7071 14.5774L12.3416 16.0387L12.3831 16.0775L12.4267 16.1139L13.7071 14.5774ZM10.83 12.1562L8.8308 12.2143L8.85876 13.1766L9.62824 13.7549L10.83 12.1562ZM12.293 13.2559L13.6585 11.7947L13.5803 11.7216L13.4947 11.6572L12.293 13.2559ZM12.6801 7C12.6801 6.64721 12.6413 6.01396 12.3182 5.39817C12.1424 5.06313 11.8602 4.69248 11.423 4.41057C10.9755 4.12208 10.4789 4 10 4V8C9.79728 8 9.52378 7.94539 9.25559 7.77249C8.9976 7.60617 8.85096 7.39923 8.77615 7.25665C8.65502 7.02581 8.68011 6.89256 8.68011 7H12.6801ZM10 4C8.70005 4 7 4.94261 7 6.83334H11C11 7.28681 10.7743 7.613 10.5733 7.78052C10.3765 7.94448 10.1674 8 10 8V4ZM7 6.83334V12.6667H11V6.83334H7ZM7 12.6667C7 13.5479 7.42275 14.3012 8.01302 14.7928L10.5729 11.7191C10.7879 11.8982 11 12.2275 11 12.6667H7ZM8.0126 14.7924L11.0126 17.2924L13.5733 14.2195L10.5733 11.7195L8.0126 14.7924ZM11.0126 17.2924C12.1448 18.2359 13.8552 18.2359 14.9875 17.2924L12.4267 14.2195C12.6362 14.0449 12.8507 14 13 14C13.1494 14 13.3638 14.0449 13.5733 14.2195L11.0126 17.2924ZM14.9875 17.2924C15.6045 16.7782 16 16.0166 16 15.1667C16 14.3167 15.6045 13.5552 14.9875 13.041L12.4267 16.1139C12.2002 15.9251 12 15.5901 12 15.1667C12 14.7432 12.2002 14.4082 12.4267 14.2195L14.9875 17.2924ZM12.8291 12.0981L12.6793 6.9419L8.68095 7.0581L8.8308 12.2143L12.8291 12.0981ZM15.0726 13.1161L13.6585 11.7947L10.9274 14.7172L12.3416 16.0387L15.0726 13.1161ZM13.4947 11.6572L12.0317 10.5575L9.62824 13.7549L11.0913 14.8547L13.4947 11.6572Z" fill="#E91E63" mask="url(#path-3-inside-2_515_48)"></path>
                        </svg>
                      </div>
                      <time class="text-white" datetime="PT128M">128 min</time>
                    </div>
                  </div>
                  <p class="storyline">
                    A bank teller called Guy realizes he is a background character in an open world video game called Free
                    City that will
                    soon go offline.
                  </p>
                </div>


                <div class="details-actions">

                  <button class="share primarytext">
                    <svg width="20px" height="20px" viewBox="-1 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#fff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><g id="Page-1" stroke-width="0.962" fill="none" fill-rule="evenodd" type="MSPage"> <g id="Icon-Set-Filled" transform="translate(-314.000000, -728.000000)" fill="#fff"> <path d="M333,744 C331.23,744 329.685,744.925 328.796,746.312 L323.441,743.252 C323.787,742.572 324,741.814 324,741 C324,740.497 323.903,740.021 323.765,739.563 L329.336,736.38 C330.249,737.37 331.547,738 333,738 C335.762,738 338,735.762 338,733 C338,730.238 335.762,728 333,728 C330.238,728 328,730.238 328,733 C328,733.503 328.097,733.979 328.235,734.438 L322.664,737.62 C321.751,736.631 320.453,736 319,736 C316.238,736 314,738.238 314,741 C314,743.762 316.238,746 319,746 C320.14,746 321.179,745.604 322.02,744.962 L328.055,748.46 C328.035,748.64 328,748.814 328,749 C328,751.762 330.238,754 333,754 C335.762,754 338,751.762 338,749 C338,746.238 335.762,744 333,744" id="share"> </path> </g> </g> </g></svg>

                    <span className="primarytext">Share</span>
                  </button>

                  <div class="title-wrapper">
                    <p class="title">Prime Video</p>

                    <p class="text">Streaming Channels</p>
                  </div>

                  <button class="btn btn-primary pointer "><svg xmlns="http://www.w3.org/2000/svg" height="12" width="12" class="ionicon s-ion-icon" viewBox="0 0 512 512"><title>Play</title><path d="M133 440a35.37 35.37 0 01-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37 7.46-27.53 19.46-34.33a35.13 35.13 0 0135.77.45l247.85 148.36a36 36 0 010 61l-247.89 148.4A35.5 35.5 0 01133 440z" fill="#fff"></path>
                  </svg>
                    <span>Watch now</span>
                  </button>

                </div>

              </div>
            </div>





            <div className="">
              <a class="service-btn text-dark">
                <button class="btn text-dark">Download
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11 3.01254C10.9983 2.46026 11.4446 2.01114 11.9969 2.00941C12.5492 2.00768 12.9983 2.45399 13 3.00627L11 3.01254Z" fill="#000000"></path> <path d="M14.3158 10.2951L13.0269 11.592L13 3.00627L11 3.01254L11.0269 11.5983L9.73003 10.3095C9.33828 9.92018 8.7051 9.92214 8.3158 10.3139C7.9265 10.7056 7.92849 11.3388 8.32024 11.7281L8.32275 11.7306L8.32374 11.7316L12.039 15.4236L15.7206 11.7187L15.7262 11.7131L15.727 11.7123L15.7278 11.7115L15.7337 11.7056L15.7344 11.7049L14.3158 10.2951Z" fill="#000000"></path> <path d="M15.7344 11.7049C16.1237 11.3131 16.1217 10.6799 15.73 10.2906C15.3382 9.90134 14.705 9.90335 14.3158 10.2951L15.7344 11.7049Z" fill="#000000"></path> <path d="M4 12C4 10.8954 4.89543 10 6 10C6.55228 10 7 9.55228 7 9C7 8.44771 6.55228 8 6 8C3.79086 8 2 9.79086 2 12V18C2 20.2091 3.79086 22 6 22H17C19.7614 22 22 19.7614 22 17V12C22 9.79086 20.2091 8 18 8C17.4477 8 17 8.44771 17 9C17 9.55228 17.4477 10 18 10C19.1046 10 20 10.8954 20 12V17C20 18.6569 18.6569 20 17 20H6C4.89543 20 4 19.1046 4 18V12Z" fill="#000000"></path> </g>
                  </svg>
                </button>
              </a>
            </div>
          </div>


        </div>


      </section>
      <div className=" upcoming">
        <Cards />
      </div>

    </>
  )
}

export default CardDetails
