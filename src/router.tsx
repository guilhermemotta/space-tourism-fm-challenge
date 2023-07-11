import { createBrowserRouter } from "react-router-dom";

import Root from "./routes/root";
import Destination from "./routes/destination";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/destination",
    element: <Destination />,
  },
]);

export default router;
