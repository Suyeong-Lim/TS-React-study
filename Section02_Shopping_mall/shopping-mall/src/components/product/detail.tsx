import { Product } from "types";

const Productdetail = ({
  item: {
    category,
    title,
    image,
    description,
    price,
    rating: { rate },
  },
}: {
  item: Product;
}) => {
  return (
    <div className="product-detail">
      <span className="product-detail__category">{category}</span>
      <p className="product-detail__title">{title}</p>
      <img className="product-detail__image" src={image} />
      <p className="product-detail__description">{description}</p>
    </div>
  );
};

export default Productdetail;
