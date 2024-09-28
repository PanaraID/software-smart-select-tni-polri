import React, { useState } from "react";

import LOCAL_STORAGE_KEY from "../../../finals/basic/LOCAL_STORAGE_KEY";
import MATA_RABUN_JAUH_DEKAT from "../../../finals/kesehatan/mata/MATA_RABUN_JAUH_DEKAT";

function useStateMataRabunJauhDekat(): [
  MATA_RABUN_JAUH_DEKAT | undefined,
  React.Dispatch<React.SetStateAction<MATA_RABUN_JAUH_DEKAT | undefined>>
] {
  return useState<MATA_RABUN_JAUH_DEKAT | undefined>(() => {
    const storedPage = localStorage.getItem(LOCAL_STORAGE_KEY.MATA_RABUN_JAUH_DEKAT);
    return storedPage && Object.keys(MATA_RABUN_JAUH_DEKAT).includes(storedPage as MATA_RABUN_JAUH_DEKAT)
      ? (storedPage as MATA_RABUN_JAUH_DEKAT)
      : undefined;
  });
}

export default useStateMataRabunJauhDekat;
