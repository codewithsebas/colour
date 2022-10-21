import React from "react";

const Square = ({colorValue}) => {
  return (
    <section className="square" style={{ backgroundColor: colorValue }}>
    <p>{colorValue ? colorValue : "Sin valor de color"}</p>
    </section>
  );
};

Square.defaultProps = {
    colorValue: 'Sin valor de color'
}

export default Square;
