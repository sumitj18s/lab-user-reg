import React from "react";
import User from "../../features/User";
import { Form } from "../../features/UserRegistrationForm";
import { connect } from "react-redux";
import './styles.scss'

function Home(props) {
  const submit = (values) => {
    props.getUsers(values)
  };
  return (
    <div className="home">
      <h2>User Registeration Module</h2>
      <Form onSubmit={submit} />
      <User />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: (values) =>
      dispatch({
        type: "app/users/CREATE",
        data: { name: values.name, address: values.address, city: values.city },
      }),
  };
};

export default connect(null, mapDispatchToProps)(Home);
