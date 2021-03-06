import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

import StripeCheckout from "react-stripe-checkout";

import { clearCart } from "../../redux/cart/cartAction";

const StripeButton = ({ price }) => {
  const dispatch = useDispatch();

  const priceForStripe = price * 100;

  const publishableKey =
    "pk_test_51KEd8UHr8H5tAp0PV46Zk4e2RwjhTg9yA9qXmWcOaatLOWmyIyzdP6niqyklpyK9pLalAKF2lU9Ejx7tFlVPNYnb00BYUi6qsb";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert("Payment successfull");
        dispatch(clearCart());
      })
      .catch((error) => {
        console.log("Payment Error", JSON.parse(error));
        alert(
          "There was an issue with your payment . Please sure you use the provided credit cart"
        );
      });
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      img="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
