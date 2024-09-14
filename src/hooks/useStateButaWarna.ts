import React, { useState } from "react";

import LOCAL_STORAGE_KEY from "../finals/basic/LOCAL_STORAGE_KEY";
import BUTA_WARNA from "../finals/BUTA_WARNA";

function useStateButaWarna(): [
  BUTA_WARNA | undefined,
  React.Dispatch<React.SetStateAction<BUTA_WARNA | undefined>>
] {
  return useState<BUTA_WARNA | undefined>(() => {
    const storedPage = localStorage.getItem(LOCAL_STORAGE_KEY.BUTA_WARNA);
    return storedPage &&
      Object.keys(BUTA_WARNA).includes(storedPage as BUTA_WARNA)
      ? (storedPage as BUTA_WARNA)
      : undefined;
  });
}

export default useStateButaWarna;
