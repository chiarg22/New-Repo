import { useEffect, useMemo, useState } from "react";

const WithoutUseMemoExample = () => {
  console.log("1. Started");
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("7. Component mounted successful");
  }, []);

  useEffect(() => {
    console.log("8. Counter value changed: ", counter);
  }, [counter]);

  console.log("2: Loop started");
  let sum = 0;
  for (let i = 1; i < 5; i++) {
    console.log("3: Inside Loop i: ", i);
    sum += 1;
  }

  const newCounterVal = useMemo(() => {
    return counter + 1;
  }, [counter]);

  console.log("4.0 newCounterVal with useMemo: ", newCounterVal);

  console.log("4. Loop completed: ", sum);

  console.log("5. Loading JSX");

  const renderJSX = () => {
    console.log("6. Rendering JSX");
    return <p>Rendering from renderJSX</p>;
  };

  return (
    <div>
      <p>Sum {sum}</p>
      <p>Counter {counter}</p>
      {renderJSX()}
      <button onClick={() => setCounter((val) => val + 1)}>Increment</button>
    </div>
  );
};

export default WithoutUseMemoExample;

// when the component is mounting the sync code is executing syncly as usememo is
//sync so sync code will execute first but
// in the case of useeffect it will work after rendering
// and then the mounting is completed
// when we click any button it will re render
// it will work same but
//usmememo will work first and useeffect will work after the re rendering of the component like
// of the return () of WithoutUseMemoExample
//usememo allows us to remove the usage of extra state as it was done in 2oct.jsx
//
