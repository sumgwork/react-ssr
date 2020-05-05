import HomePage from "./pages/HomePage";
import UsersListPage from "./pages/UsersListPage";
import App from "./App";
import Page404 from "./pages/404";

export default [
  {
    ...App,
    routes: [
      {
        path: "/",
        ...HomePage,
        exact: true,
      },
      {
        path: "/users",
        ...UsersListPage,
      },

      {
        ...Page404,
      },
    ],
  },
];
