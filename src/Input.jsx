import React from "react";

const Input = ({ colorValue, setColorValue }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="input">
        <label htmlFor="color">Añade nombres de colores:</label>
        <input
          type="text"
          id="color"
          placeholder="Tu color"
          required
          value={colorValue}
          onChange={(e) => setColorValue(e.target.value)}
        />
      </div>
    </form>
  );
};

export default Input;
