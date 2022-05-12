import * as React from "react";
import { useCustomers } from "../hooks/customer";

const UserMenuItem = () => {
  const { customers } = useCustomers();
  return (
    <li>
      <span>Customers</span>
      <span>{customers?.length || 0}</span>
    </li>
  );
};

const UserMenu = () => (
  <div>
    <button className="Nav-menu-button">Menu</button>
    <ul className="Nav-menu">
      <li>Account</li>
      <UserMenuItem />
    </ul>
  </div>
);

export { UserMenu };
