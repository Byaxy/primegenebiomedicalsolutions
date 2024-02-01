/* eslint-disable react/prop-types */
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Image } from "@nextui-org/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ThumbnailsSlider = ({ images, slidesPerView }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section className="w-full">
      <div className="container relative">
        <Swiper
          loop={true}
          autoplay={true}
          spaceBetween={10}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="h-96 w-full rounded-lg"
        >
          {images &&
            images?.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="flex h-full w-full items-center justify-center">
                  <Image
                    src={image}
                    alt={"Product Image"}
                    className="block h-full w-full object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}

          {/* Prev Arrow */}
          <div
            className={`bg-secondaryColor text-darkerBlue hover:bg-darkerBlue hover:text-white custom-prev absolute top-[50%] left-0 z-20 w-10 h-10 rounded-full flex justify-center items-center duration-500 cursor-pointer`}
          >
            <FaArrowLeft className="w-4 h-4" />
          </div>
          {/* Next Arrow */}
          <div
            className={`bg-secondaryColor text-darkerBlue hover:bg-darkerBlue hover:text-white custom-next absolute top-[50%] right-0 z-20 w-10 h-10 rounded-full flex justify-center items-center duration-500 cursor-pointer`}
          >
            <FaArrowRight className="w-4 h-4" />
          </div>
        </Swiper>

        {/* Thumbnail */}
        <div className="hidden w-full md:block">
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={slidesPerView}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="thumbs mt-5 h-28 w-full flex items-center justify-center rounded-lg"
          >
            {images &&
              images?.map((image, index) => (
                <SwiperSlide key={index}>
                  <button className="flex h-28 w-28 items-center justify-center rounded-full overflow-hidden">
                    <Image
                      src={image}
                      alt={"Product Image"}
                      className="block h-full w-full object-cover"
                    />
                  </button>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ThumbnailsSlider;