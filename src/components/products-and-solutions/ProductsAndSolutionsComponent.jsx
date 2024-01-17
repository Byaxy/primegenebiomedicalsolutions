/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ProductsAndSolutionsComponent = ({ data, title }) => {
  return (
    <div className="w-full h-full bg-grayColor rounded-lg p-10 flex flex-col items-start justify-start gap-8 ">
      <h2 className="font-bold text-3xl text-darkerBlue text-center w-full">
        {title}
      </h2>
      <div className=" w-full  grid gap-4 md:grid-cols-3">
        {data &&
          data?.map((item) => (
            <Link key={item.title} to={item.path}>
              <div className="flex flex-col items-center justify-center bg-white rounded-lg py-6 px-2 gap-2 hover:bg-darkerBlue group transition-all ease-in-out duration-700 cursor-pointer">
                <span className="text-[4rem] text-secondary">{item?.icon}</span>
                <h3 className="font-bold text-lg group-hover:text-white text-darkerBlue text-center transition-all ease-in-out duration-700">
                  {item?.title}
                </h3>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default ProductsAndSolutionsComponent;
