import React from "react";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom";
import { renderToString } from "react-dom/server";
import Routes from "../client/Routes";

export default (req, store) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter context={{}} location={req.path}>
        <Routes />
      </StaticRouter>
    </Provider>
  );

  const html = `<html>
        <head></head>
        <body><div id="root">
        ${content}
        </div>
        <script src="bundle.js"></script>
        </body>
      </html>`;

  return html;
};
