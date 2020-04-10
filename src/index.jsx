import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/Home";
import { Provider } from 'react-redux';
import store from './redux/store'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("app"));
