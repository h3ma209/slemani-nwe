import "./product.module.css";
import Button from "./button";

function Product(props) {

  const title = props.title;
  const description = props.description;
  const link = props.link;
  const image = props.image;
  const toRight = props.right;

  return (
    <div
      className={
        "product-container w-full flex min-h-screen flex-col " +
        (toRight ? "md:flex-row-reverse": "md:flex-row")
      }
    >
      <div className="product-image w-full grid justify-items-center items-center">
        <img className="max-h-full" src={image} alt={title}  />
      </div>
      <div className="space m-7"></div>
      <div className="product-info w-full grid justify-items-center items-center">
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold">{title}</h1>
          <p className="text-xl font-light  my-7">
            {description}
          </p>
          <Button text="Learn more" link={props.link}  ></Button>
        </div>
      </div>
    </div>
  );
}

export default Product;
