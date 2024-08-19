import { useState } from "react";
import PAGES from "../../../finals/basic/PAGES";
import HomeDevButton from "./partials/HomeDevButton";
import { Button } from "react-bootstrap";

// Menampilkan list button untuk mengakses semua halaman.
// Hanya diperuntukkan untuk tahap pengembangan.
function HomeDev() {
  const [isDisplay, setIsDisplay] = useState<boolean>(true);

  function handleClick() {
    setIsDisplay(false);
  }

  // Jika isDisplay adalah false, maka kembalikan null untuk tidak menampilkan komponen ini
  if (!isDisplay) {
    return null;
  }

  return (
    <section className="p-2 container card overflow-auto">
      <h3>Bagian Ini Hanya Untuk Tahap Pengembangan</h3>
      <p>Jadi nanti akan saya hapus!</p>

      <Button variant="secondary" onClick={handleClick}>Tutup Bagian Ini</Button>

      <div className="p-2 container card overflow-auto">
        <HomeDevButton target={PAGES.ABOUT} text="ABOUT"/>

        {/* Check */}
        <HomeDevButton
          target={PAGES.CHECK_MATRA}
          text="PILIH MATRA KAMU?"
        />
        <HomeDevButton
          target={PAGES.CHECK_BUTA_WARNA}
          text="APAKAH KAMU BUTA WARNA?"
        />
        <HomeDevButton
          target={PAGES.CHECK_MINUS}
          text="APAKAH KAMU MINUS?"
        />

        {/* Result */}
        <HomeDevButton
          target={PAGES.RESULT}
          text="RESULT"
        />
      </div>
    </section>
  );
}

export default HomeDev;
