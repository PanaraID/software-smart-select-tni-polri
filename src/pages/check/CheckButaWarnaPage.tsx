import { useContext } from "react";
import AppContext from "../../context/AppContext.tsx";

import Header from "../../partials/Header.tsx";

import PAGES from "../../finals/basic/PAGES.ts";
import BUTA_WARNA from "../../finals/BUTA_WARNA.ts";

import InputChoice from "../../partials/InputChoise.tsx";
import ButtonNavigation from "../../partials/button-navigation/ButtonNavigation.tsx";

function CheckButaWarnaPage() {
  const { setPage, butaWarna, setButaWarna } = useContext(AppContext);

  return (
    <>
      <Header text="APAKAH KAMU BUTA WARNA?" />

      <InputChoice enumType={BUTA_WARNA} selected={butaWarna} setSelected={setButaWarna} />
      <ButtonNavigation
        button1={{
          text: "Kembali",
          action: () => setPage(PAGES.CHECK_MATRA)
        }}
        button2={{
          text: "Mata Minus",
          action: () => setPage(PAGES.CHECK_MINUS)
        }}
      />
    </>
  );
}

export default CheckButaWarnaPage;
