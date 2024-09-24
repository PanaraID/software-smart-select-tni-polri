import React, { useState } from "react";

import LOCAL_STORAGE_KEY from "../../../finals/basic/LOCAL_STORAGE_KEY";
import GIGI_OPEN_BITE from "../../../finals/kesehatan/gigi/GIGI_OPEN_BITE";

function useStateGigiOpenBite(): [
  GIGI_OPEN_BITE | undefined,
  React.Dispatch<React.SetStateAction<GIGI_OPEN_BITE | undefined>>
] {
  return useState<GIGI_OPEN_BITE | undefined>(() => {
    const storedPage = localStorage.getItem(LOCAL_STORAGE_KEY.GIGI_OPEN_BITE);
    return storedPage && Object.keys(GIGI_OPEN_BITE).includes(storedPage as GIGI_OPEN_BITE)
      ? (storedPage as GIGI_OPEN_BITE)
      : undefined;
  });
}

export default useStateGigiOpenBite;
