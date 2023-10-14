import React, { useState } from "react";
import Select from "./Select";
import Input from "./Input";
import { units } from "../units";

function App() {
  const [amount, setAmount] = useState(0)
  const [fromFactor, setFromFactor] = useState(1)
  const [toFactor, setToFactor] = useState(1)
  const [result, setResult] = useState(0);

  return (
    <>
      <div className="converter-form">
        <Input label="Amount" onChange={(event) => setAmount(event.target.value)} />

        <div className="row">
          <Select label="From" items={units} onChange={(event) => setFromFactor(event.target.value)} />
          <Select label="To" items={units} onChange={(event) => setToFactor(event.target.value)} />

          <button onClick={() => {
            console.log(amount, fromFactor, toFactor)
            setResult(amount * fromFactor / toFactor)
          }} >Convert</button>
        </div>
      </div>

      <div id="result">
        Result is: <span data-testid="result">{result}</span>
      </div>
    </>
  );
}

export default App;
