import * as React from "react";

import { customers as customersData } from "../data/customer";

const getCustomers = () =>
  new Promise((resolve, reject) => {
    resolve(customersData);
  });

const CustomerContext = React.createContext();

const CustomerProvider = ({ children }) => {
  const [customers, setCustomers] = React.useState([]);

  const addNewCustomer = React.useCallback(
    (customer) => {
      setCustomers([customer, ...customers]);
    },
    [customers]
  );

  const fetchCustomers = React.useCallback(async () => {
    const updatedCustomers = await getCustomers();
    setCustomers(updatedCustomers);
  }, []);

  React.useEffect(() => {
    fetchCustomers();
  }, [fetchCustomers]);

  const value = React.useMemo(
    () => ({
      customers,
      addNewCustomer,
    }),
    [customers, addNewCustomer]
  );

  return (
    <CustomerContext.Provider value={value}>
      {children}
    </CustomerContext.Provider>
  );
};

const useCustomers = () => {
  const context = React.useContext(CustomerContext);

  if (!context) {
    throw new Error(
      "The useCustomers hook should be used in a child of CustomerProvider"
    );
  }

  return context;
};

export { CustomerProvider, useCustomers };
