import React, { useState, useEffect } from "react";
import Card from "./common/Card";

function ProductContainer({ name, count }) {
  const [noOfProd, setNoOfProd] = useState([]);

  useEffect(() => {
    if (count) {
      const noOfProd = [];

      for (let i = 0; i < count; i++) {
        noOfProd.push(i + 1);
      }
      setNoOfProd(noOfProd);
    }
  }, [name, count]);

  return noOfProd.map((el, i) => <Card key={i} count={i + 1} name={name} />);
}

export default ProductContainer;
