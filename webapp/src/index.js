import React, { Suspense } from "react";
import ReactDOM from "react-dom";

// components
import App from "./App";

// css
import "semantic-ui-css/semantic.min.css";
import "./AppStyle.css";
import "react-image-crop/dist/ReactCrop.css";

// redux
import { Provider } from "react-redux";
import store from "./redux";

// i18n
import "./i18n";

ReactDOM.render(
  <Suspense fallback={<div>Loading...</div>}>
    <Provider store={store}>
      <App />
    </Provider>
  </Suspense>,
  document.getElementById("root")
);


