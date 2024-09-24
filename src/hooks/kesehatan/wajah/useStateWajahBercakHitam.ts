import React, { useState } from "react";

import LOCAL_STORAGE_KEY from "../../../finals/basic/LOCAL_STORAGE_KEY";
import WAJAH_BERCAK_HITAM from "../../../finals/kesehatan/wajah/WAJAH_BERCAK_HITAM";

function useStateWajahBercakHitam(): [
  WAJAH_BERCAK_HITAM | undefined,
  React.Dispatch<React.SetStateAction<WAJAH_BERCAK_HITAM | undefined>>
] {
  return useState<WAJAH_BERCAK_HITAM | undefined>(() => {
    const storedPage = localStorage.getItem(LOCAL_STORAGE_KEY.WAJAH_BERCAK_HITAM);
    return storedPage && Object.keys(WAJAH_BERCAK_HITAM).includes(storedPage as WAJAH_BERCAK_HITAM)
      ? (storedPage as WAJAH_BERCAK_HITAM)
      : undefined;
  });
}

export default useStateWajahBercakHitam;
