import * as React from "react";
import { Input, Button } from "../components";

class CustomerForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      account: "",
      email: "",
      error: "",
    };
  }
  handleFormSubmit = () => {
    this.setState({
      error: "",
    });
    // validate
    if (!this.state.account?.length) {
      this.setState({
        error: "Account name is required",
      });
      return;
    }
    //submit
    console.log("Submit my form", this.state);
  };

  handleInputChange = (id, value) => {
    this.setState({
      [id]: value,
    });
  };

  render() {
    return (
      <form>
        <Input
          label="Account Name"
          placeholder="Your company name"
          id="account"
          required
          onChange={this.handleInputChange}
          value={this.state.account}
        />
        <Input
          label="Enter your email"
          id="email"
          onChange={this.handleInputChange}
          value={this.state.email}
        />

        <div>
          <Button
            onButtonClick={this.handleFormSubmit}
            type="submit"
            title={"Submit"}
          />
        </div>
        {this.state.error?.length ? <p>{this.state.error}</p> : null}
      </form>
    );
  }
}

export { CustomerForm };
