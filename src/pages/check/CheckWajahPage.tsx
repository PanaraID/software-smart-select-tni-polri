import { useContext } from "react";

import AppContext from "../../context/AppContext";
import Header from "../../partials/Header.tsx";

import YES_OR_NO from "../../finals/basic/YES_OR_NO.ts";

import InputChoice from "../../partials/InputChoice";

import ButtonNavigation from "../../partials/button-navigation/ButtonNavigation";

function CheckWajahPage() {
  const { wajahBercakHitam, setWajahBercakHitam } = useContext(AppContext);

  return (
    <>
      <Header text="Kesehatan Wajah" />

      <InputChoice
        title="Wajah Bercak Hitam"
        enumType={YES_OR_NO}
        selected={wajahBercakHitam}
        setSelected={setWajahBercakHitam}
      />
      
      <ButtonNavigation />
    </>
  );
}

export default CheckWajahPage;
