import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./assets/css/print.css";
import "./assets/css/loader.css";
import "./assets/css/tailwind.css";
import reportWebVitals from "./reportWebVitals";
import store from "./Redux/store";
import { Provider } from "react-redux";
import PageLoading from "./Components/Common/PageLoading";
const WebAndDashboardManager = lazy(() =>
  import("./Components/WebAndDashboardManager")
);

store.subscribe(() => store.getState());
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Suspense fallback={<PageLoading />}>
        <WebAndDashboardManager />
      </Suspense>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
reportWebVitals();
