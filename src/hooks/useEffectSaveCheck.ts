import { useEffect } from "react";

import YES_OR_NO from "../finals/basic/YES_OR_NO";

import UMUR from "../finals/UMUR";
import SEKOLAH from "../finals/SEKOLAH";
import JURUSAN from "../finals/JURUSAN";
import TINGGI_BADAN from "../finals/TINGGI_BADAN";
import MINUS from "../finals/MINUS";

// Kesehatan Mata
import MATA_RABUN_JAUH_DEKAT from "../finals/kesehatan/mata/MATA_RABUN_JAUH_DEKAT";

import BENTUK_KEPALA from "../finals/kesehatan/bagian-kepala/BENTUK_KEPALA";

// Kesehatan Gigi
import GIGI_OMPONG from "../finals/kesehatan/gigi/GIGI_OMPONG";
import GIGI_JUMLAH from "../finals/kesehatan/gigi/GIGI_JUMLAH";
import GIGI_RAPIH from "../finals/kesehatan/gigi/GIGI_RAPIH";
import GIGI_FRAKTUR from "../finals/kesehatan/gigi/GIGI_FRAKTUR";

import LOCAL_STORAGE_KEY from "../finals/basic/LOCAL_STORAGE_KEY";

function useEffectSaveCheck(
  umur: UMUR | undefined,
  sekolah: SEKOLAH | undefined,
  jurusan: JURUSAN | undefined,
  tinggiBadan: TINGGI_BADAN | undefined,
  butaWarna: YES_OR_NO | undefined,
  minus: MINUS | undefined,

  // Kesehatan
  mataRabunJauhDekat: MATA_RABUN_JAUH_DEKAT | undefined,
  mataKatarak: YES_OR_NO | undefined,
  mataPeteregium: YES_OR_NO | undefined,

  kepalaRiwayatBekasLukaOperasi: YES_OR_NO | undefined,
  kepalaBentuk: BENTUK_KEPALA | undefined,

  kaki_X: YES_OR_NO | undefined,
  kaki_O: YES_OR_NO | undefined,
  kakiTelapakFlatDatar: YES_OR_NO | undefined,
  kakiPesKavus: YES_OR_NO | undefined,
  kakiVarises: YES_OR_NO | undefined,

  gigiOmpong: GIGI_OMPONG | undefined,
  gigiJumlah: GIGI_JUMLAH | undefined,
  gigiRapih: GIGI_RAPIH | undefined,
  gigiFraktur: GIGI_FRAKTUR | undefined,
  gigiBerjejal: YES_OR_NO | undefined,
  gigiOpenBite: YES_OR_NO | undefined,
  gigiOverBite: YES_OR_NO | undefined,
  gigiCrossBite: YES_OR_NO | undefined,
  gigiImpaksi: YES_OR_NO | undefined,
  gigiRusakBerlubang: YES_OR_NO | undefined,
  gigiBerjamur: YES_OR_NO | undefined,
  gigiBerjamurKuning: YES_OR_NO | undefined,
  gigiAbrasi: YES_OR_NO | undefined,
  gigiPalsuLepasPasang: YES_OR_NO | undefined,
  gigiBehel: YES_OR_NO | undefined,
  gigiKelainanSendi: YES_OR_NO | undefined,
  gigiTonggos: YES_OR_NO | undefined,
  gigiAbsesKistaTumor: YES_OR_NO | undefined,

  wajahBercakHitam: YES_OR_NO | undefined,

  tanganJariLeherAngsa: YES_OR_NO | undefined,
  tanganKelainanBoutonniere: YES_OR_NO | undefined,
  tanganKelainanDopuytren: YES_OR_NO | undefined,
  tanganBerkeringat: YES_OR_NO | undefined,
  tanganPanjangSebelah: YES_OR_NO | undefined,
  tanganGemetarSaatDiluruskan: YES_OR_NO | undefined,

  hidungPatahTulang: YES_OR_NO | undefined
) {
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY.UMUR, umur || "");
    localStorage.setItem(LOCAL_STORAGE_KEY.SEKOLAH, sekolah || "");
    localStorage.setItem(LOCAL_STORAGE_KEY.JURUSAN, jurusan || "");
    localStorage.setItem(LOCAL_STORAGE_KEY.TINGGI_BADAN, tinggiBadan || "");
    localStorage.setItem(LOCAL_STORAGE_KEY.BUTA_WARNA, butaWarna || "");
    localStorage.setItem(LOCAL_STORAGE_KEY.MINUS, minus || "");

    // Kesehatan Mata
    localStorage.setItem(LOCAL_STORAGE_KEY.MATA_RABUN_JAUH_DEKAT, mataRabunJauhDekat || "");
    localStorage.setItem(LOCAL_STORAGE_KEY.MATA_KATARAK, mataKatarak || "");
    localStorage.setItem(LOCAL_STORAGE_KEY.MATA_PETEREGIUM, mataPeteregium || "");

    // Bentuk kepala
    localStorage.setItem(LOCAL_STORAGE_KEY.KEPALA_RIWAYAT_BEKAS_LUKA_OPERASI, kepalaRiwayatBekasLukaOperasi || "");
    localStorage.setItem(LOCAL_STORAGE_KEY.KEPALA_BENTUK_KEPALA, kepalaBentuk || "");

    // Kesehatan Kaki
    localStorage.setItem(LOCAL_STORAGE_KEY.KAKI_X, kaki_X || "");
    localStorage.setItem(LOCAL_STORAGE_KEY.KAKI_O, kaki_O || "");
    localStorage.setItem(LOCAL_STORAGE_KEY.KAKI_TELAPAK_FLAT_DATAR, kakiTelapakFlatDatar || "");
    localStorage.setItem(LOCAL_STORAGE_KEY.KAKI_TELAPAK_KAKU_PES_KAVUS_BERBENTUK_CAKAR, kakiPesKavus || "");
    localStorage.setItem(LOCAL_STORAGE_KEY.KAKI_VARISES, kakiVarises || "");

    // Kesehatan Gigi
    localStorage.setItem(LOCAL_STORAGE_KEY.GIGI_OMPONG, gigiOmpong || "");
    localStorage.setItem(LOCAL_STORAGE_KEY.GIGI_JUMLAH, gigiJumlah || "");
    localStorage.setItem(LOCAL_STORAGE_KEY.GIGI_RAPIH, gigiRapih || "");
    localStorage.setItem(LOCAL_STORAGE_KEY.GIGI_FRAKTUR, gigiFraktur || "");
    localStorage.setItem(LOCAL_STORAGE_KEY.GIGI_BERJEJAL, gigiBerjejal || "");
    localStorage.setItem(LOCAL_STORAGE_KEY.GIGI_OPEN_BITE, gigiOpenBite || "");
    localStorage.setItem(LOCAL_STORAGE_KEY.GIGI_OVER_BITE, gigiOverBite || "");
    localStorage.setItem(LOCAL_STORAGE_KEY.GIGI_CROSS_BITE, gigiCrossBite || "");
    localStorage.setItem(LOCAL_STORAGE_KEY.GIGI_IMPAKSI, gigiImpaksi || "");
    localStorage.setItem(LOCAL_STORAGE_KEY.GIGI_RUSAK_BERLUBANG, gigiRusakBerlubang || "");
    localStorage.setItem(LOCAL_STORAGE_KEY.GIGI_BERJAMUR, gigiBerjamur || "");
    localStorage.setItem(LOCAL_STORAGE_KEY.GIGI_BERJAMUR_KUNING, gigiBerjamurKuning || "");
    localStorage.setItem(LOCAL_STORAGE_KEY.GIGI_ABRASI, gigiAbrasi || "");
    localStorage.setItem(LOCAL_STORAGE_KEY.GIGI_PALSU_LEPAS_PASANG, gigiPalsuLepasPasang || "");
    localStorage.setItem(LOCAL_STORAGE_KEY.GIGI_BEHEL, gigiBehel || "");
    localStorage.setItem(LOCAL_STORAGE_KEY.GIGI_KELAINAN_SENDI, gigiKelainanSendi || "");
    localStorage.setItem(LOCAL_STORAGE_KEY.GIGI_TONGGOS, gigiTonggos || "");
    localStorage.setItem(LOCAL_STORAGE_KEY.GIGI_ABSES_KISTA_TUMOR_KELAINAN_KELENJAR_LUDAH, gigiAbsesKistaTumor || "");

    localStorage.setItem(
      LOCAL_STORAGE_KEY.WAJAH_BERCAK_HITAM,
      wajahBercakHitam || ""
    );

    // Kesehatan Tangan
    localStorage.setItem(LOCAL_STORAGE_KEY.TANGAN_JARI_LEHER_ANGSA, tanganJariLeherAngsa || "");
    localStorage.setItem(LOCAL_STORAGE_KEY.TANGAN_KELAINAN_BOUTONNIERE, tanganKelainanBoutonniere || "");
    localStorage.setItem(LOCAL_STORAGE_KEY.TANGAN_KELAINAN_DOPUYTREN, tanganKelainanDopuytren || "");
    localStorage.setItem(LOCAL_STORAGE_KEY.TANGAN_TELAPAK_TANGAN_BERKERINGAT, tanganBerkeringat || "");
    localStorage.setItem(LOCAL_STORAGE_KEY.TANGAN_PANJANG_SEBELAH, tanganPanjangSebelah || "");
    localStorage.setItem(LOCAL_STORAGE_KEY.TANGAN_GEMETAR_SAAT_DILURUSKAN, tanganGemetarSaatDiluruskan || "");

    // Hidung
    localStorage.setItem(LOCAL_STORAGE_KEY.HIDUNG_PATAH_TULANG, hidungPatahTulang || "");
  }, [
    // Basic
    umur,
    sekolah,
    jurusan,
    tinggiBadan,
    butaWarna,
    minus,

    // Kesehatan Mata
    mataRabunJauhDekat,
    mataKatarak,
    mataPeteregium,

    // Bentuk kepala
    kepalaRiwayatBekasLukaOperasi,
    kepalaBentuk,

    // Kaki
    kaki_X,
    kaki_O,
    kakiTelapakFlatDatar,
    kakiPesKavus,
    kakiVarises,

    // Kesehatan Gigi
    gigiOmpong,
    gigiJumlah,
    gigiRapih,
    gigiFraktur,
    gigiBerjejal,
    gigiOpenBite,
    gigiOverBite,
    gigiCrossBite,
    gigiImpaksi,
    gigiRusakBerlubang,
    gigiBerjamur,
    gigiBerjamurKuning,
    gigiAbrasi,
    gigiPalsuLepasPasang,
    gigiBehel,
    gigiKelainanSendi,
    gigiTonggos,
    gigiAbsesKistaTumor,

    wajahBercakHitam,

    // Kesehatan tangan
    tanganJariLeherAngsa,
    tanganKelainanBoutonniere,
    tanganKelainanDopuytren,
    tanganBerkeringat,
    tanganPanjangSebelah,
    tanganGemetarSaatDiluruskan,

    hidungPatahTulang
  ]);
}

export default useEffectSaveCheck;
