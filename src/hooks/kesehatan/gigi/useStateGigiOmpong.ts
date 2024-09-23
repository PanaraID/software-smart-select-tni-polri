import React, { useState } from "react";

import LOCAL_STORAGE_KEY from "../../../finals/basic/LOCAL_STORAGE_KEY";
import GIGI_OMPONG from "../../../finals/kesehatan/gigi/GIGI_OMPONG";

function useStateGigiOmpong(): [
  GIGI_OMPONG | undefined,
  React.Dispatch<React.SetStateAction<GIGI_OMPONG | undefined>>
] {
  return useState<GIGI_OMPONG | undefined>(() => {
    const storedPage = localStorage.getItem(LOCAL_STORAGE_KEY.GIGI_OMPONG);
    return storedPage && Object.keys(GIGI_OMPONG).includes(storedPage as GIGI_OMPONG)
      ? (storedPage as GIGI_OMPONG)
      : undefined;
  });
}

export default useStateGigiOmpong;
