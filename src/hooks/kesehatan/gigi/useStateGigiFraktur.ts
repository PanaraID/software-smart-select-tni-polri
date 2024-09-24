import React, { useState } from "react";

import LOCAL_STORAGE_KEY from "../../../finals/basic/LOCAL_STORAGE_KEY";
import GIGI_FRAKTUR from "../../../finals/kesehatan/gigi/GIGI_FRAKTUR";

function useStateGigiJumlah(): [
  GIGI_FRAKTUR | undefined,
  React.Dispatch<React.SetStateAction<GIGI_FRAKTUR | undefined>>
] {
  return useState<GIGI_FRAKTUR | undefined>(() => {
    const storedPage = localStorage.getItem(LOCAL_STORAGE_KEY.GIGI_FRAKTUR);
    return storedPage && Object.keys(GIGI_FRAKTUR).includes(storedPage as GIGI_FRAKTUR)
      ? (storedPage as GIGI_FRAKTUR)
      : undefined;
  });
}

export default useStateGigiJumlah;
