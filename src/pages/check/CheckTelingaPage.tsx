import { useContext } from "react";

import AppContext from "../../context/AppContext";
import Header from "../../partials/Header";

import MATA_RABUN_JAUH_DEKAT from "../../finals/kesehatan/mata/MATA_RABUN_JAUH_DEKAT";
import YES_OR_NO from "../../finals/basic/YES_OR_NO";

import InputChoice from "../../partials/InputChoice";

import ButtonNavigation from "../../partials/button-navigation/ButtonNavigation";

function CheckTelingaPage() {
  const { 
    mataRabunJauhDekat,
    setMataRabunJauhDekat,

    mataKatarak,
    setMataKatarak,

    mataPeteregium,
    setMataPeteregium
  } = useContext(AppContext);

  return (
    <>
      <Header text="Kesehatan Mata" />

      <InputChoice
        title="Rabun Jauh/Dekat"
        enumType={MATA_RABUN_JAUH_DEKAT}
        selected={mataRabunJauhDekat}
        setSelected={setMataRabunJauhDekat}
      />
      <InputChoice
        title="Mata Katarak"
        enumType={YES_OR_NO}
        selected={mataKatarak}
        setSelected={setMataKatarak}
      />
      <InputChoice
        title="Mata Peteregium"
        enumType={YES_OR_NO}
        selected={mataPeteregium}
        setSelected={setMataPeteregium}
      />
      
      <ButtonNavigation />
    </>
  );
}

export default CheckTelingaPage;
