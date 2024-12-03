import { createBrowserRouter } from "react-router-dom";
import Body from "./Body";
import Feed from "./Feed";
import Watch from "./Watch";


export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body/>, // Parent route
    children: [
      {
        index: true, // Marks this route as the default child for "/"
        element: <Feed/>,
      },
      {
        path: "watch", // Child route for "/watch"
        element: <Watch/>,
      },
    ],
  },
]);
