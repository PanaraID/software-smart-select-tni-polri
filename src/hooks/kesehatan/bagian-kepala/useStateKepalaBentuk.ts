import React, { useState } from "react";

import LOCAL_STORAGE_KEY from "../../../finals/basic/LOCAL_STORAGE_KEY";
import BENTUK_KEPALA from "../../../finals/kesehatan/bagian-kepala/BENTUK_KEPALA";

function useStateKepalaBentuk(): [
  BENTUK_KEPALA | undefined,
  React.Dispatch<React.SetStateAction<BENTUK_KEPALA | undefined>>
] {
  return useState<BENTUK_KEPALA | undefined>(() => {
    const storedPage = localStorage.getItem(LOCAL_STORAGE_KEY.KEPALA_BENTUK_KEPALA);
    return storedPage && Object.keys(BENTUK_KEPALA).includes(storedPage as BENTUK_KEPALA)
      ? (storedPage as BENTUK_KEPALA)
      : undefined;
  });
}

export default useStateKepalaBentuk;
