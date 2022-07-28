import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input, Button, Form } from "../components";
import { useCustomers } from "../hooks/customer";

const CustomerForm = () => {
  const { addNewCustomer } = useCustomers();

  const navigate = useNavigate();
  const handleSubmitForm = (values) => {
    addNewCustomer(values);
    navigate("/customers");
  };

  return (
    <div>
      <h2>New Customer</h2>
      <Link to="/customers">Back</Link>
      <Form
        initialValues={{
          account: "",
          email: "",
        }}
        onSubmit={handleSubmitForm}
      >
        {({ values, touched, errors, onChange, onBlur, onSubmit }) => (
          <form>
            <Input
              label="Account Name"
              placeholder="Your company name"
              id="account"
              required
              onChange={onChange}
              onBlur={onBlur}
              value={values.account}
              error={errors.account}
            />

            <Input
              label="Enter your email"
              id="email"
              onChange={onChange}
              onBlur={onBlur}
              value={values.email}
              error={touched.email && errors.email}
            />

            <div>
              <Button onButtonClick={onSubmit} type="submit">
                Submit
              </Button>
            </div>
          </form>
        )}
      </Form>
    </div>
  );
};

export { CustomerForm };
