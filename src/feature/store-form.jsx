import * as React from "react";
import { Input, Button, Form } from "../components";

const StoreForm = () => {
  const handleSubmitForm = (values) => {
    console.log("Submit my store form", values);
  };

  return (
    <Form
      initialValues={{
        account: "",
        email: "",
        postal: "",
        area: "",
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

          <Input
            label="Enter postal code"
            id="postal"
            onChange={onChange}
            onBlur={onBlur}
            value={values.postal}
            error={touched.postal && errors.postal}
          />

          <Input
            label="Enter an Area code "
            id="area"
            onChange={onChange}
            onBlur={onBlur}
            value={values.area}
            error={touched.area && errors.area}
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

export { StoreForm };
