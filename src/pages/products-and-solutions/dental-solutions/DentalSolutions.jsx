import { navBarData } from "../../../lib/data/navBarData";
import ProductsAndSolutionsComponent from "../../../components/products-and-solutions/ProductsAndSolutionsComponent";

const DentalSolutions = () => {
  const data = navBarData[2].sections[3]?.sections;

  return (
    <div className="w-full h-full">
      <ProductsAndSolutionsComponent title={"Dental Solutions"} data={data} />
    </div>
  );
};

export default DentalSolutions;
