import PAGES from "../../finals/basic/PAGES";

import CheckKesehatanPage from "../../pages/check/CheckKesehatanPage";
import CheckMataPage from "../../pages/check/CheckMataPage";
import CheckWajahPage from "../../pages/check/CheckWajahPage";
import CheckGigiPage from "../../pages/check/CheckGigiPage";

type PropsType = {
  page: PAGES;
};

function ShowCheckPage(props: PropsType) {
  switch (props.page) {
    case PAGES.CHECK_KESEHATAN:
      return <CheckKesehatanPage />;
    case PAGES.CHECK_MATA:
        return <CheckMataPage />;
    case PAGES.CHECK_WAJAH:
      return <CheckWajahPage />;
    case PAGES.CHECK_GIGI:
      return <CheckGigiPage />;
  }
}

export default ShowCheckPage;
