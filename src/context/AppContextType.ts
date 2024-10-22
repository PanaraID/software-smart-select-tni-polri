import PAGES from "../finals/basic/PAGES";

import YES_OR_NO from "../finals/basic/YES_OR_NO";

import UMUR from "../finals/UMUR";
import SEKOLAH from "../finals/SEKOLAH";
import JURUSAN from "../finals/JURUSAN";
import TINGGI_BADAN from "../finals/TINGGI_BADAN";
import MINUS from "../finals/MINUS";
import BENTUK_KEPALA from "../finals/kesehatan/bagian-kepala/BENTUK_KEPALA";

import MATA_RABUN_JAUH_DEKAT from "../finals/kesehatan/mata/MATA_RABUN_JAUH_DEKAT";

import GIGI_OMPONG from "../finals/kesehatan/gigi/GIGI_OMPONG";
import GIGI_JUMLAH from "../finals/kesehatan/gigi/GIGI_JUMLAH";
import GIGI_RAPIH from "../finals/kesehatan/gigi/GIGI_RAPIH";
import GIGI_FRAKTUR from "../finals/kesehatan/gigi/GIGI_FRAKTUR";

import JUMLAH_TESTIS from "../finals/kesehatan/lainnya/JUMLAH_TESTIS";
import KONDISI_ALAT_REPRODUKSI from "../finals/kesehatan/lainnya/KONDISI_ALAT_REPRODUKSI";

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

  butaWarna: YES_OR_NO | undefined;
  setButaWarna: (butaWarna: YES_OR_NO) => void;

  minus: MINUS | undefined;
  setMinus: (minus: MINUS) => void;

  // Mata
  mataRabunJauhDekat: MATA_RABUN_JAUH_DEKAT | undefined;
  setMataRabunJauhDekat: (mataRabunJauhDekat: MATA_RABUN_JAUH_DEKAT) => void;
  mataKatarak: YES_OR_NO | undefined;
  setMataKatarak: (mataKatarak: YES_OR_NO) => void;
  mataPeteregium: YES_OR_NO | undefined;
  setMataPeteregium: (mataPeteregium: YES_OR_NO) => void;

  // Bagian kepala
  kepalaRiwayatBekasLukaOperasi: YES_OR_NO | undefined;
  setKepalaRiwayatBekasLukaOperasi: (riwayatBekasLukaOperasi: YES_OR_NO) => void;
  kepalaBentuk: BENTUK_KEPALA | undefined;
  setKepalaBentuk: (kepalaBentuk: BENTUK_KEPALA) => void;

  // Kaki
  kaki_X: YES_OR_NO | undefined;
  setKaki_X: (kaki_X: YES_OR_NO) => void;
  kaki_O: YES_OR_NO | undefined;
  setKaki_O: (kaki_K: YES_OR_NO) => void;
  kakiTelapakFlatDatar: YES_OR_NO | undefined;
  setKakiTelapakFlatDatar: (kakiTelapakFlatDatar: YES_OR_NO) => void;
  kakiPesKavus: YES_OR_NO | undefined;
  setKakiPesKavus: (kakiPesKavus: YES_OR_NO) => void;
  kakiVarises: YES_OR_NO | undefined;
  setKakiVarises: (kakiVarises: YES_OR_NO) => void;

  // Gigi
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

  wajahBercakHitam: YES_OR_NO | undefined;
  setWajahBercakHitam: (wajahBercakHitam: YES_OR_NO) => void;

  // Kesehatan Tangan
  tanganJariLeherAngsa: YES_OR_NO | undefined;
  setTanganJariLeherAngsa: (tanganJariLeherAngsa: YES_OR_NO) => void;
  tanganKelainanBoutonniere: YES_OR_NO | undefined;
  setTanganKelainanBoutonniere: (tanganKelainanBoutonniere: YES_OR_NO) => void;
  tanganKelainanDopuytren: YES_OR_NO | undefined;
  setTanganKelainanDopuytren: (tanganKelainanDopuytren: YES_OR_NO) => void;
  tanganBerkeringat: YES_OR_NO | undefined;
  setTanganBerkeringat: (tanganBerkeringat: YES_OR_NO) => void;
  tanganPanjangSebelah: YES_OR_NO | undefined;
  setTanganPanjangSebelah: (tanganPanjangSebelah: YES_OR_NO) => void;
  tanganGemetarSaatDiluruskan: YES_OR_NO | undefined;
  setTanganGemetarSaatDiluruskan: (tanganGemetarSaatDiluruskan: YES_OR_NO) => void;

  // Telinga
  telingaGendangRobek: YES_OR_NO | undefined;
  setTelingaGendangRobek: (telingaGendangRobek: YES_OR_NO) => void;
  telingaLebarSebelah: YES_OR_NO | undefined;
  setTelingaLebarSebelah: (telingaLebarSebelah: YES_OR_NO) => void;

  // Hidung
  hidungPatahTulang: YES_OR_NO | undefined;
  setHidungPatahTulang: (hidungPatahTulang: YES_OR_NO) => void;

  // Punggung
  punggungLordosis: YES_OR_NO | undefined;
  setPunggungLordosis: (punggungLordosis: YES_OR_NO) => void;
  punggungKifosis: YES_OR_NO | undefined;
  setPunggungKifosis: (punggungKifosis: YES_OR_NO) => void;
  punggungSkoliosis: YES_OR_NO | undefined;
  setPunggungSkoliosis: (punggungSkoliosis: YES_OR_NO) => void;

  // Lainnya
  ambeyen: YES_OR_NO | undefined;
  setAmbeyen: (ambeyen: YES_OR_NO) => void;
  varikokel: YES_OR_NO | undefined;
  setVarikokel: (varikokel: YES_OR_NO) => void;
  herniaScrotalis: YES_OR_NO | undefined;
  setHerniaScrotalis: (herniaScrotalis: YES_OR_NO) => void;
  jumlahTestis: JUMLAH_TESTIS | undefined;
  setJumlahTestis: (jumlahTestis: JUMLAH_TESTIS) => void;
  kondisiAlatReproduksi: KONDISI_ALAT_REPRODUKSI | undefined;
  setKondisiAlatReproduksi: (kondisiAlatReproduksi: KONDISI_ALAT_REPRODUKSI) => void;
};

export default AppContextType;
