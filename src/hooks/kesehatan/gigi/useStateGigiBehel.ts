import React, { useState } from "react";

import LOCAL_STORAGE_KEY from "../../../finals/basic/LOCAL_STORAGE_KEY";
import GIGI_BEHEL from "../../../finals/kesehatan/gigi/GIGI_BEHEL";

function useStateGigiBehel(): [
  GIGI_BEHEL | undefined,
  React.Dispatch<React.SetStateAction<GIGI_BEHEL | undefined>>
] {
  return useState<GIGI_BEHEL | undefined>(() => {
    const storedPage = localStorage.getItem(LOCAL_STORAGE_KEY.GIGI_BEHEL);
    return storedPage && Object.keys(GIGI_BEHEL).includes(storedPage as GIGI_BEHEL)
      ? (storedPage as GIGI_BEHEL)
      : undefined;
  });
}

export default useStateGigiBehel;
