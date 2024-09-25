import React, { useState } from "react";

import LOCAL_STORAGE_KEY from "../../../finals/basic/LOCAL_STORAGE_KEY";
import RUSAK_BERLUBANG from "../../../finals/kesehatan/gigi/RUSAK_BERLUBANG";

function useStateGigiRusakBerlubang(): [
  RUSAK_BERLUBANG | undefined,
  React.Dispatch<React.SetStateAction<RUSAK_BERLUBANG | undefined>>
] {
  return useState<RUSAK_BERLUBANG | undefined>(() => {
    const storedPage = localStorage.getItem(LOCAL_STORAGE_KEY.RUSAK_BERLUBANG);
    return storedPage && Object.keys(RUSAK_BERLUBANG).includes(storedPage as RUSAK_BERLUBANG)
      ? (storedPage as RUSAK_BERLUBANG)
      : undefined;
  });
}

export default useStateGigiRusakBerlubang;
