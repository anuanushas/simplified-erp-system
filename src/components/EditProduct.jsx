import React, { useContext, useState } from "react";
import { Context } from "../Context/ContextApi";

const EditProduct = ({ productsData }) => {
  const { setProducts } = useContext(Context);

  const [editProduct, setEditProduct] = useState(productsData);

  const handlerSubmit = (e) => {
    e.preventDefault();
    setProducts((prevProducts) => {
      return prevProducts.map((value) => {
        if (value.id === editProduct.id) {
          return {
            ...value,
            title: editProduct.title,
            category: editProduct.category,
            price: editProduct.price,
            stock: editProduct.stock,
          };
        }
        return value;
      });
    });
  };

  return (
    <>
      <>
        {/* Button trigger modal */}
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target={"#staticBackdrop" + productsData.id}
        >
          Edit
        </button>
        {/* Modal */}
        <div
          className="modal fade"
          id={"staticBackdrop" + productsData.id}
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex={-1}
          aria-labelledby={"staticBackdropLabel" + productsData.id}
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1
                  className="modal-title fs-5"
                  id={"staticBackdrop" + productsData.id}
                >
                  Modal title
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <form onSubmit={handlerSubmit}>
                <div className="modal-body">
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Product Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="productsName"
                      value={editProduct.title}
                      onChange={(e) =>
                        setEditProduct({
                          ...editProduct,
                          title: e.target.value,
                        })
                      }
                      aria-describedby="productsName" // Category
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Category
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="category"
                      aria-describedby="category"
                      value={editProduct.category}
                      onChange={(e) =>
                        setEditProduct({
                          ...editProduct,
                          category: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Price
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="price"
                      aria-describedby="price"
                      value={editProduct.price}
                      onChange={(e) =>
                        setEditProduct({
                          ...editProduct,
                          price: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Stock Quantity
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="stock"
                      aria-describedby="stock"
                      value={editProduct.stock}
                      onChange={(e) =>
                        setEditProduct({
                          ...editProduct,
                          stock: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                  >
                    Edit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default EditProduct;
