import { v4 as uuidv4 } from "uuid";

export const generateId = () => {
  return uuidv4().split("-")[0];
};

export function getAllProducts(data) {
  let productsArray = [];

  function recursiveMap(arr) {
    arr.forEach((item) => {
      if (item.products) {
        productsArray = [...productsArray, ...item.products];
      }
      if (item.sections) {
        recursiveMap(item.sections);
      }
    });
  }

  recursiveMap(data);
  return productsArray;
}

export function getProductById(id, allProducts) {
  return allProducts.find((product) => product.id === id);
}

export const toastStyles = {
  success: "bg-green-500",
  error: "bg-red-600",
  info: "bg-blue-500",
  warning: "bg-orange-400",
  default: "bg-indigo-600",
  dark: "bg-white-600 font-gray-300",
};
