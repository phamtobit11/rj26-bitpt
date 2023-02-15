import React, { useState } from "react";

function Bt1() {
  const [inputNumber, setInputNumber] = useState<number>();
  const [results, setResults] = useState<number | undefined>();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);
    setInputNumber(parseInt(e.target.value));
    // console.log(typeof InputNumber);
  };
  const handleClick = () => {
    console.log("clicked");
    // tách phần xử lý bt1 => function
    let res = bt5(inputNumber);
    inputNumber && setResults(res);
  };
  const bt1 = (inputNumber : number | undefined) => {
    return inputNumber ? inputNumber * 2 : undefined;
  };

  const bt3 = (inputNumber : number | undefined) => {
    return inputNumber ? Math.floor((inputNumber - 1) / 2) : undefined;
  };

  const bt5 = (inputNumber : number | undefined) => {
    return inputNumber ? inputNumber * 2 : undefined;
  };


  return (
    <>
      <input
        value={inputNumber ? inputNumber : ""}
        onChange={(e) => handleChange(e)}
        type="text"
      />
      <button onClick={handleClick}>Run</button>
      {results}
    </>
  );
}

export default Bt1;
