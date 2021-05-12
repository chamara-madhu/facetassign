import React from "react";

import { checkChildProducts } from "../../functions/filteringFunc";

function SelectAllComp({ data, id, name, count, handleCheckedAllFollowers }) {
  const getCount = (id) => {
    let arr = [];
    data.filter((el) => {
      if (el.id === id) {
        data.filter((second) => {
          if (second.parent === el.id) {
            if (second.isChecked === true) {
              arr = [...arr, second];
            }
          }

          return false;
        });
      }

      return false;
    });

    let noOfProducts = 0;

    if (arr.length > 0) {
      noOfProducts = arr.reduce((currentValue, nextValue) => {
        return currentValue + nextValue.count;
      }, 0);
    }
    return noOfProducts;
  };

  return checkChildProducts(data, id).length > 1 ? (
    <div>
      <span className="plus-minus"></span>
      <input
        id={name}
        type="checkbox"
        checked={getCount(id) === count ? true : false}
        onChange={(e) => handleCheckedAllFollowers(e, id)}
      />
      <label htmlFor={name}>Select All</label>
    </div>
  ) : null;
}

export default SelectAllComp;
