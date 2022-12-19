import { useState } from "react";
import "./styles.css";

export default function App() {
  const [data, setData] = useState({});

  function fetchFoxImage() {
    fetch("https://randomfox.ca/floof/").then((response) =>
      response.json().then(setData)
    );
  }

  return (
    <div className="App">
      <header>
        <div>Foxes</div>
        <img
          id="headerPhoto"
          src="https://i.pinimg.com/originals/00/72/22/007222277c6494f09d62115ad6cd834c.png"
          alt="Fox Illustration"
        />
      </header>
      <button onClick={fetchFoxImage}>Get Image</button>
      <div id="photo">
        {data.image && (
          <img src={data?.image} alt="Cute Fox!" />
        )}
      </div>
    </div>
  );
}
