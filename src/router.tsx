import { createBrowserRouter } from "react-router-dom";

import Root from "./routes/root";
import Destination from "./routes/destination";
import Crew from "./routes/crew";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/destination",
    element: <Destination />,
  },
  {
    path: "/crew",
    element: <Crew />,
  },
]);

export default router;
