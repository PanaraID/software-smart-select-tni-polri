import React, { useState } from "react";

import LOCAL_STORAGE_KEY from "../finals/basic/LOCAL_STORAGE_KEY";
import UMUR from "../finals/UMUR";

function useStateButaWarna(): [
  UMUR | undefined,
  React.Dispatch<React.SetStateAction<UMUR | undefined>>
] {
  return useState<UMUR | undefined>(() => {
    const storedPage = localStorage.getItem(LOCAL_STORAGE_KEY.UMUR);
    return storedPage && Object.keys(UMUR).includes(storedPage as UMUR)
      ? (storedPage as UMUR)
      : undefined;
  });
}

export default useStateButaWarna;
