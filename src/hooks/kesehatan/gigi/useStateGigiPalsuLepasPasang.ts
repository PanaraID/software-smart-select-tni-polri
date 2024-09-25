import React, { useState } from "react";

import LOCAL_STORAGE_KEY from "../../../finals/basic/LOCAL_STORAGE_KEY";
import GIGI_PALSU_LEPAS_PASANG from "../../../finals/kesehatan/gigi/GIGI_PALSU_LEPAS_PASANG";

function useStateGigiPalsuLepasPasang(): [
  GIGI_PALSU_LEPAS_PASANG | undefined,
  React.Dispatch<React.SetStateAction<GIGI_PALSU_LEPAS_PASANG | undefined>>
] {
  return useState<GIGI_PALSU_LEPAS_PASANG | undefined>(() => {
    const storedPage = localStorage.getItem(LOCAL_STORAGE_KEY.GIGI_PALSU_LEPAS_PASANG);
    return storedPage && Object.keys(GIGI_PALSU_LEPAS_PASANG).includes(storedPage as GIGI_PALSU_LEPAS_PASANG)
      ? (storedPage as GIGI_PALSU_LEPAS_PASANG)
      : undefined;
  });
}

export default useStateGigiPalsuLepasPasang;
