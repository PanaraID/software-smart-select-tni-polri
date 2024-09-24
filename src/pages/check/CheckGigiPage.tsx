import { useContext } from "react";

import AppContext from "../../context/AppContext";
import Header from "../../partials/Header";

import GIGI_OMPONG from "../../finals/kesehatan/gigi/GIGI_OMPONG";
import GIGI_JUMLAH from "../../finals/kesehatan/gigi/GIGI_JUMLAH";
import GIGI_RAPIH from "../../finals/kesehatan/gigi/GIGI_RAPIH";
import GIGI_FRAKTUR from "../../finals/kesehatan/gigi/GIGI_FRAKTUR";
import GIGI_BERJEJAL from "../../finals/kesehatan/gigi/GIGI_BERJEJAL";

import InputChoice from "../../partials/InputChoice";

import ButtonNavigation from "../../partials/button-navigation/ButtonNavigation";

function CheckGigiPage() {
  const { 
    gigiOmpong,
    setGigiOmpong,

    gigiJumlah,
    setGigiJumlah,

    gigiRapih,
    setGigiRapih,

    gigiFraktur,
    setGigiFraktur,

    gigiBerjejal,
    setGigiBerjejal
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
      <InputChoice
        title="Fraktur Gigi"
        enumType={GIGI_FRAKTUR}
        selected={gigiFraktur}
        setSelected={setGigiFraktur}
      />

      <hr />
      {/* TODO */}
      <InputChoice
        title="Gigi Crowding/Berjejal"
        enumType={GIGI_BERJEJAL}
        selected={gigiBerjejal}
        setSelected={setGigiBerjejal}
      />
      {/* <InputChoice
        title="Gigi OpenBite"
        enumType={GIGI_FRAKTUR}
        selected={gigiFraktur}
        setSelected={setGigiFraktur}
      />
      <InputChoice
        title="Gigi OverBite"
        enumType={GIGI_FRAKTUR}
        selected={gigiFraktur}
        setSelected={setGigiFraktur}
      />
      <InputChoice
        title="Gigi CrossBite"
        enumType={GIGI_FRAKTUR}
        selected={gigiFraktur}
        setSelected={setGigiFraktur}
      /> */}
      
      <ButtonNavigation />
    </>
  );
}

export default CheckGigiPage;
