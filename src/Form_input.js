import React, { useState } from "react";
import SubmitButton from "./Submit_Button";

function FormInput({ setcompound }) {
  const [inputvalue, setinputvalue] = useState({
    input_failed: false,
    inputstring: "",
  });

  const valuehandler = (e) => {
    setinputvalue((val) => {
      return { input_failed: false, inputstring: e.target.value };
    });
  };

  const fail = {
    backgroundColor: "rgba(247, 100, 100, 0.283)",
    color: "red",
    border: "1px solid rgba(247, 100, 100, 0.283)",
  };

  const errormess = {
    display: "inline-block",
    color: "red",
    float: "right",
  };

  return (
    <form>
      <span style={inputvalue.input_failed ? errormess : { display: "none" }}>
        valid email address
      </span>
      <label htmlFor="email"> Email address </label> <br />
      <input
        id="email"
        name="email"
        type="email"
        placeholder="email@company.com"
        onChange={(e) => valuehandler(e)}
        style={inputvalue.input_failed ? fail : {}}
        value={inputvalue.inputstring}
      />
      <SubmitButton
        entervalue={inputvalue}
        setinput={setinputvalue}
        setcompound={setcompound}
      />
    </form>
  );
}

export default FormInput;
