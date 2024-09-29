// import {useContext} from "react";
// import AppContext from "../../context/AppContext";

import Header from "../../partials/Header";

import CardDataGeneral from "./sections/CardDataGeneral";
import CardCheckKesehatan from "./sections/CardCheckKesehatan";
// import CardUserRecommendation from "./partials/CardUserRecommendation";

import ButtonNavigation from "../../partials/button-navigation/ButtonNavigation";

function ResultPage() {
  // const { setPage } = useContext(AppContext);

  return (
    <>
      <Header text="CEK REKOMENDASI TINGKATAN TNI POLRI" />

      {/* Menampilkan data umum */}
      <CardDataGeneral />

      <div className="my-2" />

      {/* Menampilkan cek kesehatan */}
      <CardCheckKesehatan />

      {/* Menampilkan rekomendasi */}
      {/* <CardUserRecommendation /> */}

      <ButtonNavigation />
    </>
  );
}

export default ResultPage;
