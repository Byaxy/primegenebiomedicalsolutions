import { useParams } from "react-router-dom";
import { getAllProducts, getProductById } from "../../utils/utils";
import { navBarData } from "../../lib/data/navBarData";
import { HiDownload } from "react-icons/hi";
import { Accordion, AccordionItem, getKeyValue } from "@nextui-org/react";
import VideoPlayer from "../VideoPlayer";
import ThumbnailsSlider from "../ThumbnailsSlider";
import { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/react";

const ProductDetailsPage = () => {
  const [product, setProduct] = useState({});
  const [slidesPerView, setSlidesPerView] = useState(1);
  const { id } = useParams();

  useEffect(() => {
    let products = getAllProducts(navBarData[2].sections);
    let selectedProduct = getProductById(id, products);
    let slidesPerView = selectedProduct?.gallery.length;

    setSlidesPerView(slidesPerView);
    setProduct(selectedProduct);
  }, [id]);

  return (
    <div className="w-full flex flex-col items-center justify-start bg-grayColor rounded-lg px-5 py-8 gap-12 md:gap-16">
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
          {product?.desc && (
            <AccordionItem
              key="product-details"
              aria-label="Product Details"
              title="Product Details"
              className="text-lg text-darkerBlue/80"
            >
              <p className="pb-4">{product?.desc}</p>
            </AccordionItem>
          )}
          {product?.functionalityFeatures && (
            <AccordionItem
              key="functionality-features"
              aria-label="Functionality Features"
              title="Functionality Features"
              className="text-lg text-darkerBlue/80"
            >
              <ul className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-8 pl-10 pb-5 list-disc">
                {product?.functionalityFeatures.map((feature) => (
                  <li aria-label={feature} key={feature}>
                    {feature}
                  </li>
                ))}
              </ul>
            </AccordionItem>
          )}
          {product?.technicalSpecifications && (
            <AccordionItem
              key="technical-specifications"
              aria-label="Technical Specifications"
              title="Technical Specification"
              className="text-lg text-darkerBlue/80"
            >
              <Table
                hideHeader
                shadow="none"
                aria-label="Product Technical Specifications"
              >
                <TableHeader>
                  <TableColumn key="name">Name</TableColumn>
                  <TableColumn key="value">Value</TableColumn>
                </TableHeader>
                <TableBody>
                  {product?.technicalSpecifications.map((item) => (
                    <TableRow key={item.name}>
                      {(columnKey) => (
                        <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                      )}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              {}
            </AccordionItem>
          )}
          {product?.configurations && (
            <AccordionItem
              key="configuration-and-Accessories"
              aria-label="Standard Configuration & Accessories"
              title="Standard Configuration & Accessories"
              className="text-lg text-darkerBlue/80"
            >
              <p className="pb-4">{product?.configurations}</p>
            </AccordionItem>
          )}
        </Accordion>
      </div>
      <div className="w-full flex flex-col gap-5">
        {/* Video */}
        {product?.video && (
          <div className="w-full flex flex-wrap gap-5 justify-between">
            {product?.video.map((video, index) => (
              <div
                key={index + video}
                className="flex-grow flex flex-col gap-4"
              >
                <VideoPlayer videoUrl={video.youtube} />
                <p>
                  <a
                    className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none  cursor-pointer text-darkerBlue font-semibold"
                    href={video.download}
                    download
                  >
                    Download Video{" "}
                    <HiDownload className="opacity-60 group-hover:translate-y-1 transition text-darkerBlue" />
                  </a>
                </p>
              </div>
            ))}
          </div>
        )}
        {/* Brochure */}
        {product?.brochure && (
          <p className="mt-5">
            <a
              className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none  cursor-pointer text-darkerBlue font-semibold"
              href={product?.brochure}
              download
            >
              Download Brochure{" "}
              <HiDownload className="opacity-60 group-hover:translate-y-1 transition text-darkerBlue" />
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductDetailsPage;
