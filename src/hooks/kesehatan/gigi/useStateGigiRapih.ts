import React, { useState } from "react";

import LOCAL_STORAGE_KEY from "../../../finals/basic/LOCAL_STORAGE_KEY";
import GIGI_RAPIH from "../../../finals/kesehatan/gigi/GIGI_RAPIH";

function useStateGigiRapih(): [
  GIGI_RAPIH | undefined,
  React.Dispatch<React.SetStateAction<GIGI_RAPIH | undefined>>
] {
  return useState<GIGI_RAPIH | undefined>(() => {
    const storedPage = localStorage.getItem(LOCAL_STORAGE_KEY.GIGI_RAPIH);
    return storedPage && Object.keys(GIGI_RAPIH).includes(storedPage as GIGI_RAPIH)
      ? (storedPage as GIGI_RAPIH)
      : undefined;
  });
}

export default useStateGigiRapih;
