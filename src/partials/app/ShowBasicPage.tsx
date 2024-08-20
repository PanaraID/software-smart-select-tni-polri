import PAGES from "../../finals/basic/PAGES.ts";

import HomePage from "../../pages/home/HomePage.tsx";
import HomeDevPage from "../../pages/home/HomeDevPage.tsx";

type PropsType = {
  page: PAGES;
};

function ShowBasicPage(props: PropsType) {
  switch (props.page) {
    case PAGES.HOME:
      return <HomePage />;
    case PAGES.DEV:
      return <HomeDevPage />;
  }
}

export default ShowBasicPage;
