import ProductsPage from "../../../../../components/products-and-solutions/ProductsPage";
import SectionsPage from "../../../../../components/products-and-solutions/SectionsPage";
import { navBarData } from "../../../../../lib/data/navBarData";

const EquipmentAndAccessories = () => {
  const sections =
    navBarData[2]?.sections[0]?.sections[3]?.sections[0]?.sections;
  const products =
    navBarData[2]?.sections[0]?.sections[3]?.sections[0]?.products;
  const path = navBarData[2]?.sections[0]?.sections[3]?.sections[0]?.path;

  return (
    <div className="w-full bg-grayColor rounded-lg px-10 py-8 flex flex-col items-start justify-start gap-8 ">
      <h2 className="font-bold text-3xl text-darkerBlue text-center w-full">
        Equipment And Accessories
      </h2>
      <SectionsPage sections={sections} />
      <ProductsPage products={products} path={path} />
    </div>
  );
};

export default EquipmentAndAccessories;
