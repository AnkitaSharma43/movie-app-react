import React from 'react'
import servicesbg from "../../assets/servicebg.svg"
import "./services.css"
const Services = () => {
  return (
    <>
      <section className="service">
        <div className="main-wrapper">
          <div className="flex-items flex-col service-container">
          <div className="flex-items service-img relative">
          <a href='#'>   <img src={servicesbg} width="450px" height="450px" />
            <a className="service-btn text-dark">
              <button className="btn text-dark">
                Download
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11 3.01254C10.9983 2.46026 11.4446 2.01114 11.9969 2.00941C12.5492 2.00768 12.9983 2.45399 13 3.00627L11 3.01254Z" fill="#000000"></path> <path d="M14.3158 10.2951L13.0269 11.592L13 3.00627L11 3.01254L11.0269 11.5983L9.73003 10.3095C9.33828 9.92018 8.7051 9.92214 8.3158 10.3139C7.9265 10.7056 7.92849 11.3388 8.32024 11.7281L8.32275 11.7306L8.32374 11.7316L12.039 15.4236L15.7206 11.7187L15.7262 11.7131L15.727 11.7123L15.7278 11.7115L15.7337 11.7056L15.7344 11.7049L14.3158 10.2951Z" fill="#000000"></path> <path d="M15.7344 11.7049C16.1237 11.3131 16.1217 10.6799 15.73 10.2906C15.3382 9.90134 14.705 9.90335 14.3158 10.2951L15.7344 11.7049Z" fill="#000000"></path> <path d="M4 12C4 10.8954 4.89543 10 6 10C6.55228 10 7 9.55228 7 9C7 8.44771 6.55228 8 6 8C3.79086 8 2 9.79086 2 12V18C2 20.2091 3.79086 22 6 22H17C19.7614 22 22 19.7614 22 17V12C22 9.79086 20.2091 8 18 8C17.4477 8 17 8.44771 17 9C17 9.55228 17.4477 10 18 10C19.1046 10 20 10.8954 20 12V17C20 18.6569 18.6569 20 17 20H6C4.89543 20 4 19.1046 4 18V12Z" fill="#000000"></path> </g></svg>
              </button>
            </a> </a>
            </div>
            <div class="service-content">

              <p class="service-subtitle">Our Services</p>

              <h2 class="h2 service-title text-white">Download Your Shows Watch Offline.</h2>

              <p class="service-text">
                Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod tempor.There are many variations of
                passages of lorem
                Ipsum available, but the majority have suffered alteration in some injected humour.
              </p>

              <ul class="service-list">

                <li>
                  <div class="service-card flex-items">

                    <div class="card-icon">
                      <svg width="32" height="26" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 24C21.5523 24 22 24.4477 22 25C22 25.5523 21.5523 26 21 26H11C10.4477 26 10 25.5523 10 25C10 24.4477 10.4477 24 11 24H21ZM27 0C29.7614 0 32 2.23858 32 5V17C32 19.7614 29.7614 22 27 22H5C2.23858 22 0 19.7614 0 17V5C0 2.23858 2.23858 0 5 0H27ZM27 2H5C3.34315 2 2 3.34315 2 5V17C2 18.6569 3.34315 20 5 20H27C28.6569 20 30 18.6569 30 17V5C30 3.34315 28.6569 2 27 2Z" fill="white" />
                      </svg>
                    </div>

                    <div class="card-content">
                      <h3 class="h3 card-title">Enjoy on Your TV.</h3>

                      <p class="card-text">
                        Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do eiusmod tempor.
                      </p>
                    </div>

                  </div>
                </li>

                <li>
                  <div class="service-card flex-items">

                    <div class="card-icon">

                      <svg width="32" height="25" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 5L16.5768 3.45392C17.3699 2.97803 17.7665 2.74009 18.0928 2.77051C18.3773 2.79703 18.6369 2.944 18.806 3.17433C19 3.43848 19 3.90095 19 4.8259V9.1741C19 10.099 19 10.5615 18.806 10.8257C18.6369 11.056 18.3773 11.203 18.0928 11.2295C17.7665 11.2599 17.3699 11.022 16.5768 10.5461L14 9M4.2 13H10.8C11.9201 13 12.4802 13 12.908 12.782C13.2843 12.5903 13.5903 12.2843 13.782 11.908C14 11.4802 14 10.9201 14 9.8V4.2C14 3.0799 14 2.51984 13.782 2.09202C13.5903 1.71569 13.2843 1.40973 12.908 1.21799C12.4802 1 11.9201 1 10.8 1H4.2C3.0799 1 2.51984 1 2.09202 1.21799C1.71569 1.40973 1.40973 1.71569 1.21799 2.09202C1 2.51984 1 3.07989 1 4.2V9.8C1 10.9201 1 11.4802 1.21799 11.908C1.40973 12.2843 1.71569 12.5903 2.09202 12.782C2.51984 13 3.07989 13 4.2 13Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>


                    </div>

                    <div class="card-content">
                      <h3 class="h3 card-title">Watch Everywhere.</h3>

                      <p class="card-text">
                        Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do eiusmod tempor.
                      </p>
                    </div>

                  </div>
                </li>

              </ul>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services