import ProductsPage from "../../../../../../components/products-and-solutions/ProductsPage";
import { navBarData } from "../../../../../../lib/data/navBarData";

const HemostasisFullyAutomatedSystem = () => {
  const products =
    navBarData[2]?.sections[0]?.sections[1]?.sections[1]?.sections[0]?.products;
  const path =
    navBarData[2]?.sections[0]?.sections[1]?.sections[1]?.sections[0]?.path;

  return (
    <div className="w-full bg-grayColor rounded-lg px-5 md:px-10 py-8 flex flex-col items-center justify-start gap-8 ">
      <h2 className="font-bold text-3xl text-darkerBlue text-center w-full">
        Fully Automated Coagulation System
      </h2>
      <ProductsPage products={products} path={path} />
    </div>
  );
};

export default HemostasisFullyAutomatedSystem;
