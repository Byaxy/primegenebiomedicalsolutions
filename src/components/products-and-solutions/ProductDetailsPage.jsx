import { useParams } from "react-router-dom";
import { getAllProducts, getProductById } from "../../utils/utils";
import { navBarData } from "../../lib/data/navBarData";
import { HiDownload } from "react-icons/hi";
import { Accordion, AccordionItem } from "@nextui-org/react";
import VideoPlayer from "../VideoPlayer";
import ThumbnailsSlider from "../ThumbnailsSlider";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const allProducts = getAllProducts(navBarData[2].sections);
  const product = getProductById(id, allProducts);
  let slidesPerView = product?.gallery.length;

  return (
    <div className="w-full flex flex-col items-center justify-start bg-grayColor rounded-lg px-5 py-8 gap-12 md:gap-20">
      <h2 className="text-3xl w-full text-center font-bold text-darkerBlue">
        {product?.title}
      </h2>
      <div className="relative w-full">
        <ThumbnailsSlider
          images={product?.gallery}
          slidesPerView={slidesPerView}
        />
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
      <div className="w-full flex flex-col gap-5">
        <div>
          <VideoPlayer videoUrl={product?.video} />
        </div>
        <p className="mt-5">
          <a
            className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none  cursor-pointer text-darkerBlue font-semibold"
            href={product?.brochure}
            download
          >
            Download Video{" "}
            <HiDownload className="opacity-60 group-hover:translate-y-1 transition text-darkerBlue" />
          </a>
        </p>
        <p>
          <a
            className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none  cursor-pointer text-darkerBlue font-semibold"
            href={product?.brochure}
            download
          >
            Download Brochure{" "}
            <HiDownload className="opacity-60 group-hover:translate-y-1 transition text-darkerBlue" />
          </a>
        </p>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
