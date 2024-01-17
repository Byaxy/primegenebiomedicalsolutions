import ProductsPage from "../../../../../../../components/products-and-solutions/ProductsPage";
import { navBarData } from "../../../../../../../lib/data/navBarData";

const FullAutomatedChemistrySystems = () => {
  const products =
    navBarData[2]?.sections[0]?.sections[0]?.sections[0]?.sections[1]
      ?.sections[1]?.products;
  const path =
    navBarData[2]?.sections[0]?.sections[0]?.sections[0]?.sections[1]
      ?.sections[1]?.path;
  return (
    <div className="w-full bg-grayColor rounded-lg px-10 py-8 flex flex-col items-center justify-start gap-8 ">
      <h2 className="font-bold text-3xl text-darkerBlue text-center w-full">
        Full Automated Chemistry Systems
      </h2>
      <ProductsPage products={products} path={path} />
    </div>
  );
};

export default FullAutomatedChemistrySystems;
