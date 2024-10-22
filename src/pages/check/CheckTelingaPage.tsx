import { useContext } from "react";

import AppContext from "../../context/AppContext";
import Header from "../../partials/Header";

import YES_OR_NO from "../../finals/basic/YES_OR_NO";

import InputChoice from "../../partials/InputChoice";

import ButtonNavigation from "../../partials/button-navigation/ButtonNavigation";

function CheckTelingaPage() {
  const { 
    telingaGendangRobek,
    setTelingaGendangRobek,

    telingaLebarSebelah,
    setTelingaLebarSebelah
  } = useContext(AppContext);

  return (
    <>
      <Header text="Kesehatan Telinga" />

      <InputChoice
        title="Gendang Telinga Robek"
        enumType={YES_OR_NO}
        selected={telingaGendangRobek}
        setSelected={setTelingaGendangRobek}
      />
      <InputChoice
        title="Daun Telinga Lebar Sebelah"
        enumType={YES_OR_NO}
        selected={telingaLebarSebelah}
        setSelected={setTelingaLebarSebelah}
      />
      
      <ButtonNavigation />
    </>
  );
}

export default CheckTelingaPage;
