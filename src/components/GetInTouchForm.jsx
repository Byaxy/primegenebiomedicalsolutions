import { Button, Input, Select, SelectItem, Textarea } from "@nextui-org/react";

const GetInTouchForm = () => {
  const categories = [
    { label: "Laboratory Solutions", value: "Laboratory Solutions" },
    { label: "Medical Solutions", value: "Medical Solutions" },
    { label: "Imaging Solutions", value: "Imaging Solutions" },
    { label: "Dental Solutions", value: "Dental Solutions" },
    { label: "Research Solutions", value: "Research Solutions" },
    { label: "Teaching Solutions", value: "Teaching Solutions" },
    { label: "Veterinary Solutions", value: "Veterinary Solutions" },
  ];
  return (
    <div className="w-full flex flex-col gap-5 text-darkerBlue bg-white rounded-lg p-5 items-center">
      <h3 className="text-3xl font-bold">GET IN TOUCH</h3>
      <p>
        We use experience and profession to offer the best Solutions for our
        clients!
      </p>
      <form action="" className="flex w-full flex-col gap-4">
        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
          <div className="w-full flex flex-col gap-2">
            <label className="text-darkerBlue font-semibold">Name</label>
            <Input
              variant="flat"
              type="text"
              placeholder="Enter your name"
              isRequired
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label className="text-darkerBlue font-semibold">Email</label>
            <Input
              variant="flat"
              type="email"
              placeholder="Enter your email"
              isRequired
            />
          </div>
        </div>
        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
          <div className="w-full flex flex-col gap-2">
            <label className="text-darkerBlue font-semibold">
              Phone Number
            </label>
            <Input
              variant="flat"
              type="tel"
              placeholder="Enter your phone number"
              isRequired
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label className="text-darkerBlue font-semibold">Country</label>
            <Input
              variant="flat"
              type="text"
              placeholder="Enter your country"
              isRequired
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-2">
          <label className="text-darkerBlue font-semibold">Category</label>
          <Select placeholder="Select category" isRequired>
            {categories &&
              categories.map((category) => (
                <SelectItem key={category.label} value={category.value}>
                  {category.label}
                </SelectItem>
              ))}
          </Select>
        </div>
        <div className="w-full flex flex-col gap-2">
          <label className="text-darkerBlue font-semibold">Description</label>
          <Textarea
            isRequired
            variant="flat"
            placeholder="Enter your description"
            classNames={{
              input: "resize-y min-h-[200px]",
            }}
          />
        </div>
        <div className="w-full flex justify-center py-4">
          <Button
            type="submit"
            variant="solid"
            size="lg"
            color="primary"
            className="font-bold"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default GetInTouchForm;
