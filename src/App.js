import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Idp from "./components/pages/Idp";
import OidcApp from "./components/pages/OidcApp";
import SamlApp from "./components/pages/SamlApp";
import DrawerLeft from "./components/ui/DrawerLeft";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";

import { connect } from "react-redux";
export { setCurrentUser } from "./redux/actions/actions";

function App(props) {
  // console.log(props.store.getState());
  const { name } = props;
  console.log(name);
  return (
    <div className="App">
      <Router>
        <DrawerLeft name={name} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/samlspp" component={SamlApp} />
          <Route exact path="/oidcapp" component={OidcApp} />
          <Route exact path="/idp" component={Idp} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    name: state.name,
  };
};

//  const mapDispatchToProps = (dispatch) =>{
// return{
//  onClickShow : (event) => dispatch(setName)
// } }

export default connect(mapStateToProps, null)(App);
