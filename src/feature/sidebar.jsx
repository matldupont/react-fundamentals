import { NavLink } from "react-router-dom";
import { useCustomers } from "../hooks/customer";
import "./sidebar.css";

export const Sidebar = () => {
  const { customers } = useCustomers();
  return (
    <nav className="Sidebar">
      <ul>
        <li>
          <NavLink to={`/customers`}>
            {({ isActive }) =>
              isActive ? <strong>Customers</strong> : "Customers"
            }
          </NavLink>
        </li>
        <ul>
          {customers.map((customer) => (
            <li key={customer.id}>
              <NavLink to={`/customers/${customer.id}`}>
                {({ isActive }) =>
                  isActive ? (
                    <strong>{customer.account}</strong>
                  ) : (
                    customer.account
                  )
                }
              </NavLink>
            </li>
          ))}
        </ul>
        <li>
          <NavLink to={`/account`}>Account</NavLink>
        </li>
      </ul>
    </nav>
  );
};
