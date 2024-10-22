import { useContext } from "react";

import AppContext from "../../context/AppContext";
import Header from "../../partials/Header";

import YES_OR_NO from "../../finals/basic/YES_OR_NO";
import JUMLAH_TESTIS from "../../finals/kesehatan/lainnya/JUMLAH_TESTIS";
import KONDISI_ALAT_REPRODUKSI from "../../finals/kesehatan/lainnya/KONDISI_ALAT_REPRODUKSI";


import InputChoice from "../../partials/InputChoice";

import ButtonNavigation from "../../partials/button-navigation/ButtonNavigation";

function CheckKesehatanTambahanPage() {
  const {
    ambeyen,
    setAmbeyen,

    varikokel,
    setVarikokel,

    herniaScrotalis,
    setHerniaScrotalis,

    jumlahTestis,
    setJumlahTestis,

    kondisiAlatReproduksi,
    setKondisiAlatReproduksi
  } = useContext(AppContext);

  return (
    <>
      <Header text="Kesehatan Tambahan Lainnya" />

      <InputChoice
        title="Ambeyen"
        enumType={YES_OR_NO}
        selected={ambeyen}
        setSelected={setAmbeyen}
      />
      <InputChoice
        title="Hernia Scrotalis"
        enumType={YES_OR_NO}
        selected={herniaScrotalis}
        setSelected={setHerniaScrotalis}
      />
      <InputChoice
        title="Varikokel"
        enumType={YES_OR_NO}
        selected={varikokel}
        setSelected={setVarikokel}
      />
      <InputChoice
        title="Jumlah Testis"
        enumType={JUMLAH_TESTIS}
        selected={jumlahTestis}
        setSelected={setJumlahTestis}
      />
      <InputChoice
        title="Kondisi Alat Reproduksi"
        enumType={KONDISI_ALAT_REPRODUKSI}
        selected={kondisiAlatReproduksi}
        setSelected={setKondisiAlatReproduksi}
      />
      
      <ButtonNavigation />
    </>
  );
}

export default CheckKesehatanTambahanPage;
