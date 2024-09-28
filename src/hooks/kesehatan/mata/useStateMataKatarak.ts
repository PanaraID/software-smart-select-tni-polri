import React, { useState } from "react";

import LOCAL_STORAGE_KEY from "../../../finals/basic/LOCAL_STORAGE_KEY";
import MATA_KATARAK from "../../../finals/kesehatan/mata/MATA_KATARAK";

function useStateMataKatarak(): [
  MATA_KATARAK | undefined,
  React.Dispatch<React.SetStateAction<MATA_KATARAK | undefined>>
] {
  return useState<MATA_KATARAK | undefined>(() => {
    const storedPage = localStorage.getItem(LOCAL_STORAGE_KEY.MATA_KATARAK);
    return storedPage && Object.keys(MATA_KATARAK).includes(storedPage as MATA_KATARAK)
      ? (storedPage as MATA_KATARAK)
      : undefined;
  });
}

export default useStateMataKatarak;
