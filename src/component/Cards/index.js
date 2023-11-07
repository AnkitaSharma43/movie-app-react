import React, { useEffect, useState } from "react";
import "./card.css";
import memory from "../../assets/memory.png";
import massiveTalent from "../../assets/massive-talent.png";
import Northman from "../../assets/Northman.png";
import doctorStrange from "../../assets/doctor-strange.png";
import { useDispatch, useSelector } from "react-redux";
import { getHomedata } from "../../features/home-page/HomePageSlice";
import { useNavigate } from "react-router-dom";
const Cards = () => {
  const [itemsToShow, setItemsToShow] = useState(8);
  const { responseData } = useSelector((state) => state.homeData);
  const navigate = useNavigate()
  const dispatch = useDispatch();
  console.log("responseData", responseData);
  useEffect(() => {
    dispatch(getHomedata());
  }, []);

  const handleShowMore = () => {
    setItemsToShow(itemsToShow + 8);
  };

  const handlecarddetails = () => {
    navigate("/cardDetails")
  }
  return (
    <>
      <div className="main-wrapper">
        {responseData.map((movie, index) => {
          return (
            <>
              <div>
                <h1 className="text-white margin-bottom10">{movie.title}</h1>
              </div>
              <div className="movie-card flex-items" onClick={handlecarddetails}>
              {movie.movies.slice(0, itemsToShow).map((list, index) => {
                  return (
                    <>
                      {/* 1 */}
                      <div className="card">
                        <a href="#">
                          <img
                            src={list.poster_path}
                            height={400}
                            width={300}
                          />
                        </a>
                        <div class="title-wrapper">
                          <a href="#">
                            <h3 class="card-title">{list.title}</h3>
                          </a>

                          <time datetime="2022">2022</time>
                        </div>
                        <div class="card-meta">
                          <div class="badge badge-outline">HD</div>
                          <div className=" flex-items flex-end">
                            <div className="flex-items">
                              <div className="primarysvg">
                                <svg
                                  width="12"
                                  height="12"
                                  viewBox="0 0 22 22"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <mask
                                    id="path-1-inside-1_515_48"
                                    fill="white"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M11 0C4.92487 0 0 4.92487 0 11C0 17.0752 4.92487 22 11 22C17.0752 22 22 17.0752 22 11C22 4.92487 17.0752 0 11 0ZM1.69231 11C1.69231 5.8595 5.8595 1.69231 11 1.69231C16.1406 1.69231 20.3077 5.8595 20.3077 11C20.3077 16.1406 16.1406 20.3077 11 20.3077C5.8595 20.3077 1.69231 16.1406 1.69231 11Z"
                                    />
                                  </mask>
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M11 0C4.92487 0 0 4.92487 0 11C0 17.0752 4.92487 22 11 22C17.0752 22 22 17.0752 22 11C22 4.92487 17.0752 0 11 0ZM1.69231 11C1.69231 5.8595 5.8595 1.69231 11 1.69231C16.1406 1.69231 20.3077 5.8595 20.3077 11C20.3077 16.1406 16.1406 20.3077 11 20.3077C5.8595 20.3077 1.69231 16.1406 1.69231 11Z"
                                    fill="#E91E63"
                                  />
                                  <path
                                    d="M11 -2C3.8203 -2 -2 3.8203 -2 11H2C2 6.02944 6.02944 2 11 2V-2ZM-2 11C-2 18.1798 3.82031 24 11 24V20C6.02943 20 2 15.9706 2 11H-2ZM11 24C18.1798 24 24 18.1798 24 11H20C20 15.9706 15.9706 20 11 20V24ZM24 11C24 3.82031 18.1798 -2 11 -2V2C15.9706 2 20 6.02943 20 11H24ZM3.69231 11C3.69231 6.96407 6.96407 3.69231 11 3.69231V-0.307692C4.75493 -0.307692 -0.307692 4.75493 -0.307692 11H3.69231ZM11 3.69231C15.036 3.69231 18.3077 6.96406 18.3077 11H22.3077C22.3077 4.75493 17.2451 -0.307692 11 -0.307692V3.69231ZM18.3077 11C18.3077 15.036 15.036 18.3077 11 18.3077V22.3077C17.2451 22.3077 22.3077 17.2451 22.3077 11H18.3077ZM11 18.3077C6.96406 18.3077 3.69231 15.036 3.69231 11H-0.307692C-0.307692 17.2451 4.75493 22.3077 11 22.3077V18.3077Z"
                                    fill="#E91E63"
                                    mask="url(#path-1-inside-1_515_48)"
                                  />
                                  <mask
                                    id="path-3-inside-2_515_48"
                                    fill="white"
                                  >
                                    <path d="M10.6801 7C10.6801 6.53977 10.5523 6 10 6C9.44771 6 9 6.37311 9 6.83334V12.6667C9 12.8877 9.10531 13.0997 9.29295 13.2559L12.293 15.7559C12.6835 16.0814 13.3165 16.0814 13.7071 15.7559C14.0976 15.4305 14.0976 14.9029 13.7071 14.5774L12.293 13.2559L10.83 12.1562L10.6801 7Z" />
                                  </mask>
                                  <path
                                    d="M10.6801 7C10.6801 6.53977 10.5523 6 10 6C9.44771 6 9 6.37311 9 6.83334V12.6667C9 12.8877 9.10531 13.0997 9.29295 13.2559L12.293 15.7559C12.6835 16.0814 13.3165 16.0814 13.7071 15.7559C14.0976 15.4305 14.0976 14.9029 13.7071 14.5774L12.293 13.2559L10.83 12.1562L10.6801 7Z"
                                    fill="#E91E63"
                                  />
                                  <path
                                    d="M10.6801 7H8.68011V7.02906L8.68095 7.0581L10.6801 7ZM9.29295 13.2559L10.5733 11.7195L10.5729 11.7191L9.29295 13.2559ZM12.293 15.7559L13.5733 14.2195L13.5733 14.2195L12.293 15.7559ZM13.7071 14.5774L12.3416 16.0387L12.3831 16.0775L12.4267 16.1139L13.7071 14.5774ZM10.83 12.1562L8.8308 12.2143L8.85876 13.1766L9.62824 13.7549L10.83 12.1562ZM12.293 13.2559L13.6585 11.7947L13.5803 11.7216L13.4947 11.6572L12.293 13.2559ZM12.6801 7C12.6801 6.64721 12.6413 6.01396 12.3182 5.39817C12.1424 5.06313 11.8602 4.69248 11.423 4.41057C10.9755 4.12208 10.4789 4 10 4V8C9.79728 8 9.52378 7.94539 9.25559 7.77249C8.9976 7.60617 8.85096 7.39923 8.77615 7.25665C8.65502 7.02581 8.68011 6.89256 8.68011 7H12.6801ZM10 4C8.70005 4 7 4.94261 7 6.83334H11C11 7.28681 10.7743 7.613 10.5733 7.78052C10.3765 7.94448 10.1674 8 10 8V4ZM7 6.83334V12.6667H11V6.83334H7ZM7 12.6667C7 13.5479 7.42275 14.3012 8.01302 14.7928L10.5729 11.7191C10.7879 11.8982 11 12.2275 11 12.6667H7ZM8.0126 14.7924L11.0126 17.2924L13.5733 14.2195L10.5733 11.7195L8.0126 14.7924ZM11.0126 17.2924C12.1448 18.2359 13.8552 18.2359 14.9875 17.2924L12.4267 14.2195C12.6362 14.0449 12.8507 14 13 14C13.1494 14 13.3638 14.0449 13.5733 14.2195L11.0126 17.2924ZM14.9875 17.2924C15.6045 16.7782 16 16.0166 16 15.1667C16 14.3167 15.6045 13.5552 14.9875 13.041L12.4267 16.1139C12.2002 15.9251 12 15.5901 12 15.1667C12 14.7432 12.2002 14.4082 12.4267 14.2195L14.9875 17.2924ZM12.8291 12.0981L12.6793 6.9419L8.68095 7.0581L8.8308 12.2143L12.8291 12.0981ZM15.0726 13.1161L13.6585 11.7947L10.9274 14.7172L12.3416 16.0387L15.0726 13.1161ZM13.4947 11.6572L12.0317 10.5575L9.62824 13.7549L11.0913 14.8547L13.4947 11.6572Z"
                                    fill="#E91E63"
                                    mask="url(#path-3-inside-2_515_48)"
                                  />
                                </svg>
                              </div>

                              <p className="text-white" datetime="PT128M">
                                128 min{" "}
                              </p>
                            </div>

                            <div class="rating flex-items">
                              <div className="primarysvg">
                                <svg
                                  width="12"
                                  height="15"
                                  viewBox="0 0 20 21"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M10.9685 0.994798L13.2243 5.77422C13.3811 6.10663 13.6844 6.33696 14.0353 6.39018L19.0795 7.15665C19.9631 7.29101 20.3157 8.4261 19.6765 9.07741L16.0265 12.7976C15.7729 13.0563 15.6569 13.4293 15.717 13.7944L16.5785 19.0476C16.7295 19.9676 15.8058 20.6691 15.0157 20.2351L10.5042 17.755C10.1905 17.5827 9.8154 17.5827 9.50168 17.755L4.99018 20.2351C4.20002 20.6695 3.27637 19.9676 3.42739 19.0476L4.28889 13.7944C4.34896 13.4293 4.23298 13.0563 3.97933 12.7976L0.329335 9.07741C-0.3098 8.42567 0.0427257 7.29058 0.926334 7.15665L5.97058 6.39018C6.32144 6.33696 6.62473 6.10663 6.7816 5.77422L9.03734 0.994798C9.43201 0.157658 10.5734 0.157658 10.9685 0.994798Z"
                                    fill="#E91E63"
                                  />
                                </svg>
                              </div>
                              <p className="text-white" datetime="PT128M">
                                NR
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
              {itemsToShow < movie.movies.length && (
           <div className=" movie-cardbtn flex-center flex-items margin10">
           <button className="btn" onClick={handleShowMore}>Show More</button>
           </div>
              )}
            </>
          );
        })}
      </div>
    </>
  );
};

export default Cards;
