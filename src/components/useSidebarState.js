import { useState } from "react";

const useSidebarState = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleItemClick = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return {
    openIndex,
    handleItemClick,
  };
};

export default useSidebarState;
