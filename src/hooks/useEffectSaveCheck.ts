import { useEffect } from "react";

import UMUR from "../finals/UMUR";
import SEKOLAH from "../finals/SEKOLAH";
import JURUSAN from "../finals/JURUSAN";
import BUTA_WARNA from "../finals/BUTA_WARNA";
import MINUS from "../finals/MINUS";

import LOCAL_STORAGE_KEY from "../finals/basic/LOCAL_STORAGE_KEY";

function useEffectSaveCheck(
  umur: UMUR | undefined,
  sekolah: SEKOLAH | undefined,
  jurusan: JURUSAN | undefined,
  butaWarna: BUTA_WARNA | undefined,
  minus: MINUS | undefined
) {
  return useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY.UMUR, umur || "");
    localStorage.setItem(LOCAL_STORAGE_KEY.SEKOLAH, sekolah || "");
    localStorage.setItem(LOCAL_STORAGE_KEY.JURUSAN, jurusan || "");
    localStorage.setItem(LOCAL_STORAGE_KEY.BUTA_WARNA, butaWarna || "");
    localStorage.setItem(LOCAL_STORAGE_KEY.MINUS, minus || "");
  }, [umur, sekolah, jurusan, butaWarna, minus]);
}

export default useEffectSaveCheck;
