"use client"
import React, { useState } from 'react';
import Image from "next/image";
import { FaTrash } from "react-icons/fa";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Classic Burger",
      image: "/burger2.jpg",
      price: 7.95,
      quantity: 1,
    },
  ]);

  const handleRemove = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleQuantityChange = (id, delta) => {
    setCartItems(cartItems.map(item =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + delta) }
        : item
    ));
  };

  return (
    <>
      <section
        className="section5 h-[500px] w-[100%] pt-40 pb-40"
        style={{
          background: `url('/burger-4.jpg')`,
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h1 className={"text-center text-white bold"}>CART</h1>
      </section>

      <section className={"cartPage py-5"}>
        <div className="container">
          <h4 className={"text-2xl bold"}>Your Cart</h4>
          <p>
            There {cartItems.length === 1 ? "is" : "are"}{" "}
            <span className={"text-red-500"}>{cartItems.length}</span> product{cartItems.length > 1 && "s"} in your cart.
          </p>

          <div className="row">
            <div className="col-md-8">
              <div className="table-responsive">
                <table className="table">
                  <thead className="thead-light">
                    <tr>
                      <th>Product</th>
                      <th>Unit Price</th>
                      <th>Quantity</th>
                      <th>Sub Total</th>
                      <th>Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map(item => (
                      <tr key={item.id}>
                        <td className="flex items-center gap-3">
                          <div className="imgWrap overflow-hidden">
                            <Image src={item.image} alt={item.name} width={80} height={80} />
                          </div>
                          <div className="info">
                            <h3>{item.name}</h3>
                          </div>
                        </td>
                        <td>${item.price.toFixed(2)}</td>
                        <td>
                          <div className="flex items-center gap-2">
                            <button
                              className="px-2 py-1 bg-gray-200"
                              onClick={() => handleQuantityChange(item.id, -1)}
                            >
                              -
                            </button>
                            <input
                              type="text"
                              readOnly
                              value={item.quantity}
                              className="w-12 text-center border border-gray-300"
                            />
                            <button
                              className="px-2 py-1 bg-gray-200"
                              onClick={() => handleQuantityChange(item.id, 1)}
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td>${(item.price * item.quantity).toFixed(2)}</td>
                        <td>
                          <button onClick={() => handleRemove(item.id)} className="text-red-500">
                            <FaTrash />
                          </button>
                        </td>
                      </tr>
                    ))}
                    {cartItems.length === 0 && (
                      <tr>
                        <td colSpan={5} className="text-center py-4">
                          Your cart is empty.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* You can add a summary or checkout column here */}
            <div className="col-md-4">
              <div className="border p-4 rounded shadow-sm">
                <h5 className="text-xl font-bold mb-4">Order Summary</h5>
                <p className="mb-2">
                  Total: $
                  {cartItems
                    .reduce((total, item) => total + item.price * item.quantity, 0)
                    .toFixed(2)}
                </p>
                <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 w-full">
                  Proceed to Checkout
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
