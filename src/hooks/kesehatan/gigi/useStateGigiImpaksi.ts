import React, { useState } from "react";

import LOCAL_STORAGE_KEY from "../../../finals/basic/LOCAL_STORAGE_KEY";
import GIGI_IMPAKSI from "../../../finals/kesehatan/gigi/GIGI_IMPAKSI";

function useStateGigiImpaksi(): [
  GIGI_IMPAKSI | undefined,
  React.Dispatch<React.SetStateAction<GIGI_IMPAKSI | undefined>>
] {
  return useState<GIGI_IMPAKSI | undefined>(() => {
    const storedPage = localStorage.getItem(LOCAL_STORAGE_KEY.GIGI_IMPAKSI);
    return storedPage && Object.keys(GIGI_IMPAKSI).includes(storedPage as GIGI_IMPAKSI)
      ? (storedPage as GIGI_IMPAKSI)
      : undefined;
  });
}

export default useStateGigiImpaksi;
