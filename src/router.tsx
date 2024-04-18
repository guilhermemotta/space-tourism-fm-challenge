import { createBrowserRouter } from "react-router-dom";

import Root from "./routes/root";
import Destination from "./routes/destination";
import Crew from "./routes/crew";
import Technology from "./routes/technology";

const router = createBrowserRouter(
  [
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
    {
      path: "/technology",
      element: <Technology />,
    },
  ],
  { basename: "/space-tourism-fm-challenge" }
);

export default router;
