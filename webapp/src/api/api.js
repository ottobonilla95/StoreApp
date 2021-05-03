// import * as moment from "moment";
import axios from "axios";

// sweetalert2
import Swal from "sweetalert2";

// history
import history from "../utils/history";

// config
import { appConfig } from "../config";

const isHandlerEnabled = (config = {}) => {
  if (config.hasOwnProperty("handlerEnabled")) {
    if (config.handlerEnabled) {
      return true;
    } else {
      return false;
    }
  }

  if (config.data.hasOwnProperty("handlerEnabled")) {
    if (config.data.handlerEnabled) {
      return true;
    } else {
      return false;
    }
  }

  let jsondata = JSON.parse(config.data);

  if (jsondata.hasOwnProperty("handlerEnabled")) {
    if (jsondata.handlerEnabled) {
      return true;
    } else {
      return false;
    }
  }

  return false;
};

const requestHandler = async (request) => {
  if (isHandlerEnabled(request)) {
    // Modify request here
    if (localStorage.getItem("user")) {
      let user = JSON.parse(localStorage.getItem("user"));
      let token = user.access_token;

      request.headers["Authorization"] = `Bearer ${token}`;
    }
  }
  return request;
};
const errorHandler = (error) => {
  let message;
  message = error.response.data.message;

  if (isHandlerEnabled(error.response.config)) {
    switch (error.response.status) {
      case 401:
        localStorage.removeItem("user");
        let currentUrl = history.location.pathname;
        history.push("/dashboard/signin?comefrom=" + currentUrl);
        break;
      default:
        message = error.response.data.message;
        break;
    }

    if (message) {
      Swal.fire({
        title: "Error!",
        text: message,
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    }
  }

  return Promise.reject({ message });
};

const successHandler = (response) => {
  if (isHandlerEnabled(response.config)) {
    if (response.data.message) {
      Swal.fire({
        text: response.data.message,
        icon: "info",
        confirmButtonText: "Ok",
      });
    }
  }
  return response;
};

const axiosInstance = axios.create({
  baseURL: appConfig.baseUrl,
});

// Add interceptors
axiosInstance.interceptors.request.use((request) => requestHandler(request));

axiosInstance.interceptors.response.use(
  (response) => successHandler(response),
  (error) => errorHandler(error)
);

export default axiosInstance;
