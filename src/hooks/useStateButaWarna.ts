import React, { useState } from "react";

import LOCAL_STORAGE_KEY from "../finals/basic/LOCAL_STORAGE_KEY";
import YES_OR_NO from "../finals/basic/YES_OR_NO";

function useStateButaWarna(): [
  YES_OR_NO | undefined,
  React.Dispatch<React.SetStateAction<YES_OR_NO | undefined>>
] {
  return useState<YES_OR_NO | undefined>(() => {
    const storedPage = localStorage.getItem(LOCAL_STORAGE_KEY.BUTA_WARNA);
    return storedPage &&
      Object.keys(YES_OR_NO).includes(storedPage as YES_OR_NO)
      ? (storedPage as YES_OR_NO)
      : undefined;
  });
}

export default useStateButaWarna;
