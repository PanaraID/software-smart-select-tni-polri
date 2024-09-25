import React, { useState } from "react";

import LOCAL_STORAGE_KEY from "../../../finals/basic/LOCAL_STORAGE_KEY";
import GIGI_ABSES_KISTA_TUMOR_KELAINAN_KELENJAR_LUDAH from "../../../finals/kesehatan/gigi/GIGI_ABSES_KISTA_TUMOR_KELAINAN_KELENJAR_LUDAH";

function useStateGigiAbsesKistaTumorKelainanKelenjarLudah(): [
  GIGI_ABSES_KISTA_TUMOR_KELAINAN_KELENJAR_LUDAH | undefined,
  React.Dispatch<React.SetStateAction<GIGI_ABSES_KISTA_TUMOR_KELAINAN_KELENJAR_LUDAH | undefined>>
] {
  return useState<GIGI_ABSES_KISTA_TUMOR_KELAINAN_KELENJAR_LUDAH | undefined>(() => {
    const storedPage = localStorage.getItem(LOCAL_STORAGE_KEY.GIGI_ABSES_KISTA_TUMOR_KELAINAN_KELENJAR_LUDAH);
    return storedPage && Object.keys(GIGI_ABSES_KISTA_TUMOR_KELAINAN_KELENJAR_LUDAH).includes(storedPage as GIGI_ABSES_KISTA_TUMOR_KELAINAN_KELENJAR_LUDAH)
      ? (storedPage as GIGI_ABSES_KISTA_TUMOR_KELAINAN_KELENJAR_LUDAH)
      : undefined;
  });
}

export default useStateGigiAbsesKistaTumorKelainanKelenjarLudah;
