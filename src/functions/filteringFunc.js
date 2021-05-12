export const checkChildProducts = (isCheckedData, id) => {
  const childProducts = isCheckedData.filter((el) => el.parent === id);
  return childProducts;
};
