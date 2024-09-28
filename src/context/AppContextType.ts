import PAGES from "../finals/basic/PAGES";

import UMUR from "../finals/UMUR";
import SEKOLAH from "../finals/SEKOLAH";
import JURUSAN from "../finals/JURUSAN";
import TINGGI_BADAN from "../finals/TINGGI_BADAN";
import BUTA_WARNA from "../finals/BUTA_WARNA";
import MINUS from "../finals/MINUS";

import MATA_RABUN_JAUH_DEKAT from "../finals/kesehatan/mata/MATA_RABUN_JAUH_DEKAT";
import MATA_KATARAK from "../finals/kesehatan/mata/MATA_KATARAK";
import MATA_PETEREGIUM from "../finals/kesehatan/mata/MATA_PETEREGIUM";

import GIGI_OMPONG from "../finals/kesehatan/gigi/GIGI_OMPONG";
import GIGI_JUMLAH from "../finals/kesehatan/gigi/GIGI_JUMLAH";
import GIGI_RAPIH from "../finals/kesehatan/gigi/GIGI_RAPIH";
import GIGI_FRAKTUR from "../finals/kesehatan/gigi/GIGI_FRAKTUR";
import GIGI_BERJEJAL from "../finals/kesehatan/gigi/GIGI_BERJEJAL";
import GIGI_OPEN_BITE from "../finals/kesehatan/gigi/GIGI_OPEN_BITE";
import GIGI_CROSS_BITE from "../finals/kesehatan/gigi/GIGI_CROSS_BITE";
import GIGI_IMPAKSI from "../finals/kesehatan/gigi/GIGI_IMPAKSI";
import GIGI_RUSAK_BERLUBANG from "../finals/kesehatan/gigi/GIGI_RUSAK_BERLUBANG";
import GIGI_BERJAMUR from "../finals/kesehatan/gigi/GIGI_BERJAMUR";
import GIGI_BERJAMUR_KUNING from "../finals/kesehatan/gigi/GIGI_BERJAMUR_KUNING";
import GIGI_ABRASI from "../finals/kesehatan/gigi/GIGI_ABRASI";
import GIGI_PALSU_LEPAS_PASANG from "../finals/kesehatan/gigi/GIGI_PALSU_LEPAS_PASANG";
import GIGI_BEHEL from "../finals/kesehatan/gigi/GIGI_BEHEL";
import GIGI_KELAINAN_SENDI from "../finals/kesehatan/gigi/GIGI_KELAINAN_SENDI";
import GIGI_TONGGOS from "../finals/kesehatan/gigi/GIGI_TONGGOS";
import GIGI_ABSES_KISTA_TUMOR_KELAINAN_KELENJAR_LUDAH from "../finals/kesehatan/gigi/GIGI_ABSES_KISTA_TUMOR_KELAINAN_KELENJAR_LUDAH";

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
  mataRabunJauhDekat: MATA_RABUN_JAUH_DEKAT | undefined;
  setMataRabunJauhDekat: (mataRabunJauhDekat: MATA_RABUN_JAUH_DEKAT) => void;

  mataKatarak: MATA_KATARAK | undefined;
  setMataKatarak: (mataKatarak: MATA_KATARAK) => void;

  mataPeteregium: MATA_PETEREGIUM | undefined;
  setMataPeteregium: (mataPeteregium: MATA_PETEREGIUM) => void;

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

  gigiOpenBite: GIGI_OPEN_BITE | undefined;
  setGigiOpenBite: (gigiOpenBite: GIGI_OPEN_BITE) => void;

  gigiOverBite: GIGI_OPEN_BITE | undefined;
  setGigiOverBite: (gigiOverBite: GIGI_OPEN_BITE) => void;

  gigiCrossBite: GIGI_CROSS_BITE | undefined;
  setGigiCrossBite: (gigiCrossBite: GIGI_CROSS_BITE) => void;

  gigiImpaksi: GIGI_IMPAKSI | undefined;
  setGigiImpaksi: (gigiImpaksi: GIGI_IMPAKSI) => void;

  gigiRusakBerlubang: GIGI_RUSAK_BERLUBANG | undefined;
  setGigiRusakBerlubang: (gigiRusakBerlubang: GIGI_RUSAK_BERLUBANG) => void;

  gigiBerjamur: GIGI_BERJAMUR | undefined;
  setGigiBerjamur: (gigiBerjamur: GIGI_BERJAMUR) => void;

  gigiBerjamurKuning: GIGI_BERJAMUR_KUNING | undefined;
  setGigiBerjamurKuning: (gigiBerjamurKuning: GIGI_BERJAMUR_KUNING) => void;

  gigiAbrasi: GIGI_ABRASI | undefined;
  setGigiAbrasi: (gigiAbrasi: GIGI_ABRASI) => void;

  gigiPalsuLepasPasang: GIGI_PALSU_LEPAS_PASANG | undefined;
  setGigiPalsuLepasPasang: (gigiPalsuLepasPasang: GIGI_PALSU_LEPAS_PASANG) => void;

  gigiBehel: GIGI_BEHEL | undefined;
  setGigiBehel: (gigiBehel: GIGI_BEHEL) => void;

  gigiKelainanSendi: GIGI_KELAINAN_SENDI | undefined;
  setGigiKelainanSendi: (gigiKelainanSendi: GIGI_KELAINAN_SENDI) => void;

  gigiTonggos: GIGI_TONGGOS | undefined;
  setGigiTonggos: (gigiTonggos: GIGI_TONGGOS) => void;

  gigiAbsesKistaTumor: GIGI_ABSES_KISTA_TUMOR_KELAINAN_KELENJAR_LUDAH | undefined;
  setGigiAbsesKistaTumor: (gigiAbsesKistaTumor: GIGI_ABSES_KISTA_TUMOR_KELAINAN_KELENJAR_LUDAH) => void;

  wajahBercakHitam: WAJAH_BERCAK_HITAM | undefined;
  setWajahBercakHitam: (wajahBercakHitam: WAJAH_BERCAK_HITAM) => void;
};

export default AppContextType;
