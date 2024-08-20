import PAGES from "../../finals/basic/PAGES.ts";

import HomePage from "../../pages/home/HomePage.tsx";
import AboutPage from "../../pages/about/AboutPage.tsx";

type PropsType = {
  page: PAGES;
};

function ShowBasicPage(props: PropsType) {
  switch (props.page) {
    case PAGES.HOME:
      return <HomePage />;
    case PAGES.ABOUT:
      return <AboutPage />;
  }
}

export default ShowBasicPage;
