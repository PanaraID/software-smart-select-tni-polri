import { useContext } from "react";

import AppContext from "../../context/AppContext";
import Header from "../../partials/Header";

import YES_OR_NO from "../../finals/basic/YES_OR_NO";

import InputChoice from "../../partials/InputChoice";
import ButtonNavigation from "../../partials/button-navigation/ButtonNavigation";

function CheckBagianHidung() {
  const {
    hidungPatahTulang,
    setHidungPatahTulang
  } = useContext(AppContext);

  return (
    <>
      <Header text="Kesehatan Hidung" />

      <InputChoice
        title="Patah Tulang Hidung"
        enumType={YES_OR_NO}
        selected={hidungPatahTulang}
        setSelected={setHidungPatahTulang}
      />

      <ButtonNavigation />
    </>
  );
}

export default CheckBagianHidung;
