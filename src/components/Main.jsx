import React, { useState, useEffect } from "react";

import { categories } from "../assets/data/data_set";

import Content from "./Content";
import PlusMinus from "./common/PlusMinus";

import { checkChildProducts } from "../functions/filteringFunc";
import CheckBoxComp from "./common/CheckBoxComp";
import SelectAllComp from "./common/SelectAllComp";

function Comp() {
  const [data, setData] = useState(categories);

  useEffect(() => {
    setData(addIsChecked(categories));
  }, []);

  const addIsChecked = (data) => {
    const arr = [];

    data.forEach((el) => {
      el.isChecked = false;
      el.isShow = false;

      arr.push(el);
    });

    return arr;
  };

  const handleShowHide = (id) => {
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

    setData(filteredData);
  };

  const handleChecked = (id) => {
    const filteredData = data.filter((el) => {
      if (el.id === id) {
        if (el.isChecked) {
          el.isChecked = false;
          return el;
        } else {
          el.isChecked = true;

          data.filter((second) => {
            if (second.id === el.parent) {
              second.isChecked = true;

              data.filter((third) => {
                if (third.id === second.parent) {
                  third.isChecked = true;

                  data.filter((forth) => {
                    if (forth.id === third.parent) {
                      forth.isChecked = true;
                      data.filter((fifth) => {
                        if (fifth.id === forth.parent) {
                          fifth.isChecked = true;
                          return fifth;
                        } else {
                          return fifth;
                        }
                      });

                      setData(data);

                      return forth;
                    } else {
                      return forth;
                    }
                  });

                  setData(data);

                  return third;
                } else {
                  return third;
                }
              });

              setData(data);

              return second;
            } else {
              return second;
            }
          });

          setData(data);

          return el;
        }
      } else {
        return el;
      }
    });

    setData(filteredData);
  };

  const handleCheckedAllFollowers = (e, id) => {
    const filteredData = data.filter((el) => {
      if (el.id === id) {
        data.filter((second) => {
          if (second.parent === el.id) {
            second.isChecked = true;
            second.isShow = true;

            data.filter((third) => {
              if (third.parent === second.id) {
                third.isChecked = true;
                third.isShow = true;

                data.filter((forth) => {
                  if (forth.parent === third.id) {
                    forth.isChecked = true;
                    forth.isShow = true;

                    data.filter((fifth) => {
                      if (fifth.parent === forth.id) {
                        fifth.isChecked = true;
                        fifth.isShow = true;

                        return fifth;
                      } else {
                        return fifth;
                      }
                    });

                    setData(data);

                    return forth;
                  } else {
                    return forth;
                  }
                });

                setData(data);

                return third;
              } else {
                return third;
              }
            });

            setData(data);

            return second;
          } else {
            return second;
          }
        });

        setData(data);

        return el;
      } else {
        return el;
      }
    });

    if (!e.target.checked) {
      filteredData.filter((el) => {
        if (el.parent === id) {
          // el.isChecked = false;

          data.filter((second) => {
            if (second.parent === id) {
              second.isChecked = false;
              second.isShow = false;

              data.filter((third) => {
                if (third.parent === second.id) {
                  third.isChecked = false;
                  third.isShow = false;

                  data.filter((forth) => {
                    if (forth.parent === third.id) {
                      forth.isChecked = false;
                      forth.isShow = false;

                      data.filter((fifth) => {
                        if (fifth.parent === forth.id) {
                          fifth.isChecked = false;
                          fifth.isShow = false;

                          return fifth;
                        } else {
                          return fifth;
                        }
                      });

                      setData(data);

                      return forth;
                    } else {
                      return forth;
                    }
                  });

                  setData(data);

                  return third;
                } else {
                  return third;
                }
              });

              setData(data);

              return second;
            } else {
              return second;
            }
          });

          setData(data);

          return el;
        } else {
          return el;
        }
      });
    }

    filteredData.filter((el) => {
      if (el.id === id) {
        el.isChecked = true;

        data.filter((second) => {
          if (second.id === el.parent) {
            second.isChecked = true;

            data.filter((third) => {
              if (third.id === second.parent) {
                third.isChecked = true;

                data.filter((forth) => {
                  if (forth.id === third.parent) {
                    forth.isChecked = true;
                    data.filter((fifth) => {
                      if (fifth.id === forth.parent) {
                        fifth.isChecked = true;
                        return fifth;
                      } else {
                        return fifth;
                      }
                    });

                    setData(data);

                    return forth;
                  } else {
                    return forth;
                  }
                });

                setData(data);

                return third;
              } else {
                return third;
              }
            });

            setData(data);

            return second;
          } else {
            return second;
          }
        });

        setData(data);

        return el;
      } else {
        return el;
      }
    });

    setData(filteredData);
  };

  const isCheckedData = data.filter((el) => el.isChecked === true);

  return (
    <>
      <div className="sidebar">
        {checkChildProducts(data, "0").map((rootCat, i) => (
          <div key={i}>
            <PlusMinus
              data={data}
              id={rootCat.id}
              isChecked={rootCat.isChecked}
            />
            <CheckBoxComp
              id={rootCat.id}
              isChecked={rootCat.isChecked}
              name={rootCat.name}
              count={rootCat.count}
              handleChecked={handleChecked}
              handleShowHide={handleShowHide}
            />
            <div className={rootCat.isShow ? "layers" : "d-none"}>
              <SelectAllComp
                data={data}
                id={rootCat.id}
                count={rootCat.count}
                name={rootCat.name}
                handleCheckedAllFollowers={handleCheckedAllFollowers}
              />

              {checkChildProducts(data, rootCat.id).map((second, i) => (
                <div key={i}>
                  <PlusMinus
                    data={data}
                    id={second.id}
                    isChecked={second.isChecked}
                  />
                  <CheckBoxComp
                    id={second.id}
                    isChecked={second.isChecked}
                    name={second.name}
                    count={second.count}
                    handleChecked={handleChecked}
                    handleShowHide={handleShowHide}
                  />
                  <div className={second.isShow ? "layers" : "d-none"}>
                    <SelectAllComp
                      data={data}
                      id={second.id}
                      count={second.count}
                      name={second.name}
                      handleCheckedAllFollowers={handleCheckedAllFollowers}
                    />

                    {checkChildProducts(data, second.id).map((third, i) => (
                      <div key={i}>
                        <PlusMinus
                          data={data}
                          id={third.id}
                          isChecked={third.isChecked}
                        />
                        <CheckBoxComp
                          id={third.id}
                          isChecked={third.isChecked}
                          name={third.name}
                          count={third.count}
                          handleChecked={handleChecked}
                          handleShowHide={handleShowHide}
                        />
                        <div className={third.isShow ? "layers" : "d-none"}>
                          <SelectAllComp
                            data={data}
                            id={third.id}
                            name={third.name}
                            count={third.count}
                            handleCheckedAllFollowers={
                              handleCheckedAllFollowers
                            }
                          />
                          {checkChildProducts(data, third.id).map(
                            (forth, i) => (
                              <div key={i}>
                                <PlusMinus
                                  data={data}
                                  id={forth.id}
                                  isChecked={forth.isChecked}
                                />
                                <CheckBoxComp
                                  id={forth.id}
                                  isChecked={forth.isChecked}
                                  name={forth.name}
                                  count={forth.count}
                                  handleChecked={handleChecked}
                                  handleShowHide={handleShowHide}
                                />

                                <div
                                  className={forth.isShow ? "layers" : "d-none"}
                                >
                                  <SelectAllComp
                                    data={data}
                                    id={forth.id}
                                    name={forth.name}
                                    count={forth.count}
                                    handleCheckedAllFollowers={
                                      handleCheckedAllFollowers
                                    }
                                  />
                                  {checkChildProducts(data, forth.id).map(
                                    (fifth, i) => (
                                      <div key={i}>
                                        <PlusMinus
                                          data={data}
                                          id={fifth.id}
                                          isChecked={fifth.isChecked}
                                        />
                                        <CheckBoxComp
                                          id={fifth.id}
                                          isChecked={fifth.isChecked}
                                          name={fifth.name}
                                          count={fifth.count}
                                          handleChecked={handleChecked}
                                          handleShowHide={handleShowHide}
                                        />
                                      </div>
                                    )
                                  )}
                                </div>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="content-container">
        <Content isCheckedData={isCheckedData} allData={data} />
      </div>
    </>
  );
}

export default Comp;
