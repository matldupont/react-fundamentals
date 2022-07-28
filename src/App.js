import * as React from "react";
import "./App.css";
import { Header } from "./feature/header";
import { CustomerForm } from "./feature/customer-form";
import { CustomerList } from "./feature/customer-list";
import { Sidebar } from "./feature/sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CustomerPage } from "./feature/customer-page";
import { CustomerDetails } from "./feature/customer-details";

function App() {
  return (
    <BrowserRouter>
      <div className="Layout">
        <Header title="Teh Customers" />
        <div className="LayoutContent">
          <Sidebar />
          <main className="App-main">
            <Routes>
              <Route path="/customers" element={<CustomerPage />}>
                <Route path="/customers/" element={<CustomerList />}>
                  <Route
                    path="/customers/:customerId"
                    element={<CustomerDetails />}
                  />
                </Route>
                <Route path="/customers/new" element={<CustomerForm />} />
              </Route>
              <Route path="/account" element={<div>Account Page</div>} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
