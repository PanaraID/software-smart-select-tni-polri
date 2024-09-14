import PAGES from "../../finals/basic/PAGES";

import HomePage from "../../pages/home/HomePage";

type PropsType = {
  page: PAGES;
};

function ShowBasicPage(props: PropsType) {
  switch (props.page) {
    case PAGES.HOME:
      return <HomePage />;
  }
}

export default ShowBasicPage;
