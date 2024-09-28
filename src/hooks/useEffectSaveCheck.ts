import { useEffect } from "react";

import UMUR from "../finals/UMUR";
import SEKOLAH from "../finals/SEKOLAH";
import JURUSAN from "../finals/JURUSAN";
import TINGGI_BADAN from "../finals/TINGGI_BADAN";
import BUTA_WARNA from "../finals/BUTA_WARNA";
import MINUS from "../finals/MINUS";

// Kesehatan
import GIGI_OMPONG from "../finals/kesehatan/gigi/GIGI_OMPONG";
import GIGI_JUMLAH from "../finals/kesehatan/gigi/GIGI_JUMLAH";
import GIGI_RAPIH from "../finals/kesehatan/gigi/GIGI_RAPIH";
import GIGI_FRAKTUR from "../finals/kesehatan/gigi/GIGI_FRAKTUR";
import GIGI_BERJEJAL from "../finals/kesehatan/gigi/GIGI_BERJEJAL";
import GIGI_OPEN_BITE from "../finals/kesehatan/gigi/GIGI_OPEN_BITE";
import GIGI_OVER_BITE from "../finals/kesehatan/gigi/GIGI_OVER_BITE";
import GIGI_CROSS_BITE from "../finals/kesehatan/gigi/GIGI_CROSS_BITE";
import GIGI_IMPAKSI from "../finals/kesehatan/gigi/GIGI_IMPAKSI";
import GIGI_RUSAK_BERLUBANG from "../finals/kesehatan/gigi/GIGI_RUSAK_BERLUBANG";
import GIGI_BERJAMUR from "../finals/kesehatan/gigi/GIGI_BERJAMUR";
import GIGI_BERJAMUR_KUNING from "../finals/kesehatan/gigi/GIGI_BERJAMUR_KUNING";
import GIGI_ABRASI from "../finals/kesehatan/gigi/GIGI_ABRASI";
import GIGI_PALSU_LEPAS_PASANG from "../finals/kesehatan/gigi/GIGI_PALSU_LEPAS_PASANG";
import GIGI_BEHEL from "../finals/kesehatan/gigi/GIGI_BEHEL";
import GIGI_KELAINAN_SENDI from "../finals/kesehatan/gigi/GIGI_KELAINAN_SENDI";
import GIGI_TONGGOS from "../finals/kesehatan/gigi/GIGI_TONGGOS";
import GIGI_ABSES_KISTA_TUMOR_KELAINAN_KELENJAR_LUDAH from "../finals/kesehatan/gigi/GIGI_ABSES_KISTA_TUMOR_KELAINAN_KELENJAR_LUDAH";


import WAJAH_BERCAK_HITAM from "../finals/kesehatan/wajah/WAJAH_BERCAK_HITAM";

import LOCAL_STORAGE_KEY from "../finals/basic/LOCAL_STORAGE_KEY";

