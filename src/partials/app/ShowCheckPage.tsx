import PAGES from "../../finals/basic/PAGES";

import CheckKesehatanPage from "../../pages/check/CheckKesehatanPage";
import CheckMataPage from "../../pages/check/CheckMataPage";

type PropsType = {
  page: PAGES;
};

function ShowCheckPage(props: PropsType) {
  switch (props.page) {
    case PAGES.CHECK_KESEHATAN:
      return <CheckKesehatanPage />;
    case PAGES.CHECK_MATA:
        return <CheckMataPage />;
  }
}

export default ShowCheckPage;
