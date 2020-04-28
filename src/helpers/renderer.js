import React from "react";
import { StaticRouter } from "react-router-dom";
import { renderToString } from "react-dom/server";
import Routes from "../client/Routes";

export default (req) => {
  const content = renderToString(
    <StaticRouter context={{}} location={req.path}>
      <Routes />
    </StaticRouter>
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
