import React from "react";

// router
import { Route } from "react-router-dom";

// components
const StoreHome = React.lazy(() => import("./StoreHome"));
const EditStore = React.lazy(() => import("./EditStore"));
const CreateStore = React.lazy(() => import("./CreateStore"));
const StoreDetail = React.lazy(() => import("./StoreDetail"));

const Store = (props) => {
  return (
    <>
      <Route path={`${props.match.path}`} component={StoreHome} exact />
      <Route path={`${props.match.path}/detail/:id`} component={StoreDetail} />
      <Route path={`${props.match.path}/edit/:id`} component={EditStore} />
      <Route path={`${props.match.path}/new`} component={CreateStore} />
    </>
  );
};

export default Store;
