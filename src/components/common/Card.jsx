import React from "react";

function Card({ name, count }) {
  return (
    <div className="product-card">
      <span className="count">{count}</span>
      <p className="name">{name}</p>
    </div>
  );
}

export default Card;
