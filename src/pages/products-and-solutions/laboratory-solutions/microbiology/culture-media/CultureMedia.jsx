import ProductsPage from "../../../../../components/products-and-solutions/ProductsPage";
import SectionsPage from "../../../../../components/products-and-solutions/SectionsPage";
import { navBarData } from "../../../../../lib/data/navBarData";

const CultureMedia = () => {
  const products =
    navBarData[2]?.sections[0]?.sections[3]?.sections[1]?.products;
  const path = navBarData[2]?.sections[0]?.sections[3]?.sections[1]?.path;
  const sections =
    navBarData[2]?.sections[0]?.sections[3]?.sections[1]?.sections;

  return (
    <div className="w-full bg-grayColor rounded-lg px-10 py-8 flex flex-col items-start justify-start gap-8 ">
      <h2 className="font-bold text-3xl text-darkerBlue text-center w-full">
        Culture Media
      </h2>
      <ProductsPage products={products} path={path} />;
      <SectionsPage sections={sections} />
    </div>
  );
};

export default CultureMedia;
