import React, { useState } from "react";

import LOCAL_STORAGE_KEY from "../../../finals/basic/LOCAL_STORAGE_KEY";
import GIGI_BERJAMUR_KUNING from "../../../finals/kesehatan/gigi/GIGI_BERJAMUR_KUNING";

function useStateGigiBerjamurKuning(): [
  GIGI_BERJAMUR_KUNING | undefined,
  React.Dispatch<React.SetStateAction<GIGI_BERJAMUR_KUNING | undefined>>
] {
  return useState<GIGI_BERJAMUR_KUNING | undefined>(() => {
    const storedPage = localStorage.getItem(LOCAL_STORAGE_KEY.GIGI_BERJAMUR_KUNING);
    return storedPage && Object.keys(GIGI_BERJAMUR_KUNING).includes(storedPage as GIGI_BERJAMUR_KUNING)
      ? (storedPage as GIGI_BERJAMUR_KUNING)
      : undefined;
  });
}

export default useStateGigiBerjamurKuning;
