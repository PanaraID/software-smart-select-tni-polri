import { useContext } from "react";

import AppContext from "../../context/AppContext";
import Header from "../../partials/Header";

import YES_OR_NO from "../../finals/basic/YES_OR_NO";

import InputChoice from "../../partials/InputChoice";

import ButtonNavigation from "../../partials/button-navigation/ButtonNavigation";

function CheckBagianPunggung() {
  const { 
    punggungLordosis,
    setPunggungLordosis,

    punggungKifosis,
    setPunggungKifosis,

    punggungSkoliosis,
    setPunggungSkoliosis
  } = useContext(AppContext);

  return (
    <>
      <Header text="Bagian Punggung" />

      <InputChoice
        title="Lordosis"
        enumType={YES_OR_NO}
        selected={punggungLordosis}
        setSelected={setPunggungLordosis}
      />
      <InputChoice
        title="Kifosis"
        enumType={YES_OR_NO}
        selected={punggungKifosis}
        setSelected={setPunggungKifosis}
      />
      <InputChoice
        title="Skoliosis"
        enumType={YES_OR_NO}
        selected={punggungSkoliosis}
        setSelected={setPunggungSkoliosis}
      />
      
      <ButtonNavigation />
    </>
  );
}

export default CheckBagianPunggung;
