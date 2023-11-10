import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const langOption = [
  {
    name: "EN",
  },
  {
    name: "AU",
  },
  {
    name: "TN",
  },
  {
    name: "CN",
  },
];
const Navbar = () => {
  const [isSticky, setSticky] = useState(false);
  const [lang, setLang] = useState("EN");
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { pathname } = useLocation();
  const newPathName = pathname.split("/");

  const navbarClass = `navbar-container ${isSticky ? "sticky" : ""}`;
  const handleSelectLang = (name) => {
    setLang(name);
  };
  return (
    <>
      <header
        className={
          newPathName[1] === "" ? navbarClass : "navbar-container navbar-bg"
        }
      >
        <div className="main-wrapper">
          <nav>
            <div className="logo">
              <svg
                width="58"
                height="50"
                viewBox="0 0 58 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.3842 1.52651C7.57062 4.80335 0 15.4248 0 24.6904C0 34.1819 7.9096 44.6904 17.2881 47.8542C23.8418 50.0011 29.6045 49.5491 36.7231 46.0463C41.8079 43.5604 46.4407 43.4474 54.5763 45.4813C56.4972 46.0463 57.6271 45.8203 57.6271 45.0294C57.6271 43.2214 51.5254 40.3966 47.6836 40.3966H44.4068L46.5536 35.8768C51.5254 25.9333 49.8305 14.8599 42.0339 7.28923C34.9153 0.283574 25.5367 -1.75033 16.3842 1.52651ZM28.7006 7.17623C32.2034 10.5661 29.7175 16.6678 24.8587 16.6678C22.1469 16.6678 19.2091 13.7299 19.2091 11.018C19.2091 8.30616 22.1469 5.36832 24.8587 5.36832C25.9887 5.36832 27.7966 6.15928 28.7006 7.17623ZM16.2712 16.2158C19.774 19.6057 17.2881 25.7073 12.4294 25.7073C9.71754 25.7073 6.77966 22.7695 6.77966 20.0576C6.77966 17.3457 9.71754 14.4079 12.4294 14.4079C13.5593 14.4079 15.3672 15.1989 16.2712 16.2158ZM41.1299 16.2158C44.6328 19.6057 42.1469 25.7073 37.2881 25.7073C34.5763 25.7073 31.6384 22.7695 31.6384 20.0576C31.6384 15.1989 37.7401 12.7129 41.1299 16.2158ZM26.6667 23.5604C27.7966 25.4813 25.1977 27.6282 23.6158 26.0463C22.2599 24.6904 23.1638 22.3175 24.8587 22.3175C25.4237 22.3175 26.2147 22.8824 26.6667 23.5604ZM20.7909 30.9051C24.2938 34.2949 21.8079 40.3966 16.9492 40.3966C12.0904 40.3966 9.60449 34.2949 13.1074 30.9051C14.0113 29.8881 15.8192 29.0972 16.9492 29.0972C18.0791 29.0972 19.887 29.8881 20.7909 30.9051ZM36.6102 30.9051C40.113 34.2949 37.6271 40.3966 32.7684 40.3966C30.0565 40.3966 27.1186 37.4587 27.1186 34.7468C27.1186 29.8881 33.2203 27.4023 36.6102 30.9051Z"
                  fill="#E91E63"
                />
              </svg>

              <span>Funcity</span>
            </div>

            <div className="flex-items w-60">
              <div className="nav">
                <ul>
                  <li className="uppercase font-weight500">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="uppercase font-weight500">
                    <Link to="/Movie">Movie</Link>
                  </li>
                  <li className="uppercase font-weight500">
                    <Link to="/TvShow">TV show</Link>
                  </li>
                  <li className="uppercase font-weight500">
                    <Link to="/webseries">Web Series</Link>
                  </li>
                </ul>
              </div>
              <div className="flex-items">
                <div className="search-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-search"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </div>
                <div className="flex-items">
                  <div className="">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 6H19"
                        stroke="#E91E63"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
                        stroke="#E91E63"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M1 11H21"
                        stroke="#E91E63"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M3 16H19"
                        stroke="#E91E63"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M11 1C13.5013 3.73835 14.9228 7.29203 15 11C14.9228 14.708 13.5013 18.2616 11 21C8.49872 18.2616 7.07725 14.708 7 11C7.07725 7.29203 8.49872 3.73835 11 1Z"
                        stroke="#E91E63"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <button class="custom-select flex-items">
                    <p className="text-white">{lang}</p>
                    <div className="option">
                      {langOption.map((list, index) => {
                        return (
                          <p
                            onClick={() => handleSelectLang(list.name)}
                            className="text-white"
                          >
                            {list.name}
                          </p>
                        );
                      })}
                    </div>

                    <svg
                      width="11"
                      height="7"
                      viewBox="0 0 11 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1 1L5.5 6L10 1" fill="white" />
                      <path
                        d="M1 1L5.5 6L10 1"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <line x1="1" y1="0.5" x2="10" y2="0.5" stroke="white" />
                    </svg>
                  </button>
                </div>
                <button className="btn uppercase btn-primary nav-btn">
                  Sign IN
                </button>
              </div>
            </div>
            {/* toggle button */}                                  
            <div className="toggle">

              <svg width="30px" height="30px" viewBox="-30.72 -30.72 1085.44 1085.44" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#fff" stroke="#fff" stroke-width="68.608"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M64 192h896v76.8H64V192z m0 281.6h896v76.8H64V473.6z m0 281.6h896V832H64v-76.8z" fill="#fff"></path></g></svg>
            </div>
          </nav>

        </div>
      </header>

    </>
  );
};

export default Navbar;
