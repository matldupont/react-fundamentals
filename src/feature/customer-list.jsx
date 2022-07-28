import { Link, Outlet } from "react-router-dom";
import { useCustomers } from "../hooks/customer";

const CustomerList = () => {
  const { customers } = useCustomers();
  return (
    <div>
      <Link to="/customers/new">Create Customer</Link>
      <ul>
        {customers.map((customer, idx) => (
          <li key={`${idx}-${customer.email}`} style={{ marginBottom: "1rem" }}>
            <Link to={`/customers/${customer.id}`}>
              <div>{customer.account}</div>
            </Link>
            <div>{customer.email}</div>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
};

export { CustomerList };
