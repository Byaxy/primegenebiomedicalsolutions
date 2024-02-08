import ProductsPage from "../../../../../../components/products-and-solutions/ProductsPage";
import { navBarData } from "../../../../../../lib/data/navBarData";

const SemiAutomatedCliaSystems = () => {
  const products =
    navBarData[2]?.sections[0]?.sections[2]?.sections[0]?.sections[1]?.products;
  const path =
    navBarData[2]?.sections[0]?.sections[2]?.sections[0]?.sections[1]?.path;
  return (
    <div className="w-full bg-grayColor rounded-lg px-5 md:px-10 py-8 flex flex-col items-start justify-start gap-8 ">
      <h2 className="font-bold text-3xl text-darkerBlue text-center w-full">
        Semi-Automated CLIA Systems
      </h2>
      <ProductsPage products={products} path={path} />
    </div>
  );
};

export default SemiAutomatedCliaSystems;
