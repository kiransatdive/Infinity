
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = "YOUR_AUTH0_DOMAIN"; // e.g., dev-abc123.us.auth0.com
const clientId = "YOUR_AUTH0_CLIENT_ID"; // e.g., u7fAdx9wJn5abc123

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>
);
