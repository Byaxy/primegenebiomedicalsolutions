/* eslint-disable react/prop-types */
import { Image } from "@nextui-org/react";
import { Link } from "react-router-dom";

const ProductsPage = ({ products, path }) => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
      {products?.map((product) => (
        <div
          key={product?.title}
          className="w-full flex flex-col items-center gap-3"
        >
          <Link to={`${path}/${product?.id}`}>
            <Image
              className="w-[400px] xl:w-[600px] h-[280px] xl:h-[360px]"
              src={product?.image}
              alt={product?.title}
              isZoomed
            />
          </Link>
          <Link to={`${path}/${product?.id}`}>
            <h3 className="font-semibold text-xl text-darkerBlue hover:text-secondary text-center transition-all ease-in-out duration-700">
              {product?.title}
            </h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductsPage;
