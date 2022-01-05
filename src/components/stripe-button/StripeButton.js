import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;

  const publishableKey =
    "pk_test_51KEd8UHr8H5tAp0PV46Zk4e2RwjhTg9yA9qXmWcOaatLOWmyIyzdP6niqyklpyK9pLalAKF2lU9Ejx7tFlVPNYnb00BYUi6qsb";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successfully");
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
