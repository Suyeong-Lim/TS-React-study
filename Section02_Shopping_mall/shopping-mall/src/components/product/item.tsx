import { Product } from "../../types";

const ProductItem = ({
  category,
  description,
  id,
  image,
  price,
  rating,
  title,
}: Product) => {
  return <div>{category}</div>;
};

export default ProductItem;
