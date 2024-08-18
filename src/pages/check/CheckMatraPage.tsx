import {useContext, useEffect} from "react";
import AppContext from "../../context/AppContext.tsx";

import MATRA from "../../finals/MATRA.ts";

import Header from "../../partials/Header.tsx";
import InputChoice from "../../partials/InputChoise.tsx";
import ButtonNavigation from "../../partials/button-navigation/ButtonNavigation.tsx";

import LOCAL_STORAGE_KEY from "../../finals/basic/LOCAL_STORAGE_KEY.ts";
import PAGES from "../../finals/basic/PAGES.ts";

function CheckMatraPage() {
  const { setPage, matra, setMatra } = useContext(AppContext);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY.MATRA, matra || "");
  }, [matra]);

  return (
    <>
      <Header text="CHECK MATRA KAMU" />

      <InputChoice
        enumType={MATRA}

        selected={matra}
        setSelected={setMatra}
      />

      <ButtonNavigation
        button1={{
          text: "Beranda",
          action: () => setPage(PAGES.HOME)
        }}
        button2={{
          text: "Buta Warna",
          action: () => setPage(PAGES.CHECK_BUTA_WARNA)
        }}
      />
    </>
  );
}

export default CheckMatraPage;
