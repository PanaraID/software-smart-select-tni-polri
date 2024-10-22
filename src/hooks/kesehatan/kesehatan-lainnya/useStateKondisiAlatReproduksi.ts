import React, { useState } from "react";

import LOCAL_STORAGE_KEY from "../../../finals/basic/LOCAL_STORAGE_KEY";
import KONDISI_ALAT_REPRODUKSI from "../../../finals/kesehatan/lainnya/KONDISI_ALAT_REPRODUKSI";

function useStateKondisiAlatReproduksi(): [
  KONDISI_ALAT_REPRODUKSI | undefined,
  React.Dispatch<React.SetStateAction<KONDISI_ALAT_REPRODUKSI | undefined>>
] {
  return useState<KONDISI_ALAT_REPRODUKSI | undefined>(() => {
    const storedPage = localStorage.getItem(LOCAL_STORAGE_KEY.KONDISI_ALAT_REPRODUKSI);
    return storedPage && Object.keys(KONDISI_ALAT_REPRODUKSI).includes(storedPage as KONDISI_ALAT_REPRODUKSI)
      ? (storedPage as KONDISI_ALAT_REPRODUKSI)
      : undefined;
  });
}

export default useStateKondisiAlatReproduksi;
