import BannerSlider from "../../components/home/BannerSlider";
import DentalSolutionsSection from "../../components/home/DentalSolutionsSection";
import HeroSection from "../../components/home/HeroSection";
import ImagingSolutionsProductsSection from "../../components/home/ImagingSolutionsProductsSection";
import ImagingSolutionsSection from "../../components/home/ImagingSolutionsSection";
import LaboratorySolutionsSection from "../../components/home/LaboratorySolutionsSection";
import MedicalProductsSection from "../../components/home/MedicalProductsSection";
import ProductsSection from "../../components/home/ProductsSection";
import VeterinarySolutionsSection from "../../components/home/VeterinarySolutionsSection";

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full">
        <BannerSlider />
      </div>
      <LaboratorySolutionsSection />
      <ProductsSection />
      <MedicalProductsSection />
      <HeroSection />
      <DentalSolutionsSection />
      <ImagingSolutionsSection />
      <ImagingSolutionsProductsSection />
      <VeterinarySolutionsSection />
    </div>
  );
};

export default Home;
