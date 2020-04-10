import React, { useEffect } from "react";
import { connect } from "react-redux";
import uniqid from "uniqid";
import "./style.scss";
function User(props) {
  useEffect(() => {
    props.getUsers();
  }, []);

  return (
    <div className="container">
      <h4>Name</h4>
      <h4>Address</h4>
      <h4>City</h4>
      {props.allUsers &&
        props.allUsers.map((user) => (
          <React.Fragment key={uniqid()}>
            <label>{user.name}</label>
            <label>{user.address}</label>
            <label>{user.city}</label>
          </React.Fragment>
        ))}
    </div>
  );
}

const mapStateToProps = (state) => ({ allUsers: state.users.data });

const mapDispatchToProps = (dispatch) => {
  // dispatching plain actions
  return {
    getUsers: () => dispatch({ type: "app/users/LOAD" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
