import Login from "./components/Login/Login";
import HomePage from "./components/HomePage/HomePage";
import Err404 from "./components/404Err/Err404";

const routes = [
  { key: 1, path: "/", element: HomePage, exact: true },
  { key: 2, path: "/login", element: Login },
  { key: 3, element: Err404 },
];

export default routes;
