import { useContext } from "react";

import AppContext from "../../context/AppContext";
import Header from "../../partials/Header.tsx";

import YES_OR_NO from "../../finals/basic/YES_OR_NO.ts";

import InputChoice from "../../partials/InputChoice";

import ButtonNavigation from "../../partials/button-navigation/ButtonNavigation";

function CheckKakiPage() {
  const { 
    kaki_X,
    setKaki_X,

    kaki_O,
    setKaki_O,

    kakiTelapakFlatDatar,
    setKakiTelapakFlatDatar,

    kakiPesKavus,
    setKakiPesKavus,

    kakiVarises,
    setKakiVarises
  } = useContext(AppContext);

  return (
    <>
      <Header text="Kesehatan Kaki" />

      <InputChoice
        title="Kaki X"
        enumType={YES_OR_NO}
        selected={kaki_X}
        setSelected={setKaki_X}
      />
      <InputChoice
        title="Kaki O"
        enumType={YES_OR_NO}
        selected={kaki_O}
        setSelected={setKaki_O}
      />
      <InputChoice
        title="Telapak Kaki Flat / Datar"
        enumType={YES_OR_NO}
        selected={kakiTelapakFlatDatar}
        setSelected={setKakiTelapakFlatDatar}
      />
      <InputChoice
        title="Telapak Kaku Pes Kavus (Berbentuk Cakar)"
        enumType={YES_OR_NO}
        selected={kakiPesKavus}
        setSelected={setKakiPesKavus}
      />
      <InputChoice
        title="Kaki Varises"
        enumType={YES_OR_NO}
        selected={kakiVarises}
        setSelected={setKakiVarises}
      />
      
      <ButtonNavigation />
    </>
  );
}

export default CheckKakiPage;
