import "babel-polyfill";
import express from "express";
import { matchRoutes } from "react-router-config";
import routes from "./client/Routes";
import renderer from "./helpers/renderer";
import proxy from "express-http-proxy";
import createStore from "./helpers/createStore";

const app = express();

app.use(
  "/api",
  proxy("http://react-ssr-api.herokuapp.com", {
    proxyReqOptDecorator(opts) {
      opts.headers["x-forwarded-host"] = "localhost:3000";
      return opts;
    },
  })
);

app.use(express.static("public"));
app.get("*", (req, res) => {
  const store = createStore(req);

  // some logic to initialize any data into the store
  const promises = matchRoutes(routes, req.path).map(({ route }) =>
    route.loadData ? route.loadData(store) : null
  );

  Promise.all(promises).then(() => {
    const context = {};
    const content = renderer(req, store, context);
    if (context.notFound) {
      res.status(404);
    }
    res.send(content);
  });
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
