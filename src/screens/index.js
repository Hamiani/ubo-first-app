import Counter from "./Counter";
import Quotes from "./Quotes";
import Login from "./Login";
import Home from "./Home";

import { PATHS } from "../utils/constants";

const routes = (props) => [
  {
    exact: true,
    component: () => <Home {...props} />,
    path: PATHS.HOME,
  },
  {
    exact: true,
    component: () => <Login {...props} />,
    path: PATHS.LOGIN,
  },
  {
    exact: true,
    component: () => <Quotes {...props} />,
    path: PATHS.QUOTES,
  },
  {
    exact: true,
    component: () => <Counter {...props} />,
    path: PATHS.COUNTER,
  },
];
export default (props) => routes(props);
