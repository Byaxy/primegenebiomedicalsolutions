import SectionSlider from "./SectionSlider";
import { dentalSolutionsSectionSliderData } from "../../lib/data/dentalSolutionsSectionSliderData";
import { Link } from "react-router-dom";

const DentalSolutionsSection = () => {
  const styles = {
    title: "text-secondary",
    link: "bg-secondary text-darkerBlue hover:bg-white hover:text-darkerBlue",
    arrow:
      "group-hover:bg-darkerBlue group-hover:text-white bg-white text-darkerBlue",
    desc: "text-gray-300",
  };
  return (
    <section className="w-full bg-primary py-24">
      <div className="flex flex-col justify-center items-center text-center">
        <Link to="/products-and-solutions/dental-solutions">
          <h2 className="text-3xl md:text-5xl mb-5 font-bold text-secondary">
            Dental Solutions
          </h2>
        </Link>
        <p className="text-gray-300 max-w-2xl break-words text-lg px-2">
          Prime Gene Dental Solutions is dedicated and committed to always
          providing great and superior customer service, low prices and fast
          delivery to ensure you always have the highest quality dental products
          for your top quality dental supplies direct to your dental practice.
          We offer great products from leading manufacturers across the globe.
        </p>
      </div>
      <div className="w-full py-14">
        <SectionSlider
          products={dentalSolutionsSectionSliderData}
          styles={styles}
        />
      </div>
    </section>
  );
};

export default DentalSolutionsSection;
