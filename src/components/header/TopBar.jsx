import { FaTty } from "react-icons/fa";
import SocialLinks from "./SocialLinks";

const TopBar = () => {
  return (
    <div className="text-secondary hidden lg:block pb-4 z-30">
      <div className="wraper flex items-center justify-between">
        {/* Contacts */}
        <div className="flex items-center ">
          <FaTty className="mr-2 w-8 h-8" />
          <div className="flex flex-col leading-tight text-sm">
            <span>+233 244364439 (Ghana)</span>
            <span>+231 775508118 (Liberia)</span>
          </div>
        </div>
        {/* Motto */}
        <div>
          <p>Legacy of Quality Par Excellence</p>
        </div>
        {/* Social links */}
        <SocialLinks />
      </div>
    </div>
  );
};

export default TopBar;
