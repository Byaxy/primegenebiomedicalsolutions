import { navBarData } from "../../../lib/data/navBarData";
import ProductsAndSolutionsComponent from "../../../components/products-and-solutions/ProductsAndSolutionsComponent";

const MedicalSolutions = () => {
  const data = navBarData[2].sections[1]?.sections;

  return (
    <div className="w-full h-full">
      <ProductsAndSolutionsComponent title={"Medical Solutions"} data={data} />
    </div>
  );
};

export default MedicalSolutions;
