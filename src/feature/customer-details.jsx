import { useNavigate, useParams } from "react-router-dom";
import { useCustomers } from "../hooks/customer";

export const CustomerDetails = () => {
  const { customerId } = useParams();
  const navigate = useNavigate();
  const { customers } = useCustomers();

  const customer = customers.find((c) => c.id === customerId);
  if (!customer) {
    navigate("/customers");
  }

  return (
    <div>
      <h3>Customer Details</h3>
      {customer ? (
        <>
          <div>{customerId}</div>
          <div>{customer.account}</div>
          <div>{customer.email}</div>
        </>
      ) : null}
    </div>
  );
};
