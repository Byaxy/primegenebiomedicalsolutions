/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

// eslint-disable-next-line react/prop-types
const SolutionsLayout = ({ sidebarData }) => {
  return (
    <div className="w-full px-5 md:px-8 lg:px-[5rem]">
      <div className="w-full flex flex-col xl:flex-row gap-5 py-10">
        <div className="hidden md:block w-full xl:w-1/3 bg-darkerBlue rounded-lg px-5 py-8">
          {sidebarData && sidebarData.length > 0 ? (
            <Sidebar items={sidebarData} />
          ) : (
            <div className="w-full text-xl font-semibold text-grayColor text-center">
              No Items to Display
            </div>
          )}
        </div>
        <div className="w-full xl:w-2/3 flex">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default SolutionsLayout;
