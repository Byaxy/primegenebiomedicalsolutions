import SectionsPage from "../../../../components/products-and-solutions/SectionsPage";
import { navBarData } from "../../../../lib/data/navBarData";

const Microbiology = () => {
  const sections = navBarData[2]?.sections[0]?.sections[3]?.sections;

  return (
    <div className="w-full bg-grayColor rounded-lg px-10 py-8 flex flex-col items-start justify-start gap-8 ">
      <h2 className="font-bold text-3xl text-darkerBlue text-center w-full">
        Microbiology Solutions
      </h2>
      <SectionsPage sections={sections} />
    </div>
  );
};

export default Microbiology;
