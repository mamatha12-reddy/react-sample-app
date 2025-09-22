import { useState,memo } from "react";

const Parent = () => {
  const [parent, setParent] = useState(0);
  const [child1, setChild1] = useState(0);
  const [child2, setChild2] = useState(0);

  console.log("Parent rerendered");
  const updateParent = () => {
    setParent(Math.floor(Math.random() * 100) + 1);
  };

  const updateChild1 = () => {
    setChild1(Math.floor(Math.random() * 100) + 1);
  };

  const updateChild2 = () => {
    setChild2(Math.floor(Math.random() * 100) + 1);
  };
  return (
    <>
      <p>Parent - {parent}</p>
      <button onClick={updateParent}>Update Parent</button>
      <button onClick={updateChild1}>Update Child 1</button>
      <button onClick={updateChild2}>Update Child 2</button>
      <Child1 value={child1} />
      <Child2 value={child2} />
    </>
  );
};

const Child1 = memo(({ value }) => {
  console.log("Child 1 rerendered");

  return (
    <p>Child 1 - {value}</p>
  );
});

const Child2 = memo(({ value }) => {
  console.log("Child 2 rerendered");

  return (
    <p>Child 2- {value}</p>
  );
});
export default Parent