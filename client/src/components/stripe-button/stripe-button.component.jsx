import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

import CustomButton from "../custom-button/custom-button.component";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51JPC3UHY05o3XMbinGXNLPfnoM7Wc5qNCpx6q6jKM9jgBinq15N2qHmkzAiiBPhYOEbNoPb1ksOEOjrvfoO8FlV900cGX4eT8d";

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
        alert("Payment successful");
      })
      .catch((error) => {
        console.log("Payment error: ", JSON.parse(error));
        alert(
          "There was an issue with your payment. Please ensure you use a valid credit card."
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    >
      <CustomButton>DAME LA PASTA</CustomButton>
    </StripeCheckout>
  );
};

export default StripeCheckoutButton;
