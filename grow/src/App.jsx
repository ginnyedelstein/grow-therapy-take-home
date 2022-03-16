import { Wrapper, Title } from "./App.css.js";
import Filters from "./components/Filters";
import Results from "./components/Results";
import React, { useState } from "react";

const App = () => {
  const getDate = () => {
    var utc = new Date().toJSON().slice(0, 8);
    return String(utc + parseInt(new Date().toJSON().slice(8, 10) - 1));
  };
  const [date, setDate] = useState(getDate);
  const [result, setResult] = useState("");

  return (
    <Wrapper>
      <Title>Grow Take Home</Title>
      <Filters setDate={setDate} date={date} setResult={setResult} />
      <Results result={result} />
    </Wrapper>
  );
};

export default App;
