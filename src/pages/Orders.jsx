import React from "react";
import { useContext } from "react";
import { Context } from "../Context/ContextApi";
import OrdersList from "../components/OrdersList";
import Pagination from "../components/Pagination";

const Orders = () => {
  const [skip, setSkip] = React.useState(0);
  const { ordersData, setOrdersData } = useContext(Context);
  const orderListData = ordersData.slice(skip, skip + 10);

  return (
    <div className="container mt-3">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">S.N</th>
            <th scope="col"> Order ID</th>
            <th scope="col">Customer name</th>
            <th scope="col">Order date</th>
            <th scope="col">Status</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {orderListData.map((order, index) => (
            <OrdersList
              order={order}
              index={index}
              key={order.orderId}
              skip={skip}
            />
          ))}
        </tbody>
      </table>
      <Pagination skip={skip} setSkip={setSkip} pageCount={ordersData.length} />
    </div>
  );
};

export default Orders;
