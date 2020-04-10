import React from "react";
import { Field, reduxForm } from "redux-form";
import "./styles.scss";

function UserRegistrationForm(props) {
  const { submit } = props;

  return (
    <form onSubmit={submit}>
      <div className="wrapper">
        <div>
          <label htmlFor="name">Name</label>
        </div>
        <div>
          <Field
            name="name"
            component="input"
            type="text"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label htmlFor="address" >
            Address
          </label>
        </div>
        <div>
          <Field name="address" component="input" type="text" placeholder="Enter your address"/>
        </div>
        <div>
          <label htmlFor="city" >
            City
          </label>
        </div>
        <div>
          <Field name="city" component="input" type="city" placeholder="Enter your city"/>
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

UserRegistrationForm = reduxForm({
  // a unique name for the form
  form: "userreg",
})(UserRegistrationForm);

export { UserRegistrationForm as Form };
