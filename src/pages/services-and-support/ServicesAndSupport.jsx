import { Link } from "react-router-dom";
import { navBarData } from "../../lib/data/navBarData";

const data = navBarData[3].sections;

const ServicesAndSupport = () => {
  return (
    <div>
      <div className="w-full bg-cover h-[65vh] bg-no-repeat bg-center flex items-center bg-servicesAndSupport">
        <div className="w-full h-full flex items-center wraper">
          <h1 className="text-4xl font-bold text-darkerBlue">
            Services and Support
          </h1>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center wraper my-20">
        <ul className="w-full flex flex-row gap-8 flex-wrap justify-center">
          {data &&
            data.map((product, index) => (
              <li key={product.title + index}>
                <Link to={product.path}>
                  <div className="flex flex-col gap-4 text-center items-center justify-center cursor-pointer shadow-sm bg-grayColor rounded-lg px-8 py-6  group transition-all ease-in-out duration-700 hover:shadow-lg">
                    <div className="flex items-center justify-center bg-white group-hover:bg-primary p-8 rounded-full overflow-hidden transition-all ease-in-out duration-700">
                      <span className="text-secondary text-4xl">
                        {product?.icon}
                      </span>
                    </div>
                    <h2 className="text-primary text-md font-semibold">
                      {product?.title}
                    </h2>
                  </div>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default ServicesAndSupport;
