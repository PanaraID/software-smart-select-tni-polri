import { useContext } from "react";

import AppContext from "../../context/AppContext";
import PAGES from "../../finals/basic/PAGES";

import HomeHeader from "./partials/HomeHeader.tsx";
// import HomeDev from "./partials/HomeDev.tsx";

import Swal from "sweetalert2";

import ButtonNavigation from "../../partials/button-navigation/ButtonNavigation";
import Header from "../../partials/Header.tsx";

function HomePage() {
  const { setPage } = useContext(AppContext);

  return (
    <>
      <HomeHeader />
      <Header text="Aplikasi Pintar TNI Polri" />

      {/* Hanya ketika dev */}
      {/*<HomeDev />*/}

      <ButtonNavigation
        button1={{
          text: "Pilih Matra",
          action: () => {
            setPage(PAGES.CHECK_MATRA);
          },
        }}
        button2={{
          text: "Kosong",
          action: () => {
            Swal.fire({
              icon: "error",
              text: "Ups, halaman kosong",
            });
          },
        }}
      />
    </>
  );
}

export default HomePage;
