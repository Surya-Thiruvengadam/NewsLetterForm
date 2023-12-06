import React from "react";

function SubmitButton({ entervalue, setinput, setcompound }) {
  const handlerfunction = (e) => {
    e.preventDefault();
    const string = entervalue.inputstring.toString();
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValidEmail = emailPattern.test(string);
    if (isValidEmail) {
      setcompound(true);
      console.log("its working");
    } else {
      setinput((e) => {
        return { ...e, input_failed: true };
      });
    }
  };
  return (
    <>
      <input
        type="submit"
        value=" Subscribe to monthly newsletter"
        onClick={(e) => handlerfunction(e)}
      />
    </>
  );
}

export default SubmitButton;
