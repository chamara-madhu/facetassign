export const addIsCheckedIsShow = (data) => {
  const arr = [];

  data.forEach((el) => {
    el.isChecked = false;
    el.isShow = false;

    arr.push(el);
  });

  return arr;
};
