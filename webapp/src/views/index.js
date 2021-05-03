import React from "react";

// router
import { Route, Redirect } from "react-router-dom";

// layout
import AppLayout from "../layout/AppLayout";

// components
const AppViews = React.lazy(() => import("./app"));
const UserViews = React.lazy(() => import("./user"));

export const App = (props) => {
  return (
    <AppLayout>
      <div className="ui container">
        <Route path={`${props.match.path}/`} exact>
          <Redirect to={`${props.match.path}/app`} />
        </Route>
        <Route path={`${props.match.path}/app`} component={AppViews} />
        <Route path={`${props.match.path}/user`} component={UserViews} />
      </div>
    </AppLayout>
  );
};

export default App;
