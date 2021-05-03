import React from "react";

// router
import { Redirect, Router, Switch, Route } from "react-router-dom";

// history
import history from "./utils/history";

// Components
const Dashboard = React.lazy(() => import("./views"));
const SignUp = React.lazy(() => import("./views/user/signup"));

function App() {
  return (
    <Router history={history} basename={"/storewebapp"}>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/dashboard" />
        </Route>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
