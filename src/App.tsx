import "./App.css";

import PAGES from "./finals/basic/PAGES";
import LOCAL_STORAGE_KEY from "./finals/basic/LOCAL_STORAGE_KEY";

import AppContext from "./context/AppContext";
import AppContextType from "./context/AppContextType.ts";

// useState
import useStatePage from "./hooks/basic/useStatePage.ts";
import useStateMatra from "./hooks/useStateMatra.ts";
import useStateButaWarna from "./hooks/useStateButaWarna.ts";
import useStateMinus from "./hooks/useStateMinus.ts";

// useEffect
import useEffectSaveActivePage from "./hooks/basic/useEffectSaveActivePage.ts";
import useEffectSaveCheck from "./hooks/useEffectSaveCheck.ts";

import ShowBasicPage from "./partials/app/ShowBasicPage.tsx";
import ShowCheckPage from "./partials/app/ShowCheckPage.tsx";
import ShowResultPage from "./partials/app/ShowResultPage.tsx";
import ShowRecommendationPage from "./partials/app/ShowRecommendationPage.tsx";

import Footer from "./partials/Footer";
function App() {
  const [page, setPage] = useStatePage();

  // Check
  const [matra, setMatra] = useStateMatra();
  const [butaWarna, setButaWarna] = useStateButaWarna();
  const [minus, setMinus] = useStateMinus();

  // Menyimpan segala perubahan ke localStorage
  useEffectSaveActivePage(page);
  useEffectSaveCheck(matra, butaWarna, minus);

  function changePage(data: PAGES) {
    localStorage.setItem(LOCAL_STORAGE_KEY.BEFORE_PAGE, page);
    setPage(data);
  }

  const context: AppContextType = {
    page,
    setPage: changePage,

    matra, setMatra,
    butaWarna, setButaWarna,
    minus, setMinus
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
