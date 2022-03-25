import "./product.module.css";

function Product(props) {
  return (
    <div
      className={
        "product-container w-full flex min-h-screen " +
        (props.right ? "flex-row-reverse": "flex-row")
      }
    >
      <div className="product-image w-full grid justify-items-start items-center">
        <img className="max-h-full" src={props.image} alt="product" />
      </div>
      <div className="space m-6"></div>
      <div className="product-info w-full grid justify-items-start items-center">
        <div>
          <h1 className="text-5xl font-bold">Costadoro olive oil </h1>
          <p className="text-2xl font-light  my-7">
            One of the italy’s finest and high quality olive oil, the unfiltered
            extra virgin olive oil offers high neutrients
          </p>
        </div>
      </div>
    </div>
  );
}

export default Product;
