import { Image } from "@nextui-org/react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="hidden xl:flex items-center justify-center">
      <Link href="/">
        <Image
          width={240}
          src="https://i.imgur.com/nL2cV8G.png"
          alt="Logo"
          className="max-w-[10rem] md:max-w-[16rem] h-auto block"
        />
      </Link>
    </div>
  );
};

export default Logo;
