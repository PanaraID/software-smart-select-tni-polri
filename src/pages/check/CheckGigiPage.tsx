import { useContext } from "react";

import AppContext from "../../context/AppContext";
import Header from "../../partials/Header";

import GIGI_OMPONG from "../../finals/kesehatan/gigi/GIGI_OMPONG";
import GIGI_JUMLAH from "../../finals/kesehatan/gigi/GIGI_JUMLAH";
import GIGI_RAPIH from "../../finals/kesehatan/gigi/GIGI_RAPIH";
import GIGI_FRAKTUR from "../../finals/kesehatan/gigi/GIGI_FRAKTUR";
import GIGI_BERJEJAL from "../../finals/kesehatan/gigi/GIGI_BERJEJAL";
import GIGI_OPEN_BITE from "../../finals/kesehatan/gigi/GIGI_OPEN_BITE";
import GIGI_OVER_BITE from "../../finals/kesehatan/gigi/GIGI_OVER_BITE";
import GIGI_CROSS_BITE from "../../finals/kesehatan/gigi/GIGI_CROSS_BITE";
import GIGI_IMPAKSI from "../../finals/kesehatan/gigi/GIGI_IMPAKSI";
import GIGI_RUSAK_BERLUBANG from "../../finals/kesehatan/gigi/GIGI_RUSAK_BERLUBANG";
import GIGI_BERJAMUR from "../../finals/kesehatan/gigi/GIGI_BERJAMUR";
import GIGI_BERJAMUR_KUNING from "../../finals/kesehatan/gigi/GIGI_BERJAMUR_KUNING";
import GIGI_ABRASI from "../../finals/kesehatan/gigi/GIGI_ABRASI";
import GIGI_PALSU_LEPAS_PASANG from "../../finals/kesehatan/gigi/GIGI_PALSU_LEPAS_PASANG";
import GIGI_BEHEL from "../../finals/kesehatan/gigi/GIGI_BEHEL";
import GIGI_KELAINAN_SENDI from "../../finals/kesehatan/gigi/GIGI_KELAINAN_SENDI";
import GIGI_TONGGOS from "../../finals/kesehatan/gigi/GIGI_TONGGOS";
import GIGI_ABSES_KISTA_TUMOR_KELAINAN_KELENJAR_LUDAH from "../../finals/kesehatan/gigi/GIGI_ABSES_KISTA_TUMOR_KELAINAN_KELENJAR_LUDAH";

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
        enumType={GIGI_BERJEJAL}
        selected={gigiBerjejal}
        setSelected={setGigiBerjejal}
      />
      <InputChoice
        title="Gigi Open Bite"
        enumType={GIGI_OPEN_BITE}
        selected={gigiOpenBite}
        setSelected={setGigiOpenBite}
      />
      <InputChoice
        title="Gigi Over Bite"
        enumType={GIGI_OVER_BITE}
        selected={gigiOverBite}
        setSelected={setGigiOverBite}
      />
      <InputChoice
        title="Gigi Cross Bite"
        enumType={GIGI_CROSS_BITE}
        selected={gigiCrossBite}
        setSelected={setGigiCrossBite}
      />
      
      <hr />

      <InputChoice
        title="Gigi Impaksi"
        enumType={GIGI_IMPAKSI}
        selected={gigiImpaksi}
        setSelected={setGigiImpaksi}
      />
      <InputChoice
        title="Gigi Rusak/Berlubang"
        enumType={GIGI_RUSAK_BERLUBANG}
        selected={gigiRusakBerlubang}
        setSelected={setGigiRusakBerlubang}
      />
      <InputChoice
        title="Gigi Berjamur"
        enumType={GIGI_BERJAMUR}
        selected={gigiBerjamur}
        setSelected={setGigiBerjamur}
      />
      <InputChoice
        title="Gigi Berjamur Kuning"
        enumType={GIGI_BERJAMUR_KUNING}
        selected={gigiBerjamurKuning}
        setSelected={setGigiBerjamurKuning}
      />
      <InputChoice
        title="Gigi Abrasi"
        enumType={GIGI_ABRASI}
        selected={gigiAbrasi}
        setSelected={setGigiAbrasi}
      />
      <InputChoice
        title="Gigi Palsu Lepas Pasang"
        enumType={GIGI_PALSU_LEPAS_PASANG}
        selected={gigiPalsuLepasPasang}
        setSelected={setGigiPalsuLepasPasang}
      />
      <InputChoice
        title="Gigi Behel"
        enumType={GIGI_BEHEL}
        selected={gigiBehel}
        setSelected={setGigiBehel}
      />
      <InputChoice
        title="Kelainan Sendi"
        enumType={GIGI_KELAINAN_SENDI}
        selected={gigiKelainanSendi}
        setSelected={setGigiKelainanSendi}
      />
      <InputChoice
        title="Gigi Tonggos"
        enumType={GIGI_TONGGOS}
        selected={gigiTonggos}
        setSelected={setGigiTonggos}
      />
      <InputChoice
        title="Abses/Kista/Tumor/Kelainan Kelenjar Ludah"
        enumType={GIGI_ABSES_KISTA_TUMOR_KELAINAN_KELENJAR_LUDAH}
        selected={gigiAbsesKistaTumor}
        setSelected={setGigiAbsesKistaTumor}
      />

      <ButtonNavigation />
    </>
  );
}

export default CheckGigiPage;
