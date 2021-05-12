export const isShowFunc = (data, id) => {
  const filteredData = data.filter((el) => {
    if (el.id === id) {
      if (el.isShow) {
        el.isShow = false;
        return el;
      } else {
        el.isShow = true;
        return el;
      }
    } else {
      return el;
    }
  });

  return filteredData;
};

export const checkChildProducts = (isCheckedData, id) => {
  const childProducts = isCheckedData.filter((el) => el.parent === id);
  return childProducts;
};
