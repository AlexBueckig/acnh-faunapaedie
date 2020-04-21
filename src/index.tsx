import dayjs from "dayjs";
import "dayjs/locale/de";
import customParseFormat from "dayjs/plugin/customParseFormat";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./reset.module.scss";
import * as serviceWorker from "./serviceWorker";

dayjs.locale("de");
dayjs.extend(customParseFormat);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
/* Possible fix for cache not updating
  serviceWorker.register({
  onUpdate: async (registration) => {
    // We want to run this code only if we detect a new service worker is
    // waiting to be activated.
    // Details about it: https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle
    if (registration && registration.waiting) {
      await registration.unregister();
      // Once the service worker is unregistered, we can reload the page to let
      // the browser download a fresh copy of our app (invalidating the cache)
      window.location.reload();
    }
  },
});
*/
