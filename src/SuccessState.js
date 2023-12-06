import React from "react";
import iconsuccess from "./images/icon-success.svg";
function SuccessState() {
  return (
    <section className="success">
      <img src={iconsuccess} alt="success state" />
      <h1>Thanks for subscribing!</h1>
      <p>
        A confirmation email has been sent to <b>ash@loremcompany.com.</b>Please open
        it and click the button inside to confirm your subscription.
      </p>
      <button>Dismiss message</button>
    </section>
  );
}

export default SuccessState;
