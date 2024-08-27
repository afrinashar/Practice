import { useState } from "react";
import itemsData from "./items.json";
import Button from "../assets/Button";
export const Cart = () => {
  const [items, setItems] = useState(itemsData.items);
  const [cart, setCart] = useState([]);
  const addCart = (itemId) => {
    const addItems = items.find((item) => item.id === itemId);
    const cartItem = cart.find((item) => item.id === itemId);
    if (cartItem) {
      const updatedCart = cart.map((item) => {
        if (item.id === itemId) {
          return { ...item, quantity: (item.quantity || 1) + 1 };
        }
        return item;
      });
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...addItems, quantity: 1 }]);
    }
  };
  const removeCart = (itemId) => {
    const remove = cart.filter((item) => item.id !== itemId);
    setCart(remove);
  };
  console.log(items);
  return (
    <>
      <div style={{ backgroundColor: "#C3FFC1" }}>
        <div>Cart</div>
        <ul>
          {items.map((item) => {
            return (
              <div key={item.id}>
                <h3>{item.name}</h3>{" "}
                <span style={{ color: "green", border: "green" }}>
                  💲{item.price}
                </span>
                <Button
                  style={{ backgroundColor: "#0E6705", color: "white" }}
                  onClick={() => addCart(item.id)}
                  text="Cart"
                />
              </div>
            );
          })}
        </ul>
        <h2>Cart</h2>
        <ul>
          {cart.map((item) => {
            return (
              <div key={item.id}>
                <h3>{item.name}</h3>{" "}
                <span style={{ color: "black", border: "green" }}>
                  💲{item.price}
                </span>
                <Button  style={{ backgroundColor: "#0E6705", color: "white" }} onClick={() => addCart(item.id)} text="Cart" />{" "}
                <Button  style={{ backgroundColor: "#0E6705", color: "white" }} onClick={() => removeCart(item.id)} text="🗑️" />
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
