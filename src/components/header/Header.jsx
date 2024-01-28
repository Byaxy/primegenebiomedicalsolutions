import { useState } from "react";
import TopBar from "./TopBar";
import { useScrollContext } from "../../lib/context/ScrollContext";
import { Link } from "react-router-dom";
import { Image } from "@nextui-org/react";
import { MdMenu } from "react-icons/md";
import SelectLanguage from "./SelectLanguage";
import DeskTopMenu from "./DeskTopMenu";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [show, setShow] = useState(false);
  const { isScrolled } = useScrollContext();

  return (
    <div className="relative flex w-full flex-col justify-center  py-4 bg-headerImage bg-cover">
      <div className="absolute top-0 left-0 w-full h-full bg-primary/80 z-20" />

      {/* Social links and contact section */}
      <TopBar />
      <div
        className={`${
          isScrolled
            ? "fixed top-0 left-0 bg-primary border-b border-dashed border-b-grayColor"
            : ""
        } w-full z-[100]`}
      >
        <div className="wraper flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center justify-center py-4">
            <Link to="/">
              <Image
                width={280}
                src="https://i.imgur.com/dYOsjQ3.png"
                alt="Logo"
                className="max-w-[12rem] md:max-w-[18rem] h-auto block"
              />
            </Link>
          </div>

          {/* Navigation */}

          {/* Desktop Menu */}
          <div>
            <button>
              <MdMenu
                className="w-8 h-10 text-white hover:text-secondary xl:hidden transition-all ease-in-out duration-700"
                onClick={() => setShow(true)}
              />
            </button>
            <div className="hidden xl:flex flex-row items-center gap-6 pb-5">
              <div>
                <DeskTopMenu />
              </div>
              <SelectLanguage />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {show ? (
          <div className="absolute top-0 left-0 w-full slide-in-left">
            <MobileMenu handleClick={(show) => setShow(show)} />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
