import React from "react";

// router
import { Route, Redirect } from "react-router-dom";

// css
import "./AuthForm.css";

// components
const SignIn = React.lazy(() => import("./signin"));
const RestorePassword = React.lazy(() => import("./RestorePassword"));
const ResendConfirmationEmail = React.lazy(() =>
  import("./ResendConfirmationEmail")
);

export const UserViews = (props) => {
  return (
    <>
      <Route path={`${props.match.path}/`} exact>
        <Redirect to={`${props.match.path}/signin`} />
      </Route>
      <Route path={`${props.match.path}/signin`} component={SignIn} />
      <Route
        path={`${props.match.path}/restorepassword`}
        component={RestorePassword}
      />
      <Route
        path={`${props.match.path}/resendconfirmarionemail`}
        component={ResendConfirmationEmail}
      />
    </>
  );
};

export default UserViews;
