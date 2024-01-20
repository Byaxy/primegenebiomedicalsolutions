/* eslint-disable react/prop-types */
import {
  MdOutlineKeyboardArrowDown,
  MdKeyboardArrowRight,
} from "react-icons/md";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function SidebarItem({
  title,
  sections,
  isOpen,
  handleClick,
  icon,
  path,
}) {
  const location = useLocation();

  return (
    <li
      className={`${
        isOpen ? "" : ""
      } "w-full cursor-pointer py-2 pl-4 rounded-md overflow-hidden">`}
    >
      <button className="w-full hover:text-mainDarker text-left">
        {sections && sections.length !== 0 ? (
          <div className="w-full flex flex-row justify-between items-center">
            <Link
              to={path}
              onClick={handleClick}
              className={`${
                location.pathname === path || isOpen
                  ? "text-mainDarker"
                  : "text-grayColor"
              } flex-auto flex flex-row items-center gap-2`}
            >
              <span>{icon}</span>
              <span>{title}</span>
            </Link>
            <span
              onClick={handleClick}
              className={`${
                location.pathname === path || isOpen
                  ? "text-mainDarker"
                  : "text-grayColor"
              } text-xl flex flex-1 justify-end hover:text-mainDarker`}
            >
              {isOpen ? (
                <MdOutlineKeyboardArrowDown />
              ) : (
                <MdKeyboardArrowRight />
              )}
            </span>
          </div>
        ) : (
          <Link
            to={path}
            onClick={handleClick}
            className={`${
              location.pathname === path ? "text-mainDarker" : "text-grayColor"
            } w-full flex flex-row items-center gap-2`}
          >
            <span>{icon}</span>
            <span>{title}</span>
          </Link>
        )}
      </button>
      {isOpen && sections && <Sidebar items={sections} />}
    </li>
  );
}
