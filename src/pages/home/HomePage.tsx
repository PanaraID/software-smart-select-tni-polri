import { useContext } from "react";
import { Button } from "react-bootstrap";

import AppContext from "../../context/AppContext";
import PAGES from "../../finals/basic/PAGES";

import HomeHeader from "./partials/HomeHeader";
import Header from "../../partials/Header";

import UMUR from "../../finals/UMUR";
import SEKOLAH from "../../finals/SEKOLAH";
import JURUSAN from "../../finals/JURUSAN";
import TINGGI_BADAN from "../../finals/TINGGI_BADAN";
import BUTA_WARNA from "../../finals/BUTA_WARNA";
import MINUS from "../../finals/MINUS";

import InputChoice from "../../partials/InputChoice";

import ButtonNavigation from "../../partials/button-navigation/ButtonNavigation";

function HomePage() {
  const {
    setPage,

    umur,
    setUmur,

    sekolah,
    setSekolah,

    jurusan,
    setJurusan,

    tinggiBadan,
    setTinggiBadan,

    butaWarna,
    setButaWarna,

    minus,
    setMinus,
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
        title="Tinggi Badan"
        enumType={TINGGI_BADAN}
        selected={tinggiBadan}
        setSelected={setTinggiBadan}
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

      <Button
        className="mt-3"
        onClick={() => setPage(PAGES.CHECK_KESEHATAN_TAMBAHAN)}
        variant="info"
      >
        Kesehatan Tambahan Lainnya
      </Button>

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
