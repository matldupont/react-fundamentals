import { Outlet } from "react-router-dom";

export const CustomerPage = () => {
  return (
    <div>
      <h2>Customers</h2>
      <Outlet />
    </div>
  );
};
