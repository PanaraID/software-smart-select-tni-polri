import { useContext } from "react";

import AppContext from "../../context/AppContext";
import Header from "../../partials/Header.tsx";

import GIGI_OMPONG from "../../finals/kesehatan/gigi/GIGI_OMPONG.ts";
import InputChoice from "../../partials/InputChoise.tsx";

import ButtonNavigation from "../../partials/button-navigation/ButtonNavigation";

function CheckGigiPage() {
  const { gigiOmpong, setGigiOmpong } = useContext(AppContext);

  return (
    <>
      <Header text="Kesehatan Gigi" />

      <InputChoice
        title="Kriteria Ompong"
        enumType={GIGI_OMPONG}
        selected={gigiOmpong}
        setSelected={setGigiOmpong}
      />
      
      <ButtonNavigation />
    </>
  );
}

export default CheckGigiPage;
