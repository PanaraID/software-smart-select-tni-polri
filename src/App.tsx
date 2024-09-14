import "./App.css";

import PAGES from "./finals/basic/PAGES";
import LOCAL_STORAGE_KEY from "./finals/basic/LOCAL_STORAGE_KEY";

import AppContext from "./context/AppContext";
import AppContextType from "./context/AppContextType";

// useState
import useStatePage from "./hooks/basic/useStatePage";
import useStateUmur from "./hooks/useStateUmur";
import useStateSekolah from "./hooks/useStateSekolah";
import useStateJurusan from "./hooks/useStateJurusan";
import useStateButaWarna from "./hooks/useStateButaWarna";
import useStateMinus from "./hooks/useStateMinus";

// useEffect
import useEffectSaveActivePage from "./hooks/basic/useEffectSaveActivePage";
import useEffectSaveCheck from "./hooks/useEffectSaveCheck";

import ShowBasicPage from "./partials/app/ShowBasicPage";
import ShowCheckPage from "./partials/app/ShowCheckPage";
import ShowResultPage from "./partials/app/ShowResultPage";
import ShowRecommendationPage from "./partials/app/ShowRecommendationPage";

import Footer from "./partials/Footer";
function App() {
  const [page, setPage] = useStatePage();

  // Check
  const [umur, setUmur] = useStateUmur();
  const [sekolah, setSekolah] = useStateSekolah();
  const [jurusan, setJurusan] = useStateJurusan();
  const [butaWarna, setButaWarna] = useStateButaWarna();
  const [minus, setMinus] = useStateMinus();

  // Menyimpan segala perubahan ke localStorage
  useEffectSaveActivePage(page);
  useEffectSaveCheck(umur, sekolah, jurusan, butaWarna, minus);

  function setMyPage(data: PAGES) {
    localStorage.setItem(LOCAL_STORAGE_KEY.BEFORE_PAGE, page);
    setPage(data);
  }

  const context: AppContextType = {
    page,
    setPage: setMyPage,

    umur,
    setUmur,

    sekolah,
    setSekolah,

    jurusan,
    setJurusan,

    butaWarna,
    setButaWarna,

    minus,
    setMinus,
  };

  return (
    <>
      <main id="content" className="p-2 container card overflow-auto">
        <AppContext.Provider value={context}>
          <ShowBasicPage page={page} />
          <ShowCheckPage page={page} />
          <ShowResultPage page={page} />
          <ShowRecommendationPage page={page} />
        </AppContext.Provider>
      </main>
      <Footer />
    </>
  );
}

export default App;
