import React from "react";
import Headcomponent from "./Headcomponent";
import Sidebars from "./Sidebars";
import { WalletCard } from "./WalletCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Wallet = () => {
  return (
    <div className="bg-color">
      <div className="row">
        <Headcomponent />
        <div className="col-2  ">
          <Sidebars />
        </div>
        <div className="col-10 mt-4 parent-main ">
          <div className=" row ">
            <div className="col w-75">
              <Swiper
                spaceBetween={5}
                slidesPerView={2}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                className="rounded-1 color-s  "
              >
                <SwiperSlide className="d-flex align-items-center justify-content-center bg-">
                  <WalletCard />
                </SwiperSlide>
                <SwiperSlide className="d-flex align-items-center justify-content-center color-s">
                  <WalletCard />
                </SwiperSlide>
                <SwiperSlide className="d-flex align-items-center justify-content-center  color-s">
                  <WalletCard />
                </SwiperSlide>
                <SwiperSlide className="d-flex align-items-center justify-content-center  color-s">
                  <WalletCard />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="col">
              <div
                data-bs-toggle="modal"
                data-bs-target="#WalletModal"
                class=" d-flex  align-items-center justify-content-center  rounded-2 shadow-lg text-black AddWallet-card   p-5 m-5"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    fill="currentColor"
                    className="bi bi-plus-square-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
