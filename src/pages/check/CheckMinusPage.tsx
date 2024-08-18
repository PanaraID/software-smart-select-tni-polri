import {useContext} from "react";

import AppContext from "../../context/AppContext.tsx";

import Header from "../../partials/Header.tsx";
import MINUS from "../../finals/MINUS.ts";

import InputChoise from "../../partials/InputChoise.tsx";
import ButtonNavigation from "../../partials/button-navigation/ButtonNavigation.tsx";
import PAGES from "../../finals/basic/PAGES.ts";

function CheckMinusPage() {
  const { setPage, minus, setMinus } = useContext(AppContext);

  return (
    <>
      <Header text="APAKAH KAMU MINUS?" />

      <InputChoise enumType={MINUS} selected={minus} setSelected={setMinus} />
      <ButtonNavigation
        button1={{
          text: "Kembali",
          action: () => setPage(PAGES.CHECK_BUTA_WARNA)
        }}
        button2={{
          text: "Hasil",
          action: () => setPage(PAGES.RESULT)
        }}
      />
    </>
  );
}

export default CheckMinusPage;
