import PAGES from "../finals/basic/PAGES";

import UMUR from "../finals/UMUR";
import SEKOLAH from "../finals/SEKOLAH";
import JURUSAN from "../finals/JURUSAN";
import TINGGI_BADAN from "../finals/TINGGI_BADAN";
import BUTA_WARNA from "../finals/BUTA_WARNA";
import MINUS from "../finals/MINUS";

import GIGI_OMPONG from "../finals/kesehatan/gigi/GIGI_OMPONG";
import GIGI_JUMLAH from "../finals/kesehatan/gigi/GIGI_JUMLAH";
import GIGI_RAPIH from "../finals/kesehatan/gigi/GIGI_RAPIH";
import GIGI_FRAKTUR from "../finals/kesehatan/gigi/GIGI_FRAKTUR";
import GIGI_BERJEJAL from "../finals/kesehatan/gigi/GIGI_BERJEJAL";

import WAJAH_BERCAK_HITAM from "../finals/kesehatan/wajah/WAJAH_BERCAK_HITAM";

type AppContextType = {
  // Basic
  page: PAGES;
  setPage: (page: PAGES) => void;

  umur: UMUR | undefined;
  setUmur: (umur: UMUR) => void;

  sekolah: SEKOLAH | undefined;
  setSekolah: (sekolah: SEKOLAH) => void;

  jurusan: JURUSAN | undefined;
  setJurusan: (jurusan: JURUSAN) => void;

  tinggiBadan: TINGGI_BADAN | undefined;
  setTinggiBadan: (tinggiBadan: TINGGI_BADAN) => void;

  butaWarna: BUTA_WARNA | undefined;
  setButaWarna: (butaWarna: BUTA_WARNA) => void;

  minus: MINUS | undefined;
  setMinus: (minus: MINUS) => void;

  // Kesehatan
  gigiOmpong: GIGI_OMPONG | undefined;
  setGigiOmpong: (gigiOmpong: GIGI_OMPONG) => void;

  gigiJumlah: GIGI_JUMLAH | undefined;
  setGigiJumlah: (gigiJumlah: GIGI_JUMLAH) => void;

  gigiRapih: GIGI_RAPIH | undefined;
  setGigiRapih: (gigiRapih: GIGI_RAPIH) => void;

  gigiFraktur: GIGI_FRAKTUR | undefined;
  setGigiFraktur: (gigiFraktur: GIGI_FRAKTUR) => void;

  gigiBerjejal: GIGI_BERJEJAL | undefined;
  setGigiBerjejal: (gigiBerjejal: GIGI_BERJEJAL) => void;

  wajahBercakHitam: WAJAH_BERCAK_HITAM | undefined;
  setWajahBercakHitam: (wajahBercakHitam: WAJAH_BERCAK_HITAM) => void;
};

export default AppContextType;
