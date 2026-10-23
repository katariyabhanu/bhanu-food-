import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function OrderConfirmation() {
  const { state } = useLocation();

  if (!state) {
    return (
      <div className="container py-5 text-center">
        <h2>Order details not found</h2>
        <Link to="/allproduct" className="btn btn-primary mt-3">
          Continue shopping
        </Link>
      </div>
    );
  }

  const { orderNumber, items, totalPrice, address } = state;

  return (
    <div className="container py-5">
      <div className="card mx-auto p-4" style={{ maxWidth: '600px' }}>
        <h1 className="text-success text-center">Order Confirmed!</h1>
        <p className="text-center">Thank you for your order.</p>

        <p><strong>Order number:</strong> {orderNumber}</p>

        <h5>Delivery address</h5>
        <p>
          {address.name}<br />
          {address.phone}<br />
          {address.street}, {address.area}<br />
          {address.city} - {address.pincode}
        </p>

        <hr />

        <h5>Items</h5>
        {items.map((item, index) => (
          <p key={`${item.id}-${index}`}>
            {item.title} × {item.quantity}
          </p>
        ))}

        <p><strong>Total: ₹{Number(totalPrice).toFixed(2)}</strong></p>

        <Link to="/allproduct" className="btn btn-primary mt-3 text-center">
          Continue shopping
        </Link>
      </div>
    </div>
  );
}
