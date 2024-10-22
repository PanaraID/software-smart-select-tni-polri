import { useContext } from "react";

import AppContext from "../../context/AppContext";
import Header from "../../partials/Header";

import YES_OR_NO from "../../finals/basic/YES_OR_NO";

import InputChoice from "../../partials/InputChoice";

import ButtonNavigation from "../../partials/button-navigation/ButtonNavigation";

function CheckBagianTanganPage() {
  const { 
    tanganJariLeherAngsa,
    setTanganJariLeherAngsa,

    tanganKelainanBoutonniere,
    setTanganKelainanBoutonniere,

    tanganKelainanDopuytren,
    setTanganKelainanDopuytren,

    tanganBerkeringat,
    setTanganBerkeringat,

    tanganPanjangSebelah,
    setTanganPanjangSebelah,

    tanganGemetarSaatDiluruskan,
    setTanganGemetarSaatDiluruskan,
  } = useContext(AppContext);

  return (
    <>
      <Header text="Bagian Tangan" />

      <InputChoice
        title="Jari Leher Angsa"
        enumType={YES_OR_NO}
        selected={tanganJariLeherAngsa}
        setSelected={setTanganJariLeherAngsa}
      />
      <InputChoice
        title="Kelainan Boutonniere"
        enumType={YES_OR_NO}
        selected={tanganKelainanBoutonniere}
        setSelected={setTanganKelainanBoutonniere}
      />
      <InputChoice
        title="Kelainan Dopuytren"
        enumType={YES_OR_NO}
        selected={tanganKelainanDopuytren}
        setSelected={setTanganKelainanDopuytren}
      />
      <InputChoice
        title="Telapak Tangan Berkeringat"
        enumType={YES_OR_NO}
        selected={tanganBerkeringat}
        setSelected={setTanganBerkeringat}
      />
      <InputChoice
        title="Tangan Panjang Sebelah"
        enumType={YES_OR_NO}
        selected={tanganPanjangSebelah}
        setSelected={setTanganPanjangSebelah}
      />
      <InputChoice
        title="Tangan Gemetar Saat Diluruskan"
        enumType={YES_OR_NO}
        selected={tanganGemetarSaatDiluruskan}
        setSelected={setTanganGemetarSaatDiluruskan}
      />
      
      <ButtonNavigation />
    </>
  );
}

export default CheckBagianTanganPage;
