import { useContext } from "react";

import AppContext from "../../context/AppContext";
import Header from "../../partials/Header";

import YES_OR_NO from "../../finals/basic/YES_OR_NO";

import InputChoice from "../../partials/InputChoice";

import ButtonNavigation from "../../partials/button-navigation/ButtonNavigation";
import BENTUK_KEPALA from "../../finals/kesehatan/bagian-kepala/BENTUK_KEPALA";

function CheckBagianKepalaPage() {
  const { 
    kepalaRiwayatBekasLukaOperasi,
    setKepalaRiwayatBekasLukaOperasi,

    kepalaBentuk,
    setKepalaBentuk,
  } = useContext(AppContext);

  return (
    <>
      <Header text="Bagian Kepala" />

      <InputChoice
        title="Riwayat Bekas Luka Operasi"
        enumType={YES_OR_NO}
        selected={kepalaRiwayatBekasLukaOperasi}
        setSelected={setKepalaRiwayatBekasLukaOperasi}
      />
      <InputChoice
        title="Bentuk Kepala"
        enumType={BENTUK_KEPALA}
        selected={kepalaBentuk}
        setSelected={setKepalaBentuk}
      />
      
      <ButtonNavigation />
    </>
  );
}

export default CheckBagianKepalaPage;
