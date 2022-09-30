import { useRoutes } from "react-router-dom";
import SideMenu from "../layouts/side-menu/Main";
import SimpleMenu from "../layouts/simple-menu/Main";
import TopMenu from "../layouts/top-menu/Main";
import LoginPage from "../views/Login/Main";
import NotFoundPage from "../views/Not404/Main";
import Page1 from "../views/page-1/Main";
import Page2 from "../views/page-2/Main";

function Router() {
  const routes = [
    {
      path: "/",
      element: <LoginPage />
    },
    {
      path: '*',
      element: <NotFoundPage />
    },
    {
      path: "/dashboard",
      element: <SideMenu />,
      children: [
        {
          path: "page-1",
          element: <Page1 />,
        },
        {
          path: "page-2",
          element: <Page2 />,
        },
        {
          path: "pm-merdeka",
          element: <Page2 />,
        },
      ],
    }
  ];

  return useRoutes(routes);
}

export default Router;
