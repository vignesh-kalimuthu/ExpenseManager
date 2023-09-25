import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Carddisplays from "./Carddisplays";
import Modal from "./Modal";
import Lasttransaction from "./Lasttransaction";
import Report from "./Report";
import '../components/styles/style.css'
import './styles/style.css'


const Main = ({ toggleSidebar }) => {
  
  return (
    <div className={`parent-main parent-main-move ${toggleSidebar ? 'main-with-sidebar' : 'main-with-sidebar'}`}>
      <div className="row mt-3" >
        <div className="col m-2 ">
       
          <div className="d-flex bg-none flex-row  m-1 justify-content-evenly align-items-center">
            <div className="rounded-3 text-color shadow-lg font-weight-bold flex-fill m-2 p-5 color1">
              <p data-bs-toggle="modal" data-bs-target="#Income" className="text-color11 fs-5">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-plus-square-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z" />
                  </svg>
                </span>{" "}
                Total Income
              </p>
              <h3>
                <Modal id="Income" />
              </h3>
            </div>

            <div className="rounded-3 text-color shadow-lg font-weight-bold flex-fill m-2 p-5 color2">
              <p data-bs-toggle="modal" data-bs-target="#Saves" className="text-color11 fs-5">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-plus-square-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z" />
                  </svg>
                </span>{" "}
                Total Saves
              </p>
              <h3>
                <Modal id="Saves" />
              </h3>
            </div>
          </div>
          <div className="d-flex bg-none  flex-row font-weight-bold bd-highlight m-1 justify-content-evenly align-items-center">

          <div className="rounded-3 color3 shadow-lg text-color flex-fill m-2 p-5 ">
              <p data-bs-toggle="modal" data-bs-target="#Expense" className="text-color11 fs-5">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-plus-square-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z" />
                  </svg>
                </span>{" "}
                Total Expense
              </p>
              <h3>
                <Modal id="Expense" />
              </h3>
            </div>

            <div className="rounded-3 text-color shadow-lg font-weight-bold flex-fill m-2 p-5 color4">
              <p data-bs-toggle="modal" data-bs-target="#Upcomings" className="text-color11 fs-5">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-plus-square-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z" />
                  </svg>
                </span>{" "}
                Upcomings
              </p>
              <h3>
                <Modal id="Upcomings" />
              </h3>
            </div>
            </div>
        </div>

        <div className="m-4 w-25  col rounded-4 d-flex p-0 color-s ">
          <Swiper
            spaceBetween={5}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)} className="rounded-4 color-s "
          >
            <SwiperSlide className="d-flex align-items-center justify-content-center bg-">
              <Carddisplays />
            </SwiperSlide>
            <SwiperSlide className="d-flex align-items-center justify-content-center color-s">
              <Carddisplays />
            </SwiperSlide>
            <SwiperSlide className="d-flex align-items-center justify-content-center  color-s">
              <Carddisplays />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="row " >
        <div className="col rounded-3 d-flex  bg-white flex-row  m-4 justify-content-evenly align-items-center">
          
            <Lasttransaction />
        
        </div>

        <div className="col rounded-3 d-flex bg-white flex-row bd-highlight m-4 justify-content-evenly align-items-center">
        
           <Report/>
          
        </div>
      </div>
    </div>
  );
};

export default Main;
