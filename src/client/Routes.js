import Home from "./components/Home";
import UsersList, { loadData } from "./components/UsersList";

export default [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/users",
    component: UsersList,
    loadData,
  },
];
