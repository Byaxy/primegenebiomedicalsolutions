/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Image } from "@nextui-org/react";
import { Link } from "react-router-dom";

const SectionSlider = ({ products, styles }) => {
  return (
    <div className="wraper">
      <Swiper
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        modules={[Autoplay, Navigation]}
        spaceBetween={40}
        slidesPerView={3}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {products &&
          products?.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="relative flex flex-col items-center justify-center">
                <div className="w-[300px] h-[300px] sm:w-[340px] sm:h-[340px] flex items-center justify-center rounded-full overflow-hidden bg-white z-0">
                  <Image
                    isZoomed
                    width={300}
                    height={300}
                    src={product.image}
                    alt={product.title}
                    className="w-[100%] h-auto block object-cover overflow-hidden cursor-pointer"
                  />
                </div>
                <div className="bg-primary h-[85px] w-[85px] rounded-full border-2 border-white text-[12px] text-white font-semibold flex flex-col justify-center items-center text-center absolute right-6 top-2 z-10">
                  <p>Cat.#</p>
                  <p className="text-secondary -mt-1">{product.code}</p>
                </div>
                <div className="flex flex-col justify-center items-center text-center">
                  <h2
                    className={`${styles.title} text-lg font-bold mt-8 break-words px-2`}
                  >
                    {product.title}
                  </h2>
                  <p className={`${styles.desc} text-sm mt-2 break-words`}>
                    {product.disc}
                  </p>
                  {/* Button */}
                  <div className="flex flex-col items-center mt-14 mb-2">
                    <Link
                      to={product.path}
                      className={`${styles.link} group flex items-center px-7 py-3 rounded-full font-bold font-body text-sm transition-all ease-in-out duration-700`}
                    >
                      <span className="font-bold pr-2">{product.category}</span>
                      <div
                        className={`${styles.arrow} flex w-5 h-5 rounded-full justify-center items-center transition-all ease-in-out duration-700 group-hover:translate-x-2`}
                      >
                        <FaArrowRight className="w-3 h-3" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        {/* Prev Arrow */}
        <div
          className={`${styles.link} custom-prev absolute top-[50%] left-0 z-20 w-10 h-10 rounded-full flex justify-center items-center duration-500 cursor-pointer`}
        >
          <FaArrowLeft className="w-4 h-4" />
        </div>
        {/* Next Arrow */}
        <div
          className={`${styles.link} custom-next absolute top-[50%] right-0 z-20 w-10 h-10 rounded-full flex justify-center items-center duration-500 cursor-pointer`}
        >
          <FaArrowRight className="w-4 h-4" />
        </div>
      </Swiper>
    </div>
  );
};

export default SectionSlider;
