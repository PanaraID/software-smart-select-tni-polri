import { useContext } from "react";

import AppContext from "../../context/AppContext";
import PAGES from "../../finals/basic/PAGES";

import HomeHeader from "./partials/HomeHeader.tsx";
import HomeDev from "./partials/HomeDev.tsx";

import ButtonNavigation from "../../partials/button-navigation/ButtonNavigation";

function HomePage() {
  const { setPage } = useContext(AppContext);

  return (
    <>
      <HomeHeader />

      {/* Hanya ketika dev */}
      <HomeDev />

      <ButtonNavigation
        button1={{
          text: "Pilih Matra",
          action: () => {
            setPage(PAGES.CHECK_MATRA);
          },
        }}
        button2={{
          text: "Tampilkan About",
          action: () => {
            setPage(PAGES.ABOUT);
          },
        }}
      />
    </>
  );
}

export default HomePage;
