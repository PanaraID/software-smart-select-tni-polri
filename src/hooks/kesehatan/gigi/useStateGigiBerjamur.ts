import React, { useState } from "react";

import LOCAL_STORAGE_KEY from "../../../finals/basic/LOCAL_STORAGE_KEY";
import GIGI_BERJAMUR from "../../../finals/kesehatan/gigi/GIGI_BERJAMUR";

function useStateGigiBerjamur(): [
  GIGI_BERJAMUR | undefined,
  React.Dispatch<React.SetStateAction<GIGI_BERJAMUR | undefined>>
] {
  return useState<GIGI_BERJAMUR | undefined>(() => {
    const storedPage = localStorage.getItem(LOCAL_STORAGE_KEY.GIGI_BERJAMUR);
    return storedPage && Object.keys(GIGI_BERJAMUR).includes(storedPage as GIGI_BERJAMUR)
      ? (storedPage as GIGI_BERJAMUR)
      : undefined;
  });
}

export default useStateGigiBerjamur;
