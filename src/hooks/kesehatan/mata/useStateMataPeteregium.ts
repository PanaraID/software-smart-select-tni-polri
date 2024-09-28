import React, { useState } from "react";

import LOCAL_STORAGE_KEY from "../../../finals/basic/LOCAL_STORAGE_KEY";
import MATA_PETEREGIUM from "../../../finals/kesehatan/mata/MATA_PETEREGIUM";

function useStateMataPeteregium(): [
  MATA_PETEREGIUM | undefined,
  React.Dispatch<React.SetStateAction<MATA_PETEREGIUM | undefined>>
] {
  return useState<MATA_PETEREGIUM | undefined>(() => {
    const storedPage = localStorage.getItem(LOCAL_STORAGE_KEY.MATA_PETEREGIUM);
    return storedPage && Object.keys(MATA_PETEREGIUM).includes(storedPage as MATA_PETEREGIUM)
      ? (storedPage as MATA_PETEREGIUM)
      : undefined;
  });
}

export default useStateMataPeteregium;
