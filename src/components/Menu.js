import React from "react";

const Menu = () => {
  const menuItems = [
    { id: 1, name: "Hamburger", price: 100 },
    { id: 2, name: "Pizza", price: 150 },
    { id: 3, name: "Kola", price: 30 }
  ];

  return (
    <div>
      <h2>Menü</h2>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price}₺
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
