import { useCustomers } from "../hooks/customer";

const CustomerList = () => {
  const { customers } = useCustomers();
  return (
    <div>
      <h2>Customers</h2>
      <ul>
        {customers.map((customer, idx) => (
          <li key={`${idx}-${customer.email}`} style={{ marginBottom: "1rem" }}>
            <div>{customer.account}</div>
            <div>{customer.email}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { CustomerList };
