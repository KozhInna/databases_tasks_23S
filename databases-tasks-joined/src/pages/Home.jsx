import { Link } from "react-router-dom";
import styles from "./Home.module.css";
function Home() {
  return (
    <div className={styles.container}>
      <Link to="/palindrome">Palindrome app</Link>
      <Link to="/bubble">Bubble Sort app</Link>
      <Link to="/stackdata">Stack Data app</Link>
    </div>
  );
}

export default Home;
