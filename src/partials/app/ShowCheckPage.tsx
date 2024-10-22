import PAGES from "../../finals/basic/PAGES";

import CheckKesehatanPage from "../../pages/check/CheckKesehatanPage";
import CheckKesehatanTambahanPage from "../../pages/check/CheckKesehatanTambahanPage";

import CheckMataPage from "../../pages/check/CheckMataPage";
import CheckBagianKepalaPage from "../../pages/check/CheckBagianKepalaPage";
import CheckWajahPage from "../../pages/check/CheckWajahPage";
import CheckBagianTanganPage from "../../pages/check/CheckBagianTanganPage";
import CheckBagianHidungPage from "../../pages/check/CheckBagianHidungPage";
import CheckKakiPage from "../../pages/check/CheckKakiPage";
import CheckGigiPage from "../../pages/check/CheckGigiPage";
import CheckBagianPunggungPage from "../../pages/check/CheckBagianPunggungPage";

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
      return <CheckBagianKepalaPage />;
    case PAGES.CHECK_WAJAH:
      return <CheckWajahPage />;
    case PAGES.CHECK_BAGIAN_TANGAN:
      return <CheckBagianTanganPage />;
    case PAGES.CHECK_BAGIAN_HIDUNG:
      return <CheckBagianHidungPage />;
    case PAGES.CHECK_BAGIAN_PUNGGUNG:
      return <CheckBagianPunggungPage />;
    case PAGES.CHECK_KAKI:
      return <CheckKakiPage />;
    case PAGES.CHECK_GIGI:
      return <CheckGigiPage />;
  }
}

export default ShowCheckPage;
