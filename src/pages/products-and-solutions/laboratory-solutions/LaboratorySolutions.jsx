import { navBarData } from "../../../lib/data/navBarData";
import ProductsAndSolutionsComponent from "../../../components/products-and-solutions/ProductsAndSolutionsComponent";

const LaboratorySolutions = () => {
  const data = navBarData[2].sections[0]?.sections;

  return (
    <div className="w-full h-full">
      <ProductsAndSolutionsComponent
        title={"Laboratory Solutions"}
        data={data}
      />
    </div>
  );
};

export default LaboratorySolutions;
