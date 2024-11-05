import { useContext } from "react";
import AppContext from "../../context/AppContext";
import PAGES from "../../finals/basic/PAGES";

import Header from "../../partials/Header";

import CardDataGeneral from "./sections/CardDataGeneral";
import CardCheckKesehatan from "./sections/CardCheckKesehatan";
import CardRecommendation from "./sections/CardRecommendation";
import ButtonNavigation from "../../partials/button-navigation/ButtonNavigation";

function ResultPage() {
  const { setPage } = useContext(AppContext);

  return (
    <>
      <Header text="CEK REKOMENDASI TINGKATAN TNI POLRI" />

      {/* Menampilkan rekomendasi */}
      <CardRecommendation />
      <div className="my-2" />

      {/* Menampilkan data umum */}
      <CardDataGeneral />
      <div className="my-2" />

      {/* Menampilkan cek kesehatan */}
      <CardCheckKesehatan />
      <div className="my-2" />

      <ButtonNavigation
        button1={{
          text: "Beranda",
          action: () => {
            setPage(PAGES.HOME);
          },
        }}
      />
    </>
  );
}

export default ResultPage;
