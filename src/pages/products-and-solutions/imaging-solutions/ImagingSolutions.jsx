import { navBarData } from "../../../lib/data/navBarData";
import ProductsAndSolutionsComponent from "../../../components/products-and-solutions/ProductsAndSolutionsComponent";

const ImagingSolutions = () => {
  const data = navBarData[2].sections[2]?.sections;

  return (
    <div className="w-full h-full">
      <ProductsAndSolutionsComponent title={"Imaging Solutions"} data={data} />
    </div>
  );
};

export default ImagingSolutions;
