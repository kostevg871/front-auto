import { createBrowserRouter } from "react-router-dom";
import { LayoutApp } from "../app/LayoutApp";
import App from "../app/App";

export const appRouter = createBrowserRouter([
  {
    element: <LayoutApp />,
    errorElement: <div>Error</div>,
    children: [{ path: "/", element: <App /> }],
  },
]);
