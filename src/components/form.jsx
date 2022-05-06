import * as React from "react";

const Form = ({ initialValues, onSubmit, children }) => {
  const initialErrors = {
    account: "",
    email: "",
  };

  const [values, setValues] = React.useState({
    account: "",
    email: "",
    ...initialValues,
  });

  const [errors, setErrors] = React.useState(initialErrors);

  const [touched, setTouched] = React.useState({
    account: false,
    email: false,
  });

  const isValid = () => {
    if (!values.account?.length) {
      setErrors({
        ...errors,
        account: "Account name is required",
      });

      return false;
    }

    if (values.email?.length < 3) {
      setErrors({
        ...errors,
        email: "Email must be more than 3 characters",
      });
      return false;
    }

    return true;
  };

  const handleFormSubmit = () => {
    setErrors(initialErrors);
    // validate

    if (isValid()) {
      //submit
      if (onSubmit) {
        onSubmit(values);
      }
    }
  };

  const handleInputChange = (id, value) => {
    setValues({
      ...values,
      [id]: value,
    });
  };

  const handleInputBlur = (id, value) => {
    setTouched({
      ...touched,
      [id]: true,
    });
  };

  return children({
    values,
    touched,
    errors,
    onChange: handleInputChange,
    onBlur: handleInputBlur,
    onSubmit: handleFormSubmit,
  });
};

export { Form };
