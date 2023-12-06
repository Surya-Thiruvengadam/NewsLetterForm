import React from "react";
import Iconlist from "./images/icon-list.svg";
import destop_image from "./images/illustration-sign-up-desktop.svg";
import FormInput from "./Form_input";
import mobile_icon from "./images/illustration-sign-up-mobile.svg";
function Form({ setcompound }) {
  const width = window.innerWidth;
  return (
    <section className="Form">
      <section>
        <h1>Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>

        <ul>
          <li>
            <img src={Iconlist} alt="Iconlist" />
            Product discovery and building what matters
          </li>
          <li>
            <img src={Iconlist} alt="Iconlist" />
            Measuring to ensure updates are a success
          </li>
          <li>
            <img src={Iconlist} alt="Iconlist" /> And much more!
          </li>
        </ul>
        <FormInput setcompound={setcompound} />
      </section>
      <figure>
        <img src={width <= 700 ? mobile_icon : destop_image} alt="view-page" />
      </figure>
    </section>
  );
}

export default Form;
