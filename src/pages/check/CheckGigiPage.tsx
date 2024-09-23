import { useContext } from "react";

import AppContext from "../../context/AppContext";
import Header from "../../partials/Header";

import GIGI_OMPONG from "../../finals/kesehatan/gigi/GIGI_OMPONG";
import GIGI_JUMLAH from "../../finals/kesehatan/gigi/GIGI_JUMLAH";
import GIGI_RAPIH from "../../finals/kesehatan/gigi/GIGI_RAPIH";

import InputChoice from "../../partials/InputChoise";

import ButtonNavigation from "../../partials/button-navigation/ButtonNavigation";

function CheckGigiPage() {
  const { 
    gigiOmpong,
    setGigiOmpong,

    gigiJumlah,
    setGigiJumlah,

    gigiRapih,
    setGigiRapih
  } = useContext(AppContext);

  return (
    <>
      <Header text="Kesehatan Gigi" />

      <InputChoice
        title="Kriteria Ompong"
        enumType={GIGI_OMPONG}
        selected={gigiOmpong}
        setSelected={setGigiOmpong}
      />
      <InputChoice
        title="Kriteria Jumlah Gigi"
        enumType={GIGI_JUMLAH}
        selected={gigiJumlah}
        setSelected={setGigiJumlah}
      />

      <hr />

      <InputChoice
        title="Gigi Rapih"
        enumType={GIGI_RAPIH}
        selected={gigiRapih}
        setSelected={setGigiRapih}
      />
      
      <ButtonNavigation />
    </>
  );
}

export default CheckGigiPage;
