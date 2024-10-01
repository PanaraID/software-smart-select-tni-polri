import PAGES from "../finals/basic/PAGES";

import YES_OR_NO from "../finals/basic/YES_OR_NO";

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

  gigiBerjejal: YES_OR_NO | undefined;
  setGigiBerjejal: (gigiBerjejal: YES_OR_NO) => void;

  gigiOpenBite: YES_OR_NO | undefined;
  setGigiOpenBite: (gigiOpenBite: YES_OR_NO) => void;

  gigiOverBite: YES_OR_NO | undefined;
  setGigiOverBite: (gigiOverBite: YES_OR_NO) => void;

  gigiCrossBite: YES_OR_NO | undefined;
  setGigiCrossBite: (gigiCrossBite: YES_OR_NO) => void;

  gigiImpaksi: YES_OR_NO | undefined;
  setGigiImpaksi: (gigiImpaksi: YES_OR_NO) => void;

  gigiRusakBerlubang: YES_OR_NO | undefined;
  setGigiRusakBerlubang: (gigiRusakBerlubang: YES_OR_NO) => void;

  gigiBerjamur: YES_OR_NO | undefined;
  setGigiBerjamur: (gigiBerjamur: YES_OR_NO) => void;

  gigiBerjamurKuning: YES_OR_NO | undefined;
  setGigiBerjamurKuning: (gigiBerjamurKuning: YES_OR_NO) => void;

  gigiAbrasi: YES_OR_NO | undefined;
  setGigiAbrasi: (gigiAbrasi: YES_OR_NO) => void;

  gigiPalsuLepasPasang: YES_OR_NO | undefined;
  setGigiPalsuLepasPasang: (gigiPalsuLepasPasang: YES_OR_NO) => void;

  gigiBehel: YES_OR_NO | undefined;
  setGigiBehel: (gigiBehel: YES_OR_NO) => void;

  gigiKelainanSendi: YES_OR_NO | undefined;
  setGigiKelainanSendi: (gigiKelainanSendi: YES_OR_NO) => void;

  gigiTonggos: YES_OR_NO | undefined;
  setGigiTonggos: (gigiTonggos: YES_OR_NO) => void;

  gigiAbsesKistaTumor: YES_OR_NO | undefined;
  setGigiAbsesKistaTumor: (gigiAbsesKistaTumor: YES_OR_NO) => void;

  wajahBercakHitam: WAJAH_BERCAK_HITAM | undefined;
  setWajahBercakHitam: (wajahBercakHitam: WAJAH_BERCAK_HITAM) => void;
};

export default AppContextType;
