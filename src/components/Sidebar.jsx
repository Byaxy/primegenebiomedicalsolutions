/* eslint-disable react/prop-types */
import SidebarItem from "./SidebarItem";
import useSidebarState from "./useSidebarState";

export default function Sidebar({ items }) {
  const { openIndex, handleItemClick } = useSidebarState();

  if (!items) {
    return null;
  }

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
