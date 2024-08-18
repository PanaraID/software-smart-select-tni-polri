import { useEffect } from "react";

import LOCAL_STORAGE_KEY from "../../finals/basic/LOCAL_STORAGE_KEY.ts";

function useEffectSaveActivePage(page: string) {
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY.ACTIVE_PAGE, page);
  }, [page]);
}

export default useEffectSaveActivePage;
