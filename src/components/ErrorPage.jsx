import { useRouteError } from "react-router-dom";
import { Box, Text } from "@nextui-org/react";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <Box className="w-full min-h-[90vh] flex flex-col gap-8 items-center justify-center">
      <Text h1>Oops!</Text>
      <Text>Sorry, an unexpected error has occurred.</Text>
      <Text>
        <i>{error.statusText || error.message}</i>
      </Text>
    </Box>
  );
};

export default ErrorPage;
