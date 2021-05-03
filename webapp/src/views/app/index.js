import React from "react";

// router
import { Route, Redirect } from "react-router-dom";

// components
const Home = React.lazy(() => import("./home"));
const Store = React.lazy(() => import("./store"));
const Account = React.lazy(() => import("./account"));

export const AppViews = (props) => {
  return (
    <>
      <Route path={`${props.match.path}/`} exact>
        <Redirect to={`${props.match.path}/home`} />
      </Route>
      <Route path={`${props.match.path}/home`} component={Home} />
      <Route path={`${props.match.path}/store`} component={Store} />
      <Route path={`${props.match.path}/account`} component={Account} />
    </>
  );
};

export default AppViews;
