import { useContext } from "react";

import AppContext from "../../context/AppContext";
import PAGES from "../../finals/basic/PAGES";

import Header from "../../partials/Header.tsx";

import ButtonNavigation from "../../partials/button-navigation/ButtonNavigation";

function AboutPage() {
  const { setPage } = useContext(AppContext);

  return (
    <>
      <Header text="Halaman Tentang" />
      
      <ButtonNavigation
        button1={{
          text: "Tampilkan Home",
          action: () => {
            setPage(PAGES.HOME);
          },
        }}
      />
    </>
  );
}

export default AboutPage;
