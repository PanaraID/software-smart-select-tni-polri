import PAGES from "../../finals/basic/PAGES.ts";

import CheckMatra from "../../pages/check/CheckMatraPage.tsx";
import CheckButaWarnaPage from "../../pages/check/CheckButaWarnaPage.tsx";
import CheckMinusPage from "../../pages/check/CheckMinusPage.tsx";

type PropsType = {
  page: PAGES;
};

function ShowCheckPage(props: PropsType) {
  switch (props.page) {
    case PAGES.CHECK_MATRA:
      return <CheckMatra />;
    case PAGES.CHECK_BUTA_WARNA:
      return <CheckButaWarnaPage />;
    case PAGES.CHECK_MINUS:
      return <CheckMinusPage />
  }
}

export default ShowCheckPage;
