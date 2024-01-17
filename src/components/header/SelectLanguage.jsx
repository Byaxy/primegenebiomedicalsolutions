import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import { useState } from "react";
import { GiWorld } from "react-icons/gi";
import Search from "./Search";

const SelectLanguage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex-1 flex flex-row gap-4 items-center">
      <Search />
      <Popover
        isOpen={isOpen}
        onOpenChange={(open) => setIsOpen(open)}
        placement="bottom-end"
      >
        <PopoverTrigger>
          <span
            aria-label="Select Language"
            className="flex cursor-pointer bg-grayColor  text-primary rounded-full p-0"
            title="Select Language"
          >
            <GiWorld className="w-8 h-8" />
          </span>
        </PopoverTrigger>
        <PopoverContent>
          <ul className="flex flex-col p-4 gap-3 text-darkerBlue">
            <li
              className="hover:text-secondary cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              English
            </li>
            <li
              className="hover:text-secondary cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              French
            </li>
            <li
              className="hover:text-secondary cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Arabic
            </li>
            <li
              className="hover:text-secondary cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Chinese
            </li>
            <li
              className="hover:text-secondary cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Spanish
            </li>
            <li
              className="hover:text-secondary cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              German
            </li>
          </ul>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default SelectLanguage;
