import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { navBarData } from "../lib/data/navBarData";

const sidebarItems = navBarData[2].sections;

const SolutionsLayout = () => {
  return (
    <div className="w-full px-5 md:px-8 lg:px-[5rem]">
      <div className="w-full flex flex-col xl:flex-row gap-5 py-10">
        <div className="hidden md:block w-full xl:w-1/3 bg-grayColor rounded-lg px-5 py-8">
          <Sidebar items={sidebarItems} />
        </div>
        <div className="w-full xl:w-2/3 flex">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default SolutionsLayout;
