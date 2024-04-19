import { createBrowserRouter } from "react-router-dom";

import { Root, Destination, Crew, Technology } from "./routes";

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
