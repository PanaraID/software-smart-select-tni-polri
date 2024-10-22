import React, { useState } from "react";

import LOCAL_STORAGE_KEY from "../../../finals/basic/LOCAL_STORAGE_KEY";
import JUMLAH_TESTIS from "../../../finals/kesehatan/lainnya/JUMLAH_TESTIS";

function useStateJumlahTestis(): [
  JUMLAH_TESTIS | undefined,
  React.Dispatch<React.SetStateAction<JUMLAH_TESTIS | undefined>>
] {
  return useState<JUMLAH_TESTIS | undefined>(() => {
    const storedPage = localStorage.getItem(LOCAL_STORAGE_KEY.JUMLAH_TESTIS);
    return storedPage && Object.keys(JUMLAH_TESTIS).includes(storedPage as JUMLAH_TESTIS)
      ? (storedPage as JUMLAH_TESTIS)
      : undefined;
  });
}

export default useStateJumlahTestis;
