import React, { useState } from "react";

import LOCAL_STORAGE_KEY from "../../../finals/basic/LOCAL_STORAGE_KEY";
import GIGI_TONGGOS from "../../../finals/kesehatan/gigi/GIGI_TONGGOS";

function useStateGigiTonggos(): [
  GIGI_TONGGOS | undefined,
  React.Dispatch<React.SetStateAction<GIGI_TONGGOS | undefined>>
] {
  return useState<GIGI_TONGGOS | undefined>(() => {
    const storedPage = localStorage.getItem(LOCAL_STORAGE_KEY.GIGI_TONGGOS);
    return storedPage && Object.keys(GIGI_TONGGOS).includes(storedPage as GIGI_TONGGOS)
      ? (storedPage as GIGI_TONGGOS)
      : undefined;
  });
}

export default useStateGigiTonggos;
