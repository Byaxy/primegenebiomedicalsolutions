import { useRef } from "react";
import { Button, Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { Country } from "country-state-city";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

const defaultValues = {
  name: "",
  email: "",
  message: "",
  country: "",
  category: "",
};

const GetInTouchForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm(defaultValues);

  let countryList = Country.getAllCountries();
  const formRef = useRef();

  const onSubmit = async () => {
    emailjs
      .sendForm("service_teps6hv", "template_qlhq4ul", formRef.current, {
        publicKey: "hlt6RzRqqZQSNW3sz",
      })
      .then(
        () => {
          toast.success("Email sent successfully");
          reset();
        },
        (error) => {
          toast.error("Error sending email");
          console.log("FAILED...", error.text);
        }
      );
  };

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
    <div className="w-full flex flex-col gap-5 text-darkerBlue bg-white rounded-lg px-5 py-8 md:py-16 md:px-8 items-center">
      <h3 className="text-3xl font-bold">GET IN TOUCH</h3>
      <p>
        We use experience and profession to offer the best Solutions for our
        clients!
      </p>
      <form
        ref={formRef}
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-4"
      >
        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
          <div className="w-full flex flex-col gap-2">
            <label className="text-darkerBlue font-semibold">Name *</label>
            <Input
              {...register("name", { required: "Name is required" })}
              variant="flat"
              type="text"
              placeholder="Enter your name"
              aria-label="Enter your name"
            />
            {errors.name && (
              <span className="text-redColor text-sm">
                {errors?.name.message}
              </span>
            )}
          </div>
          <div className="w-full flex flex-col gap-2">
            <label className="text-darkerBlue font-semibold">Email *</label>
            <Input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email address",
                },
              })}
              variant="flat"
              type="email"
              placeholder="Enter your email"
              aria-label="Enter your email"
            />
            {errors.email && (
              <span className="text-redColor text-sm">
                {errors?.email.message}
              </span>
            )}
          </div>
        </div>
        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
          <div className="w-full flex flex-col gap-2">
            <label className="text-darkerBlue font-semibold">
              Phone Number *
            </label>
            <Input
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^\+\d{1,3}\s?\d{1,3}\s?\d{3,14}$/,
                  message: "Invalid phone number format (e.g. +123 456 789000)",
                },
              })}
              variant="flat"
              type="tel"
              placeholder="(e.g. +123 456 789000)"
              aria-label="Enter your phone number"
            />
            {errors.phone && (
              <span className="text-redColor text-sm">
                {errors?.phone.message}
              </span>
            )}
          </div>
          <div className="w-full flex flex-col gap-2">
            <label className="text-darkerBlue font-semibold">Country *</label>
            <Select
              placeholder="Select your country"
              aria-label="Select your country"
              {...register("country", { required: "Country is required" })}
            >
              {countryList &&
                countryList?.map((category) => (
                  <SelectItem
                    key={category.name}
                    value={category.name}
                    className="text-darkerBlue"
                  >
                    {category.name}
                  </SelectItem>
                ))}
            </Select>
            {errors.country && (
              <span className="text-redColor text-sm">
                {errors?.country.message}
              </span>
            )}
          </div>
        </div>
        <div className="w-full flex flex-col gap-2">
          <label className="text-darkerBlue font-semibold">Category *</label>
          <Select
            placeholder="Select category"
            aria-label="Select category"
            {...register("category", { required: "Category is required" })}
          >
            {categories &&
              categories.map((category) => (
                <SelectItem
                  key={category.label}
                  value={category.value}
                  className="text-darkerBlue"
                >
                  {category.label}
                </SelectItem>
              ))}
          </Select>
          {errors.category && (
            <span className="text-redColor text-sm">
              {errors?.category.message}
            </span>
          )}
        </div>
        <div className="w-full flex flex-col gap-2">
          <label className="text-darkerBlue font-semibold">Description *</label>
          <Textarea
            {...register("description", {
              required: "Description is required",
              minLength: {
                value: 10,
                message: "Description must be at least 10 characters",
              },
            })}
            aria-label="Enter your description"
            variant="flat"
            placeholder="Enter your description"
            classNames={{
              input: "resize-y min-h-[200px]",
            }}
          />
          {errors.description && (
            <span className="text-redColor text-sm">
              {errors?.description.message}
            </span>
          )}
        </div>
        <div className="w-full flex justify-center py-4">
          <Button
            type="submit"
            variant="solid"
            size="lg"
            color="primary"
            className="font-bold"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default GetInTouchForm;
