import { useState } from "react";
import styles from "./BubbleSort.module.css";
import Header from "../Components/Header";

function BubbleSort() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([]);
  const [sorted, setSorted] = useState(false);
  const [reset, setReset] = useState(false);

  function bubbleSort(array) {
    const newArray = array.filter((el) => el !== "");
    for (let i = 0; i < newArray.length; i++) {
      for (let y = 0; y < newArray.length; y++) {
        if (parseInt(newArray[y]) > parseInt(newArray[y + 1])) {
          let change = newArray[y];
          newArray[y] = newArray[y + 1];
          newArray[y + 1] = change;
        }
      }
    }
    return newArray;
  }
  function cleanOutput() {
    if (reset) {
      setOutput([]);
    }
  }
  console.log(output);
  console.log(input);
  return (
    <>
      <main>
        <Header />
        <div className={styles.container}>
          <h1> Bubble sort </h1>
          <p>Enter numbers and sort them from smallest to largest</p>
          <input value={input} onChange={(e) => setInput(e.target.value)} />
          <button
            onClick={() => {
              if (input !== "")
                setOutput(!isNaN(input) ? [...output, input] : [...output, ""]);
              setInput("");
              setReset(false);
            }}
          >
            Add number
          </button>
          <div className={styles.numbersBox}>
            {!sorted &&
              output.map((el, i) => (
                <p className={styles.numbers} key={i}>
                  {el}
                </p>
              ))}
            {sorted &&
              output.map((el, i) => (
                <p key={i} className={styles.numbers}>
                  {el}
                </p>
              ))}
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
        </div>
      </main>
    </>
  );
}
export default BubbleSort;
