import React, { useState } from "react";

import LOCAL_STORAGE_KEY from "../../../finals/basic/LOCAL_STORAGE_KEY";
import GIGI_OVER_BITE from "../../../finals/kesehatan/gigi/GIGI_OVER_BITE";

function useStateGigiOverBite(): [
  GIGI_OVER_BITE | undefined,
  React.Dispatch<React.SetStateAction<GIGI_OVER_BITE | undefined>>
] {
  return useState<GIGI_OVER_BITE | undefined>(() => {
    const storedPage = localStorage.getItem(LOCAL_STORAGE_KEY.GIGI_OVER_BITE);
    return storedPage && Object.keys(GIGI_OVER_BITE).includes(storedPage as GIGI_OVER_BITE)
      ? (storedPage as GIGI_OVER_BITE)
      : undefined;
  });
}

export default useStateGigiOverBite;
