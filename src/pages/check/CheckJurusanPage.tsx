import { useContext } from "react";
import AppContext from "../../context/AppContext.tsx";

import Header from "../../partials/Header.tsx";

import PAGES from "../../finals/basic/PAGES.ts";
import JURUSAN from "../../finals/JURUSAN.ts";

import InputChoice from "../../partials/InputChoise.tsx";
import ButtonNavigation from "../../partials/button-navigation/ButtonNavigation.tsx";

function CheckJurusanPage() {
  const { setPage, butaWarna, setButaWarna } = useContext(AppContext);

  return (
    <>
    <Header text="APA JURUSAN KAMU?" />

      <InputChoice enumType={JURUSAN} selected={butaWarna} setSelected={setButaWarna} />
      <ButtonNavigation
        button1={{
          text: "Beranda",
          action: () => setPage(PAGES.HOME)
        }}
      />
    </>
  );
}

export default CheckJurusanPage;
