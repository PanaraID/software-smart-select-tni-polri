import {useContext} from "react";
import AppContext from "../../context/AppContext.tsx";

import Header from "../../partials/Header.tsx";

import CardUserInput from "./partials/CardUserInput.tsx";
import CardUserRecommendation from "./partials/CardUserRecommendation.tsx";

import ButtonNavigation from "../../partials/button-navigation/ButtonNavigation";

function ResultPage() {
  const { setPage } = useContext(AppContext);

  return (
    <>
      <Header text="CEK REKOMENDASI TINGKATAN TNI POLRI" />

      {/* Menampilkan inputan user */}
      <CardUserInput />

      <div className="my-2" />

      {/* Menampilkan rekomendasi */}
      <CardUserRecommendation />

      <ButtonNavigation />
    </>
  );
}

export default ResultPage;
