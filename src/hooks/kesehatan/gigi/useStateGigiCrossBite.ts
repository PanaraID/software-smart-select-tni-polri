import React, { useState } from "react";

import LOCAL_STORAGE_KEY from "../../../finals/basic/LOCAL_STORAGE_KEY";
import GIGI_CROSS_BITE from "../../../finals/kesehatan/gigi/GIGI_CROSS_BITE";

function useStateGigiCrossBite(): [
  GIGI_CROSS_BITE | undefined,
  React.Dispatch<React.SetStateAction<GIGI_CROSS_BITE | undefined>>
] {
  return useState<GIGI_CROSS_BITE | undefined>(() => {
    const storedPage = localStorage.getItem(LOCAL_STORAGE_KEY.GIGI_CROSS_BITE);
    return storedPage && Object.keys(GIGI_CROSS_BITE).includes(storedPage as GIGI_CROSS_BITE)
      ? (storedPage as GIGI_CROSS_BITE)
      : undefined;
  });
}

export default useStateGigiCrossBite;
