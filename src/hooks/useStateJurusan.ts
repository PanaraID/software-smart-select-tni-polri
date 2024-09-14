import React, { useState } from "react";

import LOCAL_STORAGE_KEY from "../finals/basic/LOCAL_STORAGE_KEY";
import JURUSAN from "../finals/JURUSAN";

function useStateJurusan(): [
  JURUSAN | undefined,
  React.Dispatch<React.SetStateAction<JURUSAN | undefined>>
] {
  return useState<JURUSAN | undefined>(() => {
    const storedPage = localStorage.getItem(LOCAL_STORAGE_KEY.JURUSAN);
    return storedPage && Object.keys(JURUSAN).includes(storedPage as JURUSAN)
      ? (storedPage as JURUSAN)
      : undefined;
  });
}

export default useStateJurusan;
