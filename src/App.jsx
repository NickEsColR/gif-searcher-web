import { useState } from "react";
import "./App.css";
import { AddCategory } from "./components/AddCategory";
import { DisplayGifs } from "./components/DisplayGifs";

function App() {
  const [category, setCategory] = useState("");

  return (
    <div className="App">
      <header>
        <h2>Gifs searcher</h2>
      </header>
      <AddCategory setCategory={setCategory} />
      <DisplayGifs category={category} />
      <footer>
        <p>
          Developed by <a href="https://github.com/NickEsColR">NickEsColR</a>
        </p>
        <p>&copy; 2024</p>
      </footer>
    </div>
  );
}

export default App;
