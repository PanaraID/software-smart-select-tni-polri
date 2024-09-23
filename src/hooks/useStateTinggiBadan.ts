import React, { useState } from "react";

import LOCAL_STORAGE_KEY from "../finals/basic/LOCAL_STORAGE_KEY";
import TINGGI_BADAN from "../finals/TINGGI_BADAN";

function useStateTinggiBadan(): [
  TINGGI_BADAN | undefined,
  React.Dispatch<React.SetStateAction<TINGGI_BADAN | undefined>>
] {
  return useState<TINGGI_BADAN | undefined>(() => {
    const storedPage = localStorage.getItem(LOCAL_STORAGE_KEY.TINGGI_BADAN);
    return storedPage &&
      Object.keys(TINGGI_BADAN).includes(storedPage as TINGGI_BADAN)
      ? (storedPage as TINGGI_BADAN)
      : undefined;
  });
}

export default useStateTinggiBadan;
