import { Link, useRouteError } from "react-router-dom";
import { Box } from "@nextui-org/react";

const NotFound = () => {
  const error = useRouteError();

  return (
    <Box className="w-full min-h-[90vh] flex flex-col gap-8 items-center justify-center">
      <h2>404 - Not Found</h2>
      <p>Oops! The page you are looking for does not exist.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/">Go to Home</Link>
    </Box>
  );
};

export default NotFound;
