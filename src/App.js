import * as React from "react";
import "./App.css";
import { Header } from "./components";
import { CustomerForm } from "./feature/customer-form";
import { StoreForm } from "./feature/store-form";

function App() {
  return (
    <div>
      <Header title="My new title" />

      <main className="App-main">
        <CustomerForm />
        <StoreForm />
      </main>
    </div>
  );
}

export default App;
