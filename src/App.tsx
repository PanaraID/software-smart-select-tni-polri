// import { useState } from "react";

import "./App.css";

import Swal from "sweetalert2";

import PAGES from "./finals/basic/PAGES";
import LOCAL_STORAGE_KEY from "./finals/basic/LOCAL_STORAGE_KEY";

import useEffectSaveActivePage from "./hooks/basic/useEffectSaveActivePage.ts";
import useStatePage from "./hooks/basic/useStatePage.ts";

import AppContext from "./context/AppContext";

import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";

// useState
import useStateMatra from "./hooks/useStateMatra.ts";
import useStateButaWarna from "./hooks/useStateButaWarna.ts";

import CheckButaWarnaPage from "./pages/check/CheckButaWarnaPage.tsx";
import CheckMinusPage from "./pages/check/CheckMinusPage.tsx";

import Footer from "./partials/Footer";
import CheckMatra from "./pages/check/CheckMatraPage.tsx";

import ResultPage from "./pages/result/ResultPage.tsx";

function App() {
  const [page, setPage] = useStatePage();

  // Check
  const [matra, setMatra] = useStateMatra();
  const [butaWarna, setButaWarna] = useStateButaWarna();
  const [minus, setMinus] = useStateButaWarna();

  // Menyimpan halaman aktif ke local storage
  useEffectSaveActivePage(page);

  // Termasuk bertugas untuk menyimpan data "before-page"
  function changePage(data: PAGES) {
    if (!data) {
      Swal.fire({
        icon: "error",
        title: "Terjadi Kesalahan!",
        text: "Halaman dimaksud tidak ditemukan",
      }).then(() => changePage(PAGES.HOME));

      return;
    }

    localStorage.setItem(LOCAL_STORAGE_KEY.BEFORE_PAGE, page);
    setPage(data);
  }

  const context = {
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
          {page === PAGES.HOME && <HomePage />}
          {page === PAGES.ABOUT && <AboutPage />}

          {/* Check page */}
          {page === PAGES.CHECK_MATRA && (
            <CheckMatra />
          )}
          {page === PAGES.CHECK_BUTA_WARNA && (
            <CheckButaWarnaPage />
          )}
          {page === PAGES.CHECK_MINUS && (
            <CheckMinusPage />
          )}

          {page === PAGES.RESULT && (
            <ResultPage />
          )}
        </AppContext.Provider>
      </main>
      <Footer />
    </>
  );
}

export default App;
