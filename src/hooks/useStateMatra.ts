import { useState } from "react";

import LOCAL_STORAGE_KEY from "../finals/basic/LOCAL_STORAGE_KEY.ts";
import MATRA from "../finals/MATRA.ts";

function useStateMatra(): [MATRA | undefined, React.Dispatch<React.SetStateAction<MATRA | undefined>>] {
  return useState<MATRA | undefined>(() => {
    const storedPage = localStorage.getItem(LOCAL_STORAGE_KEY.MATRA);
    return storedPage && Object.keys(MATRA).includes(storedPage as MATRA)
      ? (storedPage as MATRA)
      : undefined;
  });
}

export default useStateMatra;
