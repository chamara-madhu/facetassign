import React from "react";

function CheckBoxComp({
  isChecked,
  id,
  name,
  count,
  handleChecked,
  handleShowHide,
}) {
  return (
    <>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => handleChecked(id)}
      />{" "}
      <span
        onClick={() => handleShowHide(id)}
        className={isChecked ? "font-weight-bold" : ""}
      >
        {name}
      </span>{" "}
      <span className="count">{count}</span>
    </>
  );
}

export default CheckBoxComp;
