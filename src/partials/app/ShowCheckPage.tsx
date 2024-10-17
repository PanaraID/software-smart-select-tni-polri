import PAGES from "../../finals/basic/PAGES";

import CheckKesehatanPage from "../../pages/check/CheckKesehatanPage";
import CheckKesehatanTambahanPage from "../../pages/check/CheckKesehatanTambahanPage";

import CheckMataPage from "../../pages/check/CheckMataPage";
import CheckBagianKepala from "../../pages/check/CheckBagianKepala";
import CheckWajahPage from "../../pages/check/CheckWajahPage";
import CheckBagianTangan from "../../pages/check/CheckBagianTangan";
import CheckBagianHidung from "../../pages/check/CheckBagianHidung";
import CheckKakiPage from "../../pages/check/CheckKakiPage";
import CheckGigiPage from "../../pages/check/CheckGigiPage";
import CheckBagianPunggung from "../../pages/check/CheckBagianPunggung";

type PropsType = {
  page: PAGES;
};

function ShowCheckPage(props: PropsType) {
  switch (props.page) {
    case PAGES.CHECK_KESEHATAN:
      return <CheckKesehatanPage />;
    case PAGES.CHECK_KESEHATAN_TAMBAHAN:
      return <CheckKesehatanTambahanPage />;
    case PAGES.CHECK_MATA:
        return <CheckMataPage />;
    case PAGES.CHECK_BAGIAN_KEPALA:
      return <CheckBagianKepala />;
    case PAGES.CHECK_WAJAH:
      return <CheckWajahPage />;
    case PAGES.CHECK_BAGIAN_TANGAN:
      return <CheckBagianTangan />;
    case PAGES.CHECK_BAGIAN_HIDUNG:
      return <CheckBagianHidung />;
    case PAGES.CHECK_BAGIAN_PUNGGUNG:
      return <CheckBagianPunggung />;
    case PAGES.CHECK_KAKI:
      return <CheckKakiPage />;
    case PAGES.CHECK_GIGI:
      return <CheckGigiPage />;
  }
}

export default ShowCheckPage;
