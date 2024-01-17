import { FaTimes, FaPlus } from "react-icons/fa";
import MobileMenuLinks from "./MobileMenuLinks";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Image } from "@nextui-org/react";

// eslint-disable-next-line react/prop-types
const MobileMenu = ({ handleClick }) => {
  const [showLanguages, setShowLanguages] = useState(false);

  return (
    <div className="w-[100%] bg-primary md:w-[60%] xl:hidden">
      {/* Logo */}
      <div className="flex w-full items-center justify-between bg-white px-5 py-6 text-primary">
        <Link to="/">
          <div className="flex items-center justify-center">
            <Image
              src="https://i.imgur.com/z1eLZCZ.jpg"
              alt="Logo"
              className="max-w-[12rem] h-auto block"
              width={200}
            />
          </div>
        </Link>
        <button onClick={() => handleClick(false)}>
          <FaTimes className="w-5 h-5 text-primary hover:text-secondary transition-all ease-in-out duration-700" />
        </button>
      </div>
      {/* Navigation Links */}
      <div className="pt-4 pb-10 px-4 text-white">
        <MobileMenuLinks handleClick={handleClick} />
        <div>
          <div
            className={`${
              showLanguages ? "text-secondary" : "text-grayColor"
            } w-full flex justify-between items-center text-lg mt-4 cursor-pointer`}
            onClick={() => setShowLanguages((prev) => !prev)}
          >
            <span>Select Language</span>
            <span>{showLanguages ? <FaTimes /> : <FaPlus />}</span>
          </div>
          {showLanguages && (
            <ul className="flex flex-col mt-4 gap-4 pl-5 min-h-fit">
              <li className="hover:text-secondary cursor-pointer">English</li>
              <li className="hover:text-secondary cursor-pointer">French</li>
              <li className="hover:text-secondary cursor-pointer">Arabic</li>
              <li className="hover:text-secondary cursor-pointer">Chinese</li>
              <li className="hover:text-secondary cursor-pointer">Spanish</li>
              <li className="hover:text-secondary cursor-pointer">German</li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
