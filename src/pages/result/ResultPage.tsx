import {useContext} from "react";
import AppContext from "../../context/AppContext.tsx";

import Header from "../../partials/Header.tsx";

import CardUserInput from "./partials/CardUserInput.tsx";
import CardUserRecomendation from "./partials/CardUserRecomendation.tsx";

import ButtonNavigation from "../../partials/button-navigation/ButtonNavigation";
import PAGES from "../../finals/basic/PAGES.ts";

function ResultPage() {
  const { setPage } = useContext(AppContext);

  return (
    <>
      <Header text="Halaman Result" />

      {/* Menampilkan inputan user */}
      <CardUserInput />

      <div className="my-2" />

      {/* Menampilkan rekomendasi */}
      <CardUserRecomendation />

      <ButtonNavigation
        button1={{
          text: "Sebelumnya",
          action: () => setPage(PAGES.CHECK_MINUS)
        }}
        button2={{
          text: "Beranda",
          action: () => setPage(PAGES.HOME)
        }}
      />
    </>
  );
}

export default ResultPage;
