import React from "react";

const AddProduct = ({ addProduct, product, setProduct }) => {
  return (
    <>
      <>
        {/* Button trigger modal */}
        <button
          type="button"
          className="btn btn-success"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Add Products
        </button>
        {/* Modal */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Add products
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <form onSubmit={addProduct}>
                <div className="modal-body">
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Product Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="productsName"
                      value={product.title}
                      onChange={(e) =>
                        setProduct({ ...product, title: e.target.value })
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
                      value={product.category}
                      onChange={(e) =>
                        setProduct({ ...product, category: e.target.value })
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
                      value={product.price}
                      onChange={(e) =>
                        setProduct({ ...product, price: e.target.value })
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
                      value={product.stock}
                      onChange={(e) =>
                        setProduct({ ...product, stock: e.target.value })
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
                    Add Products
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

export default AddProduct;
