import { useContext } from "react";

import AppContext from "../../context/AppContext";
import Header from "../../partials/Header.tsx";

import WAJAH_BERCAK_HITAM from "../../finals/kesehatan/wajah/WAJAH_BERCAK_HITAM";

import InputChoice from "../../partials/InputChoice";

import ButtonNavigation from "../../partials/button-navigation/ButtonNavigation";

function CheckWajahPage() {
  const { wajahBercakHitam, setWajahBercakHitam } = useContext(AppContext);

  return (
    <>
      <Header text="Kesehatan Wajah" />

      <InputChoice
        title="Wajah Bercak Hitam"
        enumType={WAJAH_BERCAK_HITAM}
        selected={wajahBercakHitam}
        setSelected={setWajahBercakHitam}
      />
      
      <ButtonNavigation />
    </>
  );
}

export default CheckWajahPage;
