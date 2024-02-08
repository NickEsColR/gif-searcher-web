import React, { useState } from "react";

export const AddCategory = ({ setCategory }) => {
  const [inputValue, setInputValue] = useState("");
  const [hasError, setHasError] = useState(false);

  const searchGif = (e) => {
    e.preventDefault();
    if (inputValue === "") {
      setHasError(true);
      return;
    }
    setHasError(false);
    setCategory(inputValue);
    setInputValue("");
  };

  return (
    <div className="form-container">
      <form onSubmit={searchGif}>
        <input
          type="text"
          placeholder="search..."
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
        <input type="submit" value=""></input>
      </form>
      {hasError && <p className="error">El campo no puede estar vacio</p>}
    </div>
  );
};
