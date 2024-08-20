import React, { useState } from "react";

import PAGES from "../../finals/basic/PAGES.ts";

import LOCAL_STORAGE_KEY from "../../finals/basic/LOCAL_STORAGE_KEY.ts";

function useStatePage(
  defaultPage: PAGES = PAGES.HOME
): [PAGES, React.Dispatch<React.SetStateAction<PAGES>>] {
  return useState<PAGES>(() => {
    const storedPage = localStorage.getItem(LOCAL_STORAGE_KEY.ACTIVE_PAGE);
    return storedPage && Object.values(PAGES).includes(storedPage as PAGES)
      ? (storedPage as PAGES)
      : defaultPage;
  });
}

export default useStatePage;
