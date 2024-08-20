import React, { useState } from "react";

import LOCAL_STORAGE_KEY from "../finals/basic/LOCAL_STORAGE_KEY.ts";
import MINUS from "../finals/MINUS.ts";

function useStateMinus(): [MINUS | undefined, React.Dispatch<React.SetStateAction<MINUS | undefined>>] {
  return useState<MINUS | undefined>(() => {
    const storedPage = localStorage.getItem(LOCAL_STORAGE_KEY.MINUS);
    return storedPage && Object.keys(MINUS).includes(storedPage as MINUS)
      ? (storedPage as MINUS)
      : undefined;
  });
}

export default useStateMinus;
