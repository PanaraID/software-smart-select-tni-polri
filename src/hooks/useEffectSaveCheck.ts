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

  wajahBercakHitam: WAJAH_BERCAK_HITAM | undefined
) {
  return useEffect(() => {
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

    localStorage.setItem(LOCAL_STORAGE_KEY.WAJAH_BERCAK_HITAM, wajahBercakHitam || "");
  }, [
    // Basic
    umur, sekolah, jurusan, tinggiBadan, butaWarna, minus, 
    
    // Kesehatan
    gigiOmpong, gigiJumlah, gigiRapih, gigiFraktur,
    wajahBercakHitam
  ]);
}

export default useEffectSaveCheck;
