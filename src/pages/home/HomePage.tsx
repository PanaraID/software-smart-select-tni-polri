import { useContext } from "react";

import AppContext from "../../context/AppContext";
import PAGES from "../../finals/basic/PAGES";

import HomeHeader from "./partials/HomeHeader";
import Header from "../../partials/Header";

import UMUR from "../../finals/UMUR";
import SEKOLAH from "../../finals/SEKOLAH";
import JURUSAN from "../../finals/JURUSAN";
import BUTA_WARNA from "../../finals/BUTA_WARNA";
import MINUS from "../../finals/MINUS";

import InputChoice from "../../partials/InputChoise";

import ButtonNavigation from "../../partials/button-navigation/ButtonNavigation";
// import { Button } from "react-bootstrap";

function HomePage() {
  const {
    setPage,

    umur,
    setUmur,

    sekolah,
    setSekolah,

    jurusan,
    setJurusan,

    butaWarna,
    setButaWarna,

    minus,
    setMinus
  } = useContext(AppContext);

  return (
    <>
      <HomeHeader />

      <Header text="Data Umum" />
      <InputChoice
        title="Umur"
        enumType={UMUR}
        selected={umur}
        setSelected={setUmur}
      />
      <InputChoice
        title="Asal Sekolah"
        enumType={SEKOLAH}
        selected={sekolah}
        setSelected={setSekolah}
      />
      <InputChoice
        title="Jurusan Sekolah"
        enumType={JURUSAN}
        selected={jurusan}
        setSelected={setJurusan}
      />
      <InputChoice
        title="Buta Warna"
        enumType={BUTA_WARNA}
        selected={butaWarna}
        setSelected={setButaWarna}
      />
      <InputChoice
        title="Minus"
        enumType={MINUS}
        selected={minus}
        setSelected={setMinus}
      />

      {/* <div>
        <Button onClick={() => setPage(PAGES.DEV)} variant="info">
          (SEMENTARA) Menuju Halaman Pengembang
        </Button>
      </div> */}

      <ButtonNavigation
        button1={{
          text: "Cek Kesehatan",
          action: () => {
            setPage(PAGES.CHECK_KESEHATAN);
          },
        }}
        button2={{
          text: "Cek Hasil Rekomendasi",
          action: () => {
            setPage(PAGES.RESULT);
          },
        }}
      />
    </>
  );
}

export default HomePage;
