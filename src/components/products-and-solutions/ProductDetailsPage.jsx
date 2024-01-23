import { useParams } from "react-router-dom";
import { getAllProducts, getProductById } from "../../utils/utils";
import { navBarData } from "../../lib/data/navBarData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { Accordion, AccordionItem, Image } from "@nextui-org/react";
import VideoPlayer from "../VideoPlayer";
import GetInTouchForm from "../GetInTouchForm";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const allProducts = getAllProducts(navBarData[2].sections);
  const product = getProductById(id, allProducts);

  return (
    <div className="w-full flex flex-col items-center justify-start bg-grayColor rounded-lg px-5 py-8 gap-8">
      <h2 className="text-2xl w-full text-center font-semibold text-darkerBlue">
        {product?.title}
      </h2>
      <div className="relative w-full my-8">
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
          spaceBetween={20}
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
          {product?.gallery &&
            product?.gallery?.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center justify-center">
                  <div className="w-[260px] h-[260px] flex items-center justify-center rounded-full overflow-hidden bg-white z-0">
                    <Image
                      isZoomed
                      width={300}
                      height={300}
                      src={image}
                      alt={"Product Image"}
                      className="w-[100%] h-auto block object-cover overflow-hidden cursor-pointer"
                    />
                  </div>
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
      </div>
      <div className="w-full">
        <Accordion variant="splitted">
          <AccordionItem
            key="product-details"
            aria-label="Product Details"
            title="Product Details"
            className="text-lg text-darkerBlue/80"
          >
            <p className="pb-4">{product?.desc}</p>
          </AccordionItem>
          <AccordionItem
            key="technical-specifications"
            aria-label="Technical Specifications"
            title="Technical Specification"
            className="text-lg text-darkerBlue/80"
          >
            <p className="pb-4">{product?.technicalSpecifications}</p>
          </AccordionItem>
          <AccordionItem
            key="configuration-and-Accessories"
            aria-label="Standard Configuration & Accessories"
            title="Standard Configuration & Accessories"
            className="text-lg text-darkerBlue/80"
          >
            <p className="pb-4">{product?.configurations}</p>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="w-full px-4 flex flex-col gap-5">
        <div>
          <VideoPlayer />
        </div>
        <p>
          <a
            className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none  cursor-pointer text-darkerBlue font-semibold my-5"
            href={product?.brochure}
            download
          >
            Download Brochure{" "}
            <HiDownload className="opacity-60 group-hover:translate-y-1 transition text-darkerBlue" />
          </a>
        </p>
        <GetInTouchForm />
      </div>
    </div>
  );
};

export default ProductDetailsPage;
