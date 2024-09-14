import React, { useState } from "react";

import LOCAL_STORAGE_KEY from "../finals/basic/LOCAL_STORAGE_KEY";
import SEKOLAH from "../finals/SEKOLAH";

function useStateSekolah(): [
  SEKOLAH | undefined,
  React.Dispatch<React.SetStateAction<SEKOLAH | undefined>>
] {
  return useState<SEKOLAH | undefined>(() => {
    const storedPage = localStorage.getItem(LOCAL_STORAGE_KEY.SEKOLAH);
    return storedPage && Object.keys(SEKOLAH).includes(storedPage as SEKOLAH)
      ? (storedPage as SEKOLAH)
      : undefined;
  });
}

export default useStateSekolah;
