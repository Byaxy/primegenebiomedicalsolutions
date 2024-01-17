import { useParams } from "react-router-dom";
const ProductDetailsPage = () => {
  const { id } = useParams();
  return (
    <div className="w-full text-xl font-semibold text-darkerBlue text-center">
      <h3>Product ID: {id}</h3>
    </div>
  );
};

export default ProductDetailsPage;
