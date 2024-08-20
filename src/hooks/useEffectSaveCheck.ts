import { useEffect } from "react";

import MATRA from "../finals/MATRA.ts";
import BUTA_WARNA from "../finals/BUTA_WARNA.ts";
import MINUS from "../finals/MINUS.ts";

import LOCAL_STORAGE_KEY from "../finals/basic/LOCAL_STORAGE_KEY.ts";

function useEffectSaveCheck(
  matra: MATRA | undefined,
  butaWarna: BUTA_WARNA | undefined,
  minus: MINUS | undefined
) {
  return useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY.MATRA, matra || "");
    localStorage.setItem(LOCAL_STORAGE_KEY.BUTA_WARNA, butaWarna || "");
    localStorage.setItem(LOCAL_STORAGE_KEY.MINUS, minus || "");
  }, [matra, butaWarna, minus]);
}

export default useEffectSaveCheck;
