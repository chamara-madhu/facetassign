import React from "react";
import ProductContainer from "./ProductContainer";

import { checkChildProducts } from "../functions/filteringFunc";

function Content({ isCheckedData, allData }) {
  return (
    <div className="content">
      {checkChildProducts(isCheckedData, "0").map((rootCat, i) => (
        <div key={i}>
          <h3 className="heading root-heading">{rootCat.name}</h3>
          {checkChildProducts(isCheckedData, rootCat.id).length > 0 ? (
            <div className="layers">
              {checkChildProducts(isCheckedData, rootCat.id).map(
                (second, i) =>
                  second.count > 0 && (
                    <div key={i}>
                      <h4 className="heading second-heading">{second.name}</h4>
                      {checkChildProducts(isCheckedData, second.id).length >
                      0 ? (
                        <div className="layers">
                          {checkChildProducts(isCheckedData, second.id).map(
                            (third, i) => (
                              <div key={i}>
                                <h5 className="heading third-heading">
                                  {third.name}
                                </h5>
                                {checkChildProducts(isCheckedData, third.id)
                                  .length > 0 ? (
                                  <div className="layers">
                                    {checkChildProducts(
                                      isCheckedData,
                                      third.id
                                    ).map((forth, i) => (
                                      <div key={i}>
                                        <h6 className="heading forth-heading">
                                          {forth.name}
                                        </h6>
                                        {checkChildProducts(
                                          isCheckedData,
                                          forth.id
                                        ).length > 0 ? (
                                          <div className="layers">
                                            {checkChildProducts(
                                              isCheckedData,
                                              forth.id
                                            ).map((fifth, i) => (
                                              <div key={i}>
                                                <p className="heading fifth-heading">
                                                  {fifth.name}
                                                </p>
                                                <div className="prod-container">
                                                  <ProductContainer
                                                    count={fifth.count}
                                                    name={fifth.name}
                                                  />
                                                </div>
                                              </div>
                                            ))}
                                          </div>
                                        ) : checkChildProducts(
                                            allData,
                                            forth.id
                                          ).length > 0 ? (
                                          <p className="no-product-message">
                                            No Products.
                                          </p>
                                        ) : (
                                          <div className="prod-container">
                                            <ProductContainer
                                              count={forth.count}
                                              name={forth.name}
                                            />
                                          </div>
                                        )}
                                      </div>
                                    ))}
                                  </div>
                                ) : checkChildProducts(allData, third.id)
                                    .length > 0 ? (
                                  <p className="no-product-message">
                                    No Products.
                                  </p>
                                ) : (
                                  <div className="prod-container">
                                    <ProductContainer
                                      count={third.count}
                                      name={third.name}
                                    />
                                  </div>
                                )}
                              </div>
                            )
                          )}
                        </div>
                      ) : checkChildProducts(allData, second.id).length > 0 ? (
                        <p className="no-product-message">No Products.</p>
                      ) : (
                        <div className="prod-container">
                          <ProductContainer
                            count={second.count}
                            name={second.name}
                          />
                        </div>
                      )}
                    </div>
                  )
              )}
            </div>
          ) : (
            <p className="no-product-message">No Products.</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default Content;