function useEffectSaveCheck(
  umur: UMUR | undefined,
  sekolah: SEKOLAH | undefined,
  jurusan: JURUSAN | undefined,
  tinggiBadan: TINGGI_BADAN | undefined,
  butaWarna: BUTA_WARNA | undefined,
  minus: MINUS | undefined,

  // Kesehatan
  gigiOmpong: GIGI_OMPONG | undefined,
  gigiJumlah: GIGI_JUMLAH | undefined,
  gigiRapih: GIGI_RAPIH | undefined,
  gigiFraktur: GIGI_FRAKTUR | undefined,
  gigiBerjejal: GIGI_BERJEJAL | undefined,
  gigiOpenBite: GIGI_OPEN_BITE | undefined,
  gigiOverBite: GIGI_OVER_BITE | undefined,
  gigiCrossBite: GIGI_CROSS_BITE | undefined,
  gigiRusakBerlubang: GIGI_RUSAK_BERLUBANG | undefined,
  gigiImpaksi: GIGI_IMPAKSI | undefined,
  gigiBerjamur: GIGI_BERJAMUR | undefined,
  gigiBerjamurKuning: GIGI_BERJAMUR_KUNING | undefined,
  gigiAbrasi: GIGI_ABRASI | undefined,
  gigiPalsuLepasPasang: GIGI_PALSU_LEPAS_PASANG | undefined,
  gigiBehel: GIGI_BEHEL | undefined,
  gigiKelainanSendi: GIGI_KELAINAN_SENDI | undefined,
  gigiTonggos: GIGI_TONGGOS | undefined,
  gigiAbsesKistaTumor: GIGI_ABSES_KISTA_TUMOR_KELAINAN_KELENJAR_LUDAH | undefined,

  wajahBercakHitam: WAJAH_BERCAK_HITAM | undefined
) {
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY.UMUR, umur || "");
    localStorage.setItem(LOCAL_STORAGE_KEY.SEKOLAH, sekolah || "");
    localStorage.setItem(LOCAL_STORAGE_KEY.JURUSAN, jurusan || "");
    localStorage.setItem(LOCAL_STORAGE_KEY.TINGGI_BADAN, tinggiBadan || "");
    localStorage.setItem(LOCAL_STORAGE_KEY.BUTA_WARNA, butaWarna || "");
    localStorage.setItem(LOCAL_STORAGE_KEY.MINUS, minus || "");

    // Kesehatan
    localStorage.setItem(LOCAL_STORAGE_KEY.GIGI_OMPONG, gigiOmpong || "");
    localStorage.setItem(LOCAL_STORAGE_KEY.GIGI_JUMLAH, gigiJumlah || "");
    localStorage.setItem(LOCAL_STORAGE_KEY.GIGI_RAPIH, gigiRapih || "");
    localStorage.setItem(LOCAL_STORAGE_KEY.GIGI_FRAKTUR, gigiFraktur || "");
    localStorage.setItem(LOCAL_STORAGE_KEY.GIGI_BERJEJAL, gigiBerjejal || "");
    localStorage.setItem(LOCAL_STORAGE_KEY.GIGI_OPEN_BITE, gigiOpenBite || "");
    localStorage.setItem(LOCAL_STORAGE_KEY.GIGI_OVER_BITE, gigiOverBite || "");
    localStorage.setItem(LOCAL_STORAGE_KEY.GIGI_CROSS_BITE, gigiCrossBite || "");
    localStorage.setItem(LOCAL_STORAGE_KEY.GIGI_IMPAKSI, gigiImpaksi || "");
    localStorage.setItem(LOCAL_STORAGE_KEY.GIGI_RUSAK_BERLUBANG, gigiRusakBerlubang || "");
    localStorage.setItem(LOCAL_STORAGE_KEY.GIGI_BERJAMUR, gigiBerjamur || "");
    localStorage.setItem(LOCAL_STORAGE_KEY.GIGI_BERJAMUR_KUNING, gigiBerjamurKuning || "");
    localStorage.setItem(LOCAL_STORAGE_KEY.GIGI_ABRASI, gigiAbrasi || "");
    localStorage.setItem(LOCAL_STORAGE_KEY.GIGI_PALSU_LEPAS_PASANG, gigiPalsuLepasPasang || "");
    localStorage.setItem(LOCAL_STORAGE_KEY.GIGI_BEHEL, gigiBehel || "");
    localStorage.setItem(LOCAL_STORAGE_KEY.GIGI_KELAINAN_SENDI, gigiKelainanSendi || "");
    localStorage.setItem(LOCAL_STORAGE_KEY.GIGI_TONGGOS, gigiTonggos || "");
    localStorage.setItem(LOCAL_STORAGE_KEY.GIGI_ABSES_KISTA_TUMOR_KELAINAN_KELENJAR_LUDAH, gigiAbsesKistaTumor || "");


    localStorage.setItem(
      LOCAL_STORAGE_KEY.WAJAH_BERCAK_HITAM,
      wajahBercakHitam || ""
    );
  }, [
    // Basic
    umur,
    sekolah,
    jurusan,
    tinggiBadan,
    butaWarna,
    minus,

    // Kesehatan
    gigiOmpong,
    gigiJumlah,
    gigiRapih,
    gigiFraktur,
    gigiBerjejal,
    gigiOpenBite,
    gigiOverBite,
    gigiCrossBite,
    gigiImpaksi,
    gigiRusakBerlubang,
    gigiBerjamur,
    gigiBerjamurKuning,
    gigiAbrasi,
    gigiPalsuLepasPasang,
    gigiBehel,
    gigiKelainanSendi,
    gigiTonggos,
    gigiAbsesKistaTumor,

    wajahBercakHitam,
  ]);
}

export default useEffectSaveCheck;
