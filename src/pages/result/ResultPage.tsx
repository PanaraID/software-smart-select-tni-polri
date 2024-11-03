import Header from "../../partials/Header";

import CardDataGeneral from "./sections/CardDataGeneral";
import CardCheckKesehatan from "./sections/CardCheckKesehatan";
import CardRecommendation from "./sections/CardRecommendation";
import ButtonNavigation from "../../partials/button-navigation/ButtonNavigation";

function ResultPage() {
  return (
    <>
      <Header text="CEK REKOMENDASI TINGKATAN TNI POLRI" />

      {/* Menampilkan data umum */}
      <CardDataGeneral />
      <div className="my-2" />

      {/* Menampilkan cek kesehatan */}
      <CardCheckKesehatan />
      <div className="my-2" />

      {/* Menampilkan rekomendasi */}
      <CardRecommendation />

      <ButtonNavigation />
    </>
  );
}

export default ResultPage;
