import PAGES from "../finals/basic/PAGES";

import UMUR from "../finals/UMUR";
import SEKOLAH from "../finals/SEKOLAH";
import JURUSAN from "../finals/JURUSAN";
import TINGGI_BADAN from "../finals/TINGGI_BADAN";
import BUTA_WARNA from "../finals/BUTA_WARNA";
import MINUS from "../finals/MINUS";

import GIGI_OMPONG from "../finals/kesehatan/gigi/GIGI_OMPONG";


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
};

export default AppContextType;
