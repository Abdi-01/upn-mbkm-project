import { atom } from "recoil";

const sideMenu = atom({
  key: "sideMenu",
  default: {
    menu: [
      {
        icon: "Home",
        pathname: "/dashboard/page-1",
        title: "Page 1",
      },
      {
        icon: "Home",
        pathname: "/dashboard/page-2",
        title: "Page 2",
      },
      {
        icon: "Home",
        pathname: "/dashboard/pm-merdeka",
        title: "PM Merdeka",
      },
    ],
  },
});

export { sideMenu };
