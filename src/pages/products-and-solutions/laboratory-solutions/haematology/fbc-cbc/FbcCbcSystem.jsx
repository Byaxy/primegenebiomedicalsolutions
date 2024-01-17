import SectionsPage from "../../../../../components/products-and-solutions/SectionsPage";
import { navBarData } from "../../../../../lib/data/navBarData";

const FbcCbcSystem = () => {
  const sections =
    navBarData[2]?.sections[0]?.sections[1]?.sections[0]?.sections;
  return (
    <div className="w-full bg-grayColor rounded-lg px-10 py-8 flex flex-col items-center justify-start gap-8 ">
      <h2 className="font-bold text-3xl text-darkerBlue text-center w-full">
        FBC/CBC Systems
      </h2>
      <SectionsPage sections={sections} />
    </div>
  );
};

export default FbcCbcSystem;
