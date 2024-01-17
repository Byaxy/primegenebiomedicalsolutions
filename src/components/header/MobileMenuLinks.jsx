import { useState } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { navBarData } from "../../lib/data/navBarData";

// eslint-disable-next-line react/prop-types
const MobileMenuLinks = ({ handleClick }) => {
  const [show, setShow] = useState(null);

  const toggle = (index) => {
    if (show === index) {
      return setShow(null);
    }

    setShow(index);
  };

  return (
    <ul className="flex flex-col gap-4 mt-6 text-lg font-body">
      {navBarData &&
        navBarData.map((item, index) => {
          return (
            <>
              {item?.sections ? (
                <li key={item.title + index}>
                  <div
                    onClick={() => toggle(index)}
                    className={`${
                      show === index ? "text-secondary" : "text-white"
                    } flex flex-row gap-2 items-center justify-between cursor-pointer`}
                  >
                    <h3>{item.title}</h3>
                    <span>{show === index ? <FaTimes /> : <FaPlus />}</span>
                  </div>
                  {show === index ? (
                    <ul className="ml-4 flex flex-col gap-3 mt-4">
                      {item.sections?.map((subItem, index) => {
                        return (
                          <li
                            key={subItem.title + index}
                            onClick={() => handleClick(false)}
                          >
                            <Link to={subItem.path}>
                              <h4>{subItem.title}</h4>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  ) : null}
                </li>
              ) : (
                <li key={item.title + index} onClick={() => handleClick(false)}>
                  <Link to={item.path}>
                    <h3>{item.title}</h3>
                  </Link>
                </li>
              )}
            </>
          );
        })}
    </ul>
  );
};

export default MobileMenuLinks;
