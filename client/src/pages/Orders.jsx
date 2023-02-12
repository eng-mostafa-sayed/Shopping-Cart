import React, { useEffect } from "react";
import { fetchOrders } from "../store/actions/orders";
import { connect } from "react-redux";
import "../css/Orders.css";

function Orders(props) {
  useEffect(() => {
    props.fetchOrders();
  }, []);

  const { orders } = props;

  return (
    <div className="orders">
      <table>
        <thead>
          <tr>
            <th> id </th>
            <th> name </th>
            <th> email </th>
            <th> items </th>
            <th> total </th>
            <th> delivery Status </th>
          </tr>
        </thead>
        <tbody>
          {orders &&
            orders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.name}</td>
                <td>{order.email}</td>
                <td>
                  {order.products.map((p) => (
                    <p key={order.name}>
                      {p.title} , qty: {p.qty}
                    </p>
                  ))}
                </td>
                <td>{order.total}</td>
                <td
                  style={{
                    background: `${
                      order.deliveryStatus === "pending"
                        ? "#ffcb00"
                        : order.deliveryStatus === "done"
                        ? "#07e100"
                        : "#ec3a3a"
                    }`,
                    color: "black",
                    fontSize: "larger",
                  }}
                >
                  {order.deliveryStatus}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default connect(
  (state) => {
    return {
      orders: state.order.orders,
      cartItems: state.cart.cartItems,
    };
  },
  { fetchOrders }
)(Orders);
