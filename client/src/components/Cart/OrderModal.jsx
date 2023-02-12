import React, { Fragment } from "react";
import Modal from "react-modal";
const OrderModal = (props) => {
  const { order, closeModal, cartItems } = props;
  return (
    <Fragment>
      {order && (
        <Modal isOpen={Boolean(order)} onRequestClose={closeModal}>
          <div className="order-info">
            <span className="close-icon" onClick={closeModal}>
              {" "}
              &times;{" "}
            </span>
            <p className="alert-success"> order done success </p>
            <table>
              <tr>
                <td>Name:</td>
                <td>{order.name}</td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>{order.email}</td>
              </tr>
              <tr>
                <td>Total:</td>
                <td>
                  {cartItems.reduce((a, p) => {
                    return a + p.price * p.qty;
                  }, 0)}
                </td>
              </tr>
              <tr>
                <td>Selected Items:</td>
                <td>
                  {cartItems.map((p) => (
                    <div className="cart-data">
                      <p>Number of this products: {p.qty}</p>
                      <p>Title of products: {p.title}</p>
                    </div>
                  ))}
                </td>
              </tr>
            </table>
          </div>
        </Modal>
      )}
    </Fragment>
  );
};

export default OrderModal;
