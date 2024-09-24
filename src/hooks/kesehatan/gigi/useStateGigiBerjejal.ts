import React, { useState } from "react";

import LOCAL_STORAGE_KEY from "../../../finals/basic/LOCAL_STORAGE_KEY";
import GIGI_BERJEJAL from "../../../finals/kesehatan/gigi/GIGI_BERJEJAL";

function useStateGigiBerjejal(): [
  GIGI_BERJEJAL | undefined,
  React.Dispatch<React.SetStateAction<GIGI_BERJEJAL | undefined>>
] {
  return useState<GIGI_BERJEJAL | undefined>(() => {
    const storedPage = localStorage.getItem(LOCAL_STORAGE_KEY.GIGI_BERJEJAL);
    return storedPage && Object.keys(GIGI_BERJEJAL).includes(storedPage as GIGI_BERJEJAL)
      ? (storedPage as GIGI_BERJEJAL)
      : undefined;
  });
}

export default useStateGigiBerjejal;
