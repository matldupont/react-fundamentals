import * as React from "react";
import "./App.css";
import { Header } from "./feature/header";
import { CustomerForm } from "./feature/customer-form";
import { CustomerList } from "./feature/customer-list";

function App() {
  return (
    <div>
      <Header title="Teh Customers" />

      <main className="App-main">
        <CustomerForm />
        <CustomerList />
      </main>
    </div>
  );
}

export default App;
