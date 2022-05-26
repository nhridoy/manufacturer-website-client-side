import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import interceptors from "../../utils/interceptors";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L3jTmFnAbomLPJ3bgFSgzAm7eU6WK87hZWLb5fqctopDJe09dEvRRVQD94grQcH1Y6o96A4PpkHMwqdSJbewZQl005IC9B8Wc"
);

const Payment = () => {
  const { id } = useParams();
  const [product, setProduct] = React.useState(null);
  const [order, setOrder] = React.useState(null);
  React.useEffect(() => {
    interceptors.get(`/orders/${id}`).then((res) => {
      setOrder(res.data);
      interceptors.get(`/products/${res.data.item_id}`).then((res) => {
        setProduct(res.data);
      });
    });
  }, []);

  return (
    <div className="grid grid-cols-2 gap-5 container mx-auto">
      <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden my-10">
        <div className="px-4 py-2">
          <h1 className="text-gray-900 font-bold text-3xl uppercase">
            {product?.name}
          </h1>
          <p className="text-gray-600 text-sm mt-1">{product?.description}</p>
        </div>
        <img
          className="h-56 w-full object-cover mt-2"
          src={product?.image}
          alt={product?.name}
        />
        <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
          <h1 className="text-gray-200 font-bold text-xl">
            Total: ${parseInt(order?.quantity) * parseInt(product?.price)}
          </h1>
        </div>
      </div>
      <div className="">
        <Elements stripe={stripePromise}>
          <CheckoutForm
            order={order}
            price={parseInt(order?.quantity) * parseInt(product?.price)}
          />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
