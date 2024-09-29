import { useContext } from "react";

import AppContext from "../../context/AppContext";
import Header from "../../partials/Header";

import MATA_RABUN_JAUH_DEKAT from "../../finals/kesehatan/mata/MATA_RABUN_JAUH_DEKAT";
import MATA_KATARAK from "../../finals/kesehatan/mata/MATA_KATARAK";
import MATA_PETEREGIUM from "../../finals/kesehatan/mata/MATA_PETEREGIUM";

import InputChoice from "../../partials/InputChoice";

import ButtonNavigation from "../../partials/button-navigation/ButtonNavigation";

function CheckMataPage() {
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
        enumType={MATA_KATARAK}
        selected={mataKatarak}
        setSelected={setMataKatarak}
      />
      <InputChoice
        title="Mata Peteregium"
        enumType={MATA_PETEREGIUM}
        selected={mataPeteregium}
        setSelected={setMataPeteregium}
      />
      
      <ButtonNavigation />
    </>
  );
}

export default CheckMataPage;
