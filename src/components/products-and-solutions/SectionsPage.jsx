import { Image } from "@nextui-org/react";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const SectionsPage = ({ sections }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {sections?.map((section) => (
        <div
          key={section?.title}
          className="w-full flex flex-col items-center gap-3"
        >
          <Link to={section?.path}>
            <Image src={section?.image} alt={section?.title} isZoomed />
          </Link>
          <Link to={section?.path}>
            <h3 className="font-semibold text-xl text-darkerBlue hover:text-secondary text-center transition-all ease-in-out duration-700">
              {section?.title}
            </h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SectionsPage;
