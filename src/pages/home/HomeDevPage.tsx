import AppContext from "../../context/AppContext";
import { useContext } from "react";

import PAGES from "../../finals/basic/PAGES";

import HomeDevButton from "./partials/HomeDevButton";

import Header from "../../partials/Header";
import ButtonNavigation from "../../partials/button-navigation/ButtonNavigation";
import { ListGroup } from "react-bootstrap";

// Menampilkan list button untuk mengakses semua halaman.
// Hanya diperuntukkan untuk tahap pengembangan.
function HomeDevPage() {
  const { setPage } = useContext(AppContext);

  return (
    <>
      <Header text="Halaman untuk Pengembang" />
      <ListGroup>
        <ListGroup.Item>
          Halaman ini hanya akan ada ketika tahap pengembangan, jadi nantinya
          akan saya hapus ketika production
        </ListGroup.Item>
        <ListGroup.Item>
          Kegunaan halaman ini adalah untuk memudahkan navigasi
        </ListGroup.Item>
      </ListGroup>

      <div className="p-2 mt-3 card overflow-auto">
        {/* Check */}
        <h5>Check</h5>
        <HomeDevButton target={PAGES.CHECK_MATRA} text="PILIH MATRA KAMU?" />
        <HomeDevButton
          target={PAGES.CHECK_BUTA_WARNA}
          text="APAKAH KAMU BUTA WARNA?"
        />
        <HomeDevButton target={PAGES.CHECK_MINUS} text="APAKAH KAMU MINUS?" />

        {/* Result */}
        <h5>Result</h5>
        <HomeDevButton target={PAGES.RESULT} text="RESULT" />

        {/* Recommendation */}
        <h5>Rekomendasi</h5>
        <HomeDevButton target={PAGES.RECOMMENDATION_1} text="REKOMENDASI 1" />
      </div>

      <ButtonNavigation 
        button1={{
          text: "Beranda",
          action: () => {
            setPage(PAGES.HOME);
          },
        }}
      />
    </>
  );
}

export default HomeDevPage;
