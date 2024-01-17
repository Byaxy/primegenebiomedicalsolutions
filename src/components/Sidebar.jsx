/* eslint-disable react/prop-types */
import { useState } from "react";
import SidebarItem from "./SidebarItem";

export default function Sidebar({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <ul className="w-full">
      {items.map((item, index) => (
        <SidebarItem
          key={item.title}
          {...item}
          isOpen={openIndex === index}
          handleClick={() => handleItemClick(index)}
        />
      ))}
    </ul>
  );
}
