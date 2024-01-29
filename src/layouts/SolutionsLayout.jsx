/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import GetInTouchForm from "../components/GetInTouchForm";

// eslint-disable-next-line react/prop-types
const SolutionsLayout = ({ sidebarData }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className="wraper">
      <div className="w-full flex flex-col xl:flex-row gap-5 py-10">
        <button
          onClick={() => setShowSidebar((prev) => !prev)}
          className="block xl:hidden"
        >
          {showSidebar ? (
            <FaTimes className="w-6 h-6 text-darkerBlue hover:text-secondary transition" />
          ) : (
            <MdMenu className="w-8 h-10 text-darkerBlue hover:text-secondary transition" />
          )}
        </button>
        {showSidebar && (
          <div className="w-full bg-darkerBlue rounded-lg px-5 py-8 slide-in-left">
            {sidebarData && sidebarData.length > 0 ? (
              <Sidebar items={sidebarData} />
            ) : (
              <div className="w-full text-xl font-semibold text-grayColor text-center">
                No Items to Display
              </div>
            )}
          </div>
        )}
        <div className="hidden xl:block w-full xl:w-1/4 bg-darkerBlue rounded-lg px-5 py-8">
          {sidebarData && sidebarData.length > 0 ? (
            <Sidebar items={sidebarData} />
          ) : (
            <div className="w-full text-xl font-semibold text-grayColor text-center">
              No Items to Display
            </div>
          )}
        </div>
        <div className="w-full xl:w-3/4 flex">
          <Outlet />
        </div>
      </div>
      <div className="w-full bg-grayColor rounded-lg p-5 md:p-8 mb-10">
        <GetInTouchForm />
      </div>
    </div>
  );
};

export default SolutionsLayout;
