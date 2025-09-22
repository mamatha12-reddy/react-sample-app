import { memo,useCallback,useState } from "react";

const Parent = () => {
  const [parent, setParent] = useState(0);
  const [child1, setChild1] = useState(0);
  const [child2, setChild2] = useState(0);

  const updateParent = () => {
    setParent(Math.floor(Math.random() * 100) + 1);
  };

  const updateChild1 = useCallback(() => {
    setChild1(Math.floor(Math.random() * 100) + 1);
  },[child1]);

  const updateChild2 = useCallback(() => {
    setChild2(Math.floor(Math.random() * 100) + 1);
  },[child2]);

  console.log("Parent rerendered");

  return (
    <>
      <p>Parent - {parent}</p>
      <button onClick={updateParent}>Update Parent</button>
      <Child1 value={child1} updateValue={updateChild1} />
      <Child2 value={child2} updateValue={updateChild2} />
    </>
  );
};

const Child1 = memo(({ value, updateValue }) => {
  console.log("Child 1 rerendered");

  return (
    <>
      <p>Child 1- {value}</p>
      <button onClick={updateValue}>Update Child 1</button>
    </>
  );
});

const Child2 = memo(({ value, updateValue }) => {
  console.log("Child 2 rerendered");

  return (
    <>
      <p>Child 2- {value}</p>
      <button onClick={updateValue}>Update Child 2</button>
    </>
  );
});
export default Parent