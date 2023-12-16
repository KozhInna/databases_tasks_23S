import { useState } from "react";

function BubbleSortPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([]);
  const [sorted, setSorted] = useState(false);
  const [reset, setReset] = useState(false);

  function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
      for (let y = 0; y < array.length; y++) {
        if (array[y] > array[y + 1]) {
          let change = array[y];
          array[y] = array[y + 1];
          array[y + 1] = change;
        }
      }
    }
    return array;
  }
  function cleanOutput() {
    if (reset) {
      setOutput([]);
    }
  }
  return (
    <>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button
        onClick={() => {
          setOutput([...output, input]);
          setInput("");
          setReset(false);
        }}
      >
        Add number
      </button>
      <div>
        {!sorted && output.map((el, i) => <p key={i}>{el}</p>)}
        {sorted && output.map((el, i) => <p key={i}>{el}</p>)}
      </div>
      <button
        onClick={() => {
          setOutput(bubbleSort(output));
          setSorted(true);
          setReset(!reset);
          cleanOutput();
        }}
      >
        {reset ? "Clean" : "Sort"}
      </button>
    </>
  );
}
export default BubbleSortPage;
