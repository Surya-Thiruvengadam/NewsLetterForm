import { useState } from "react";
import "./App.css";
import Form from "./Form";
import SuccessState from "./SuccessState";

function App() {
  const [compound, setcompound] = useState(false);
  return (
    <>{!compound ? <Form setcompound={setcompound} /> : <SuccessState />}</>
  );
}

export default App;
