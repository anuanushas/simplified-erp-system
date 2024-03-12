import React from "react";

const TrackingOrder = ({ order }) => {
  return (
    <div>
      <>
        {/* Button trigger modal */}
        <p
          className="text-primary"
          data-bs-toggle="modal"
          data-bs-target={"#exampleModal" + order.orderId}
          style={{ cursor: "pointer" }}
        >
          {order.customerName}
        </p>
        {/* Modal */}
        <div
          className="modal fade"
          id={"exampleModal" + order.orderId}
          tabIndex={-1}
          aria-labelledby={"exampleModalLabel" + order.orderId}
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1
                  className="modal-title fs-5"
                  id={"exampleModalLabel" + order.orderId}
                >
                  Tracking Order
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <h4>Customer Name: {order.customerName}</h4>
                <p>Order ID: {order.orderId}</p>
                <p>Order Date: {order.orderDate}</p>
                <h2>Status</h2>

                <div className="progress-stacked">
                  {order.status === "Shipped" ? (
                    <div
                      className="progress"
                      role="progressbar"
                      aria-label="Segment one"
                      aria-valuenow={15}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "33%" }}
                    >
                      <div className="progress-bar bg-primary">Shipped</div>
                    </div>
                  ) : (
                    <></>
                  )}

                  {order.status === "Processing" ? (
                    <>
                      <div
                        className="progress"
                        role="progressbar"
                        aria-label="Segment one"
                        aria-valuenow={15}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "33%" }}
                      >
                        <div className="progress-bar bg-primary">Shipped</div>
                      </div>
                      <div
                        className="progress"
                        role="progressbar"
                        aria-label="Segment two"
                        aria-valuenow={30}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "33%" }}
                      >
                        <div className="progress-bar bg-warning">
                          Processing
                        </div>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}

                  {order.status === "Delivered" ? (
                    <>
                      <div
                        className="progress"
                        role="progressbar"
                        aria-label="Segment one"
                        aria-valuenow={15}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "33%" }}
                      >
                        <div className="progress-bar bg-primary">Shipped</div>
                      </div>
                      <div
                        className="progress"
                        role="progressbar"
                        aria-label="Segment two"
                        aria-valuenow={30}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "33%" }}
                      >
                        <div className="progress-bar bg-warning">
                          Processing
                        </div>
                      </div>
                      <div
                        className="progress"
                        role="progressbar"
                        aria-label="Segment three"
                        aria-valuenow={20}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "33%" }}
                      >
                        <div className="progress-bar bg-success">Delivered</div>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                  {order.status === "Cancelled" ? (
                    <div
                      className="progress"
                      role="progressbar"
                      aria-label="Segment three"
                      aria-valuenow={20}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "100%" }}
                    >
                      <div className="progress-bar bg-danger">Cancelled</div>
                    </div>
                  ) : (
                    <></>
                  )}
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
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default TrackingOrder;
