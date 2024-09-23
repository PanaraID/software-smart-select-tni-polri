import React, { useState } from "react";

import LOCAL_STORAGE_KEY from "../../../finals/basic/LOCAL_STORAGE_KEY";
import GIGI_JUMLAH from "../../../finals/kesehatan/gigi/GIGI_JUMLAH";

function useStateGigiOmpong(): [
  GIGI_JUMLAH | undefined,
  React.Dispatch<React.SetStateAction<GIGI_JUMLAH | undefined>>
] {
  return useState<GIGI_JUMLAH | undefined>(() => {
    const storedPage = localStorage.getItem(LOCAL_STORAGE_KEY.GIGI_JUMLAH);
    return storedPage && Object.keys(GIGI_JUMLAH).includes(storedPage as GIGI_JUMLAH)
      ? (storedPage as GIGI_JUMLAH)
      : undefined;
  });
}

export default useStateGigiOmpong;
