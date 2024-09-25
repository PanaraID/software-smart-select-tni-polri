import React, { useState } from "react";

import LOCAL_STORAGE_KEY from "../../../finals/basic/LOCAL_STORAGE_KEY";
import GIGI_ABRASI from "../../../finals/kesehatan/gigi/GIGI_ABRASI";

function useStateGigiAbrasi(): [
  GIGI_ABRASI | undefined,
  React.Dispatch<React.SetStateAction<GIGI_ABRASI | undefined>>
] {
  return useState<GIGI_ABRASI | undefined>(() => {
    const storedPage = localStorage.getItem(LOCAL_STORAGE_KEY.GIGI_ABRASI);
    return storedPage && Object.keys(GIGI_ABRASI).includes(storedPage as GIGI_ABRASI)
      ? (storedPage as GIGI_ABRASI)
      : undefined;
  });
}

export default useStateGigiAbrasi;
