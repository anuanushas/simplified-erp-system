import React, { useContext } from "react";
import { Context } from "../Context/ContextApi";
import TrackingOrder from "./TrackingOrder";

const OrdersList = ({ order, index, skip }) => {
  const { ordersData, setOrdersData } = useContext(Context);
  const [status, setStatus] = React.useState(order.status);

  const statusClass = (status) => {
    if (status === "Shipped") return "bg-primary text-white";
    else if (status === "Processing") {
      return "bg-warning text-dark";
    } else if (status === "Cancelled") {
      return "bg-danger text-white";
    } else if (status === "Delivered") {
      return "bg-success text-white";
    } else return "";
  };

  const statusUpdate = (newStatus, id) => {
    setOrdersData((prevOrdersData) => {
      return prevOrdersData.map((order) => {
        if (order.orderId === id) {
          {
            return {
              ...order,
              status: newStatus,
            };
          }
        }
        return order;
      });
    });
    setStatus(newStatus);
  };
  const OrderDelete = (id) => {
    setOrdersData(ordersData.filter((order) => order.orderId !== id));
  };
  return (
    <>
      <tr key={order.orderId}>
        <td>{index + 1 + skip}</td>
        <td>{order.orderId}</td>

        <td>{<TrackingOrder order={order} />}</td>
        <td>{order.orderDate}</td>
        <td>
          <select
            className={statusClass(order.status) + " form-select"}
            aria-label="Default select example"
            value={status}
            onChange={(e) => statusUpdate(e.target.value, order.orderId)}
          >
            <option value={"Shipped"}>Shipped</option>
            <option value={"Processing"}>Processing</option>
            <option value={"Cancelled"}>Cancelled</option>
            <option value={"Delivered"}>Delivered</option>
          </select>
        </td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => OrderDelete(order.orderId)}
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default OrdersList;
