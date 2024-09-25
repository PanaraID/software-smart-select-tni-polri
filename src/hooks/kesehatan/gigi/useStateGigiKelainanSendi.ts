import React, { useState } from "react";

import LOCAL_STORAGE_KEY from "../../../finals/basic/LOCAL_STORAGE_KEY";
import GIGI_KELAINAN_SENDI from "../../../finals/kesehatan/gigi/GIGI_KELAINAN_SENDI";

function useStateGigiKelainanSendi(): [
  GIGI_KELAINAN_SENDI | undefined,
  React.Dispatch<React.SetStateAction<GIGI_KELAINAN_SENDI | undefined>>
] {
  return useState<GIGI_KELAINAN_SENDI | undefined>(() => {
    const storedPage = localStorage.getItem(LOCAL_STORAGE_KEY.GIGI_KELAINAN_SENDI);
    return storedPage && Object.keys(GIGI_KELAINAN_SENDI).includes(storedPage as GIGI_KELAINAN_SENDI)
      ? (storedPage as GIGI_KELAINAN_SENDI)
      : undefined;
  });
}

export default useStateGigiKelainanSendi;
