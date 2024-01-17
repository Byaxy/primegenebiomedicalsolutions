/* eslint-disable react/prop-types */
import {
  MdOutlineKeyboardArrowDown,
  MdKeyboardArrowRight,
} from "react-icons/md";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

export default function SidebarItem({
  title,
  sections,
  isOpen,
  handleClick,
  icon,
  path,
}) {
  return (
    <li
      className={`${
        isOpen ? "border-0 py-3" : "border"
      } "w-full cursor-pointer  border-darkerBlue bg-white my-2 py-2 px-3 rounded-md overflow-hidden">`}
    >
      <button
        className={`${
          isOpen ? "text-mainDarker pb-1" : "text-darkerBlue"
        } w-full`}
      >
        {sections && sections.length !== 0 ? (
          <div className="w-full flex flex-row justify-between items-center">
            <Link
              to={path}
              className="flex-auto flex flex-row items-center gap-1"
            >
              <span>{icon}</span>
              <span>{title}</span>
            </Link>
            <span
              onClick={handleClick}
              className="text-xl flex flex-1 justify-end hover:text-mainDarker"
            >
              {isOpen ? (
                <MdOutlineKeyboardArrowDown />
              ) : (
                <MdKeyboardArrowRight />
              )}
            </span>
          </div>
        ) : (
          <Link to={path} className="w-full flex">
            <span>{title}</span>
          </Link>
        )}
      </button>
      {isOpen && sections && <Sidebar items={sections} />}
    </li>
  );
}
