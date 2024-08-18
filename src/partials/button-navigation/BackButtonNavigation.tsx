import { useContext } from "react";
import AppContext from "../../context/AppContext";
import { Button } from "react-bootstrap";

import LOCAL_STORAGE_KEY from "../../finals/basic/LOCAL_STORAGE_KEY";
import PAGES from "../../finals/basic/PAGES";

function BackButtonNavigation() {
  const { setPage } = useContext(AppContext);
  function handleBackNavigation() {
    const beforePage = localStorage.getItem(LOCAL_STORAGE_KEY.BEFORE_PAGE);
    const data: PAGES = Object.values(PAGES).includes(beforePage as PAGES)
      ? (beforePage as PAGES)
      : PAGES.HOME;
    setPage(data);
  }

  return (
    <Button onClick={handleBackNavigation} variant="primary" className="m-2">
      Kembali
    </Button>
  );
}

export default BackButtonNavigation;
