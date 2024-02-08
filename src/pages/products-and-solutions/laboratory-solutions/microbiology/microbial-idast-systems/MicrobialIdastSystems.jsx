import SectionsPage from "../../../../../components/products-and-solutions/SectionsPage";
import { navBarData } from "../../../../../lib/data/navBarData";

const MicrobialIdastSystems = () => {
  const sections =
    navBarData[2]?.sections[0]?.sections[3]?.sections[2]?.sections;

  return (
    <div className="w-full bg-grayColor rounded-lg px-5 md:px-10 py-8 flex flex-col items-start justify-start gap-8 ">
      <h2 className="font-bold text-3xl text-darkerBlue text-center w-full">
        Microbial ID/AST Systems
      </h2>
      <SectionsPage sections={sections} />
    </div>
  );
};

export default MicrobialIdastSystems;
