import { Spinner } from "@nextui-org/react";
const Loading = () => {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center text-darkerBlue">
      <Spinner
        label="Prime Gene Biomedical Solutions"
        size="lg"
        labelColor="primary"
      />
    </div>
  );
};

export default Loading;
