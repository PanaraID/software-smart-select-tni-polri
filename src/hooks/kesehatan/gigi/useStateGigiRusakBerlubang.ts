import React, { useState } from "react";

import LOCAL_STORAGE_KEY from "../../../finals/basic/LOCAL_STORAGE_KEY";
import GIGI_RUSAK_BERLUBANG from "../../../finals/kesehatan/gigi/GIGI_RUSAK_BERLUBANG";

function useStateGigiRusakBerlubang(): [
  GIGI_RUSAK_BERLUBANG | undefined,
  React.Dispatch<React.SetStateAction<GIGI_RUSAK_BERLUBANG | undefined>>
] {
  return useState<GIGI_RUSAK_BERLUBANG | undefined>(() => {
    const storedPage = localStorage.getItem(LOCAL_STORAGE_KEY.GIGI_RUSAK_BERLUBANG);
    return storedPage && Object.keys(GIGI_RUSAK_BERLUBANG).includes(storedPage as GIGI_RUSAK_BERLUBANG)
      ? (storedPage as GIGI_RUSAK_BERLUBANG)
      : undefined;
  });
}

export default useStateGigiRusakBerlubang;
