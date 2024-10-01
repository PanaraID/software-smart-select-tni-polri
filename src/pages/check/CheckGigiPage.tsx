import { useContext } from "react";

import AppContext from "../../context/AppContext";
import Header from "../../partials/Header";

import GIGI_OMPONG from "../../finals/kesehatan/gigi/GIGI_OMPONG";
import GIGI_JUMLAH from "../../finals/kesehatan/gigi/GIGI_JUMLAH";
import GIGI_RAPIH from "../../finals/kesehatan/gigi/GIGI_RAPIH";
import GIGI_FRAKTUR from "../../finals/kesehatan/gigi/GIGI_FRAKTUR";
import YES_OR_NO from "../../finals/basic/YES_OR_NO";

import InputChoice from "../../partials/InputChoice";
import ButtonNavigation from "../../partials/button-navigation/ButtonNavigation";

function CheckGigiPage() {
  const { 
    gigiOmpong, setGigiOmpong,
    gigiJumlah, setGigiJumlah,
    gigiRapih, setGigiRapih,
    gigiFraktur, setGigiFraktur,
    gigiBerjejal, setGigiBerjejal,
    gigiOpenBite, setGigiOpenBite,
    gigiOverBite, setGigiOverBite,
    gigiCrossBite, setGigiCrossBite,
    gigiImpaksi, setGigiImpaksi,
    gigiRusakBerlubang, setGigiRusakBerlubang,
    gigiBerjamur, setGigiBerjamur,
    gigiBerjamurKuning, setGigiBerjamurKuning,
    gigiAbrasi, setGigiAbrasi,
    gigiPalsuLepasPasang, setGigiPalsuLepasPasang,
    gigiBehel, setGigiBehel,
    gigiKelainanSendi, setGigiKelainanSendi,
    gigiTonggos, setGigiTonggos,
    gigiAbsesKistaTumor, setGigiAbsesKistaTumor,
  } = useContext(AppContext);

  return (
    <>
      <Header text="Kesehatan Gigi" />

      <InputChoice
        title="Kriteria Ompong"
        enumType={GIGI_OMPONG}
        selected={gigiOmpong}
        setSelected={setGigiOmpong}
      />
      <InputChoice
        title="Kriteria Jumlah Gigi"
        enumType={GIGI_JUMLAH}
        selected={gigiJumlah}
        setSelected={setGigiJumlah}
      />

      <hr />

      <InputChoice
        title="Gigi Rapih"
        enumType={GIGI_RAPIH}
        selected={gigiRapih}
        setSelected={setGigiRapih}
      />
      <InputChoice
        title="Fraktur Gigi"
        enumType={GIGI_FRAKTUR}
        selected={gigiFraktur}
        setSelected={setGigiFraktur}
      />

      <hr />
      
      <InputChoice
        title="Gigi Crowding/Berjejal"
        enumType={YES_OR_NO}
        selected={gigiBerjejal}
        setSelected={setGigiBerjejal}
      />
      <InputChoice
        title="Gigi Open Bite"
        enumType={YES_OR_NO}
        selected={gigiOpenBite}
        setSelected={setGigiOpenBite}
      />
      <InputChoice
        title="Gigi Over Bite"
        enumType={YES_OR_NO}
        selected={gigiOverBite}
        setSelected={setGigiOverBite}
      />
      <InputChoice
        title="Gigi Cross Bite"
        enumType={YES_OR_NO}
        selected={gigiCrossBite}
        setSelected={setGigiCrossBite}
      />
      
      <hr />

      <InputChoice
        title="Gigi Impaksi"
        enumType={YES_OR_NO}
        selected={gigiImpaksi}
        setSelected={setGigiImpaksi}
      />
      <InputChoice
        title="Gigi Rusak/Berlubang"
        enumType={YES_OR_NO}
        selected={gigiRusakBerlubang}
        setSelected={setGigiRusakBerlubang}
      />
      <InputChoice
        title="Gigi Berjamur"
        enumType={YES_OR_NO}
        selected={gigiBerjamur}
        setSelected={setGigiBerjamur}
      />
      <InputChoice
        title="Gigi Berjamur Kuning"
        enumType={YES_OR_NO}
        selected={gigiBerjamurKuning}
        setSelected={setGigiBerjamurKuning}
      />
      <InputChoice
        title="Gigi Abrasi"
        enumType={YES_OR_NO}
        selected={gigiAbrasi}
        setSelected={setGigiAbrasi}
      />
      <InputChoice
        title="Gigi Palsu Lepas Pasang"
        enumType={YES_OR_NO}
        selected={gigiPalsuLepasPasang}
        setSelected={setGigiPalsuLepasPasang}
      />
      <InputChoice
        title="Gigi Behel"
        enumType={YES_OR_NO}
        selected={gigiBehel}
        setSelected={setGigiBehel}
      />
      <InputChoice
        title="Kelainan Sendi"
        enumType={YES_OR_NO}
        selected={gigiKelainanSendi}
        setSelected={setGigiKelainanSendi}
      />
      <InputChoice
        title="Gigi Tonggos"
        enumType={YES_OR_NO}
        selected={gigiTonggos}
        setSelected={setGigiTonggos}
      />
      <InputChoice
        title="Abses/Kista/Tumor/Kelainan Kelenjar Ludah"
        enumType={YES_OR_NO}
        selected={gigiAbsesKistaTumor}
        setSelected={setGigiAbsesKistaTumor}
      />

      <ButtonNavigation />
    </>
  );
}

export default CheckGigiPage;
