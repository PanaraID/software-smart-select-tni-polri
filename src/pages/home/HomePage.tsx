import { useContext } from "react";

import AppContext from "../../context/AppContext";
import PAGES from "../../finals/basic/PAGES";

import HomeHeader from "./partials/HomeHeader.tsx";

import ButtonNavigation from "../../partials/button-navigation/ButtonNavigation";
import Header from "../../partials/Header.tsx";
import { Button } from "react-bootstrap";

function HomePage() {
  const { setPage } = useContext(AppContext);

  return (
    <>
      <HomeHeader />
      <Header text="Aplikasi Pintar Pemilihan TNI Polri" />

      <div>
        <Button onClick={() => setPage(PAGES.DEV)} variant="info">
          (SEMENTARA) Menuju Halaman Pengembang
        </Button>
      </div>

      <ButtonNavigation
        button1={{
          text: "Pilih Matra",
          action: () => {
            setPage(PAGES.CHECK_MATRA);
          },
        }}
      />
    </>
  );
}

export default HomePage;
