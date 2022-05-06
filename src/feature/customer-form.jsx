import * as React from "react";
import { Input, Button, Form } from "../components";

const CustomerForm = () => {
  const handleSubmitForm = (values) => {
    console.log("Submit my customer form", values);
  };
  return (
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
            redquired
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
  );
};

export { CustomerForm };
