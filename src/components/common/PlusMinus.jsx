import React from "react";

import { checkChildProducts } from "../../functions/filteringFunc";

function PlusMinus({ data, id, isChecked }) {
  return checkChildProducts(data, id).length > 0 ? (
    isChecked ? (
      <span className="plus-minus">-</span>
    ) : (
      <span className="plus-minus">+</span>
    )
  ) : (
    <span className="plus-minus"></span>
  );
}

export default PlusMinus;
