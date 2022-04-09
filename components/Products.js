import "./product.module.css";
import Button from "./button";

function Product(props) {

  const title = props.title;
  const description = props.description;
  const link = props.link;
  const image = props.image;

  return (
    <div
      className={
        "product-container w-full flex min-h-screen " +
        (props.right ? "flex-row-reverse": "flex-row")
      }
    >
      <div className="product-image w-full grid justify-items-center items-center">
        <img className="max-h-full" src={image} alt={title}  />
      </div>
      <div className="space m-7"></div>
      <div className="product-info w-full grid justify-items-center items-center">
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="text-2xl font-light  my-7">
            {description}
          </p>
          <Button text="Learn more"  ></Button>
        </div>
      </div>
    </div>
  );
}

export default Product;