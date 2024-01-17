import ProductsPage from "../../../../../components/products-and-solutions/ProductsPage";
import { navBarData } from "../../../../../lib/data/navBarData";

const HaemoglobinA1cSolutions = () => {
  const products =
    navBarData[2]?.sections[0]?.sections[0]?.sections[3]?.products;
  const path = navBarData[2]?.sections[0]?.sections[0]?.sections[3]?.path;

  return (
    <div className="w-full bg-grayColor rounded-lg px-10 py-8 flex flex-col items-start justify-start gap-8 ">
      <h2 className="font-bold text-3xl text-darkerBlue text-center w-full">
        Haemoglobin A1C Solutions
      </h2>
      <ProductsPage products={products} path={path} />
    </div>
  );
};

export default HaemoglobinA1cSolutions;
