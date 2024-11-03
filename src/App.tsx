import "./App.css";

import PAGES from "./finals/basic/PAGES";
import LOCAL_STORAGE_KEY from "./finals/basic/LOCAL_STORAGE_KEY";

import AppContext from "./context/AppContext";
import AppContextType from "./context/AppContextType";

// useState
import useStatePage from "./hooks/basic/useStatePage";
import useStateUmur from "./hooks/useStateUmur";
import useStateSekolah from "./hooks/useStateSekolah";
import useStateJurusan from "./hooks/useStateJurusan";
import useStateTinggiBadan from "./hooks/useStateTinggiBadan";
import useStateButaWarna from "./hooks/useStateButaWarna";
import useStateMinus from "./hooks/useStateMinus";

// useState mata
import useStateMataRabunJauhDekat from "./hooks/kesehatan/mata/useStateMataRabunJauhDekat";
import useStateMataKatarak from "./hooks/kesehatan/mata/useStateMataKatarak";
import useStateMataPeteregium from "./hooks/kesehatan/mata/useStateMataPeteregium";

// useState bentuk kepala
import useStateKepalaRiwayatBekasLukaOperasi from "./hooks/kesehatan/bagian-kepala/useStateKepalaRiwayatBekasLukaOperasi";
import useStateKepalaBentuk from "./hooks/kesehatan/bagian-kepala/useStateKepalaBentuk";

// useState kaki
import useStateKaki_X from "./hooks/kesehatan/kaki/useStateKaki_X";
import useStateKaki_O from "./hooks/kesehatan/kaki/useStateKaki_O";
import useStateKakiTelapakFlatDatar from "./hooks/kesehatan/kaki/useStateKakiTelapakFlatDatar";
import useStateKakiPesKavus from "./hooks/kesehatan/kaki/useStateKakiPesKavus";
import useStateKakiVarises from "./hooks/kesehatan/kaki/useStateKakiVarises";

// useState gigi
import useStateGigiOmpong from "./hooks/kesehatan/gigi/useStateGigiOmpong";
import useStateGigiJumlah from "./hooks/kesehatan/gigi/useStateGigiJumlah";
import useStateGigiRapih from "./hooks/kesehatan/gigi/useStateGigiRapih";
import useStateGigiFraktur from "./hooks/kesehatan/gigi/useStateGigiFraktur";
import useStateGigiBerjejal from "./hooks/kesehatan/gigi/useStateGigiBerjejal";
import useStateGigiOpenBite from "./hooks/kesehatan/gigi/useStateGigiOpenBite";
import useStateGigiOverBite from "./hooks/kesehatan/gigi/useStateGigiOverBite";
import useStateGigiCrossBite from "./hooks/kesehatan/gigi/useStateGigiCrossBite";
import useStateGigiRusakBerlubang from "./hooks/kesehatan/gigi/useStateGigiRusakBerlubang";
import useStateGigiBerjamur from "./hooks/kesehatan/gigi/useStateGigiBerjamur";
import useStateGigiBerjamurKuning from "./hooks/kesehatan/gigi/useStateGigiBerjamurKuning";
import useStateGigiAbrasi from "./hooks/kesehatan/gigi/useStateGigiAbrasi";
import useStateGigiPalsuLepasPasang from "./hooks/kesehatan/gigi/useStateGigiPalsuLepasPasang";
import useStateGigiBehel from "./hooks/kesehatan/gigi/useStateGigiBehel";
import useStateGigiKelainanSendi from "./hooks/kesehatan/gigi/useStateGigiKelainanSendi";
import useStateGigiTonggos from "./hooks/kesehatan/gigi/useStateGigiTonggos";
import useStateGigiAbsesKistaTumorKelainanKelenjarLudah from "./hooks/kesehatan/gigi/useStateGigiAbsesKistaTumorKelainanKelenjarLudah";
import useStateGigiImpaksi from "./hooks/kesehatan/gigi/useStateGigiImpaksi";

import useStateWajahBercakHitam from "./hooks/kesehatan/wajah/useStateWajahBercakHitam";

// useState tangan
import useStateTanganJariLeherAngsa from "./hooks/kesehatan/bagian-tangan/useStateTanganJariLeherAngsa";
import useStateTanganKelaiananBoutonniere from "./hooks/kesehatan/bagian-tangan/useStateTanganKelaiananBoutonniere";
import useStateTanganKelainanDopuytren from "./hooks/kesehatan/bagian-tangan/useStateTanganKelainanDopuytren";
import useStateTanganBerkeringat from "./hooks/kesehatan/bagian-tangan/useStateTanganBerkeringat";
import useStateTanganPanjangSebelah from "./hooks/kesehatan/bagian-tangan/useStateTanganPanjangSebelah";
import useStateTanganGemetarSaatDiluruskan from "./hooks/kesehatan/bagian-tangan/useStateTanganGemetarSaatDiluruskan";

// useState telinga
import useStateTelingaGendangRobek from "./hooks/kesehatan/telinga/useStateTelingaGendangRobek";
import useStatetelingaLebarSebelah from "./hooks/kesehatan/telinga/useStateTelingaLebarSebelah";

// useState punggung
import useStatePunggungLordosis from "./hooks/kesehatan/punggung/useStatePunggungLordosis";
import useStatePunggungKifosis from "./hooks/kesehatan/punggung/useStatePunggungKifosis";
import useStatePunggungSkoliosis from "./hooks/kesehatan/punggung/useStatePunggungSkoliosis";

// useEffect
import useEffectSaveActivePage from "./hooks/basic/useEffectSaveActivePage";
import useEffectSaveCheck from "./hooks/useEffectSaveCheck";

import ShowBasicPage from "./partials/app/ShowBasicPage";
import ShowCheckPage from "./partials/app/ShowCheckPage";
import ShowResultPage from "./partials/app/ShowResultPage";

import Footer from "./partials/Footer";
import useStateHidungPatahTulang from "./hooks/kesehatan/hidung/useStateHidungPatahTulang";

import useStateAmbeyen from "./hooks/kesehatan/kesehatan-lainnya/useStateAmbeyen";
import useStateVarikokel from "./hooks/kesehatan/kesehatan-lainnya/useStateVarikokel";
import useStateHerniaScrotalis from "./hooks/kesehatan/kesehatan-lainnya/useStateHerniaScrotalis";
import useStateJumlahTestis from "./hooks/kesehatan/kesehatan-lainnya/useStateJumlahTestis";
import useStateKondisiAlatReproduksi from "./hooks/kesehatan/kesehatan-lainnya/useStateKondisiAlatReproduksi";

function App() {
  const [page, setPage] = useStatePage();

  // Check
  const [umur, setUmur] = useStateUmur();
  const [sekolah, setSekolah] = useStateSekolah();
  const [jurusan, setJurusan] = useStateJurusan();
  const [tinggiBadan, setTinggiBadan] = useStateTinggiBadan();
  const [butaWarna, setButaWarna] = useStateButaWarna();
  const [minus, setMinus] = useStateMinus();

  // Mata
  const [mataRabunJauhDekat, setMataRabunJauhDekat] = useStateMataRabunJauhDekat();
  const [mataKatarak, setMataKatarak] = useStateMataKatarak();
  const [mataPeteregium, setMataPeteregium] = useStateMataPeteregium();

  // Bentuk kepala
  const [kepalaRiwayatBekasLukaOperasi, setKepalaRiwayatBekasLukaOperasi] = useStateKepalaRiwayatBekasLukaOperasi();
  const [kepalaBentuk, setKepalaBentuk] = useStateKepalaBentuk();

  // Telinga
  const [telingaGendangRobek, setTelingaGendangRobek] = useStateTelingaGendangRobek();
  const [telingaLebarSebelah, setTelingaLebarSebelah] = useStatetelingaLebarSebelah();
  
  // Kaki
  const [kaki_X, setKaki_X] = useStateKaki_X();
  const [kaki_O, setKaki_O] = useStateKaki_O();
  const [kakiTelapakFlatDatar, setKakiTelapakFlatDatar] = useStateKakiTelapakFlatDatar();
  const [kakiPesKavus, setKakiPesKavus] = useStateKakiPesKavus();
  const [kakiVarises, setKakiVarises] = useStateKakiVarises();

  // Gigi
  const [gigiOmpong, setGigiOmpong] = useStateGigiOmpong();
  const [gigiJumlah, setGigiJumlah] = useStateGigiJumlah();
  const [gigiRapih, setGigiRapih] = useStateGigiRapih();
  const [gigiFraktur, setGigiFraktur] = useStateGigiFraktur();
  const [gigiBerjejal, setGigiBerjejal] = useStateGigiBerjejal();
  const [gigiOpenBite, setGigiOpenBite] = useStateGigiOpenBite();
  const [gigiOverBite, setGigiOverBite] = useStateGigiOverBite();
  const [gigiCrossBite, setGigiCrossBite] = useStateGigiCrossBite();
  const [gigiImpaksi, setGigiImpaksi] = useStateGigiImpaksi();
  const [gigiRusakBerlubang, setGigiRusakBerlubang] = useStateGigiRusakBerlubang();
  const [gigiBerjamur, setGigiBerjamur] = useStateGigiBerjamur();
  const [gigiBerjamurKuning, setGigiBerjamurKuning] = useStateGigiBerjamurKuning();
  const [gigiAbrasi, setGigiAbrasi] = useStateGigiAbrasi();
  const [gigiPalsuLepasPasang, setGigiPalsuLepasPasang] = useStateGigiPalsuLepasPasang();
  const [gigiBehel, setGigiBehel] = useStateGigiBehel();
  const [gigiKelainanSendi, setGigiKelainanSendi] = useStateGigiKelainanSendi();
  const [gigiTonggos, setGigiTonggos] = useStateGigiTonggos();
  const [gigiAbsesKistaTumor, setGigiAbsesKistaTumor] = useStateGigiAbsesKistaTumorKelainanKelenjarLudah();

  const [wajahBercakHitam, setWajahBercakHitam] = useStateWajahBercakHitam();

  // Bagian tangan
  const [tanganJariLeherAngsa, setTanganJariLeherAngsa] = useStateTanganJariLeherAngsa();
  const [tanganKelainanBoutonniere, setTanganKelainanBoutonniere] = useStateTanganKelaiananBoutonniere();
  const [tanganKelainanDopuytren, setTanganKelainanDopuytren] = useStateTanganKelainanDopuytren();
  const [tanganBerkeringat, setTanganBerkeringat] = useStateTanganBerkeringat();
  const [tanganPanjangSebelah, setTanganPanjangSebelah] = useStateTanganPanjangSebelah();
  const [tanganGemetarSaatDiluruskan, setTanganGemetarSaatDiluruskan] = useStateTanganGemetarSaatDiluruskan();

  const [hidungPatahTulang, setHidungPatahTulang] = useStateHidungPatahTulang();

  // Bagian punggung
  const [punggungLordosis, setPunggungLordosis] = useStatePunggungLordosis();
  const [punggungKifosis, setPunggungKifosis] = useStatePunggungKifosis();
  const [punggungSkoliosis, setPunggungSkoliosis] = useStatePunggungSkoliosis();

  // Lainnya
  const [ambeyen, setAmbeyen] = useStateAmbeyen();
  const [varikokel, setVarikokel] = useStateVarikokel();
  const [herniaScrotalis, setHerniaScrotalis] = useStateHerniaScrotalis();
  const [jumlahTestis, setJumlahTestis] = useStateJumlahTestis();
  const [kondisiAlatReproduksi, setKondisiAlatReproduksi] = useStateKondisiAlatReproduksi();

  // Menyimpan segala perubahan ke localStorage
  useEffectSaveActivePage(page);
  useEffectSaveCheck(
    umur,
    sekolah,
    jurusan,
    tinggiBadan,
    butaWarna,
    minus,

    // Kesehatan
    mataRabunJauhDekat,
    mataKatarak,
    mataPeteregium,

    // Bagian kepala
    kepalaRiwayatBekasLukaOperasi,
    kepalaBentuk,

    // Telinga
    telingaGendangRobek,
    telingaLebarSebelah,

    // Kaki
    kaki_X,
    kaki_O,
    kakiTelapakFlatDatar,
    kakiPesKavus,
    kakiVarises,
    
    // Gigi
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

    tanganJariLeherAngsa,
    tanganKelainanBoutonniere,
    tanganKelainanDopuytren,
    tanganBerkeringat,
    tanganPanjangSebelah,
    tanganGemetarSaatDiluruskan,

    hidungPatahTulang,

    punggungLordosis,
    punggungKifosis,
    punggungSkoliosis,
    
    ambeyen,
    varikokel,
    herniaScrotalis,
    jumlahTestis,
    kondisiAlatReproduksi,
  );

  function setMyPage(data: PAGES) {
    localStorage.setItem(LOCAL_STORAGE_KEY.BEFORE_PAGE, page);
    setPage(data);
  }

  const kesehatanMata = {
    mataRabunJauhDekat,
    setMataRabunJauhDekat,

    mataKatarak,
    setMataKatarak,

    mataPeteregium,
    setMataPeteregium
  }

  const bagianKepala = {
    kepalaRiwayatBekasLukaOperasi,
    setKepalaRiwayatBekasLukaOperasi,

    kepalaBentuk,
    setKepalaBentuk
  }

  const kesehatanKaki = {
    kaki_X,
    setKaki_X,

    kaki_O,
    setKaki_O,

    kakiTelapakFlatDatar,
    setKakiTelapakFlatDatar,

    kakiPesKavus,
    setKakiPesKavus,

    kakiVarises,
    setKakiVarises
  }

  const kesehatanGigi = {
    gigiOmpong,
    setGigiOmpong,

    gigiJumlah,
    setGigiJumlah,

    gigiRapih,
    setGigiRapih,

    gigiFraktur,
    setGigiFraktur,

    gigiBerjejal,
    setGigiBerjejal,

    gigiOpenBite,
    setGigiOpenBite,

    gigiOverBite,
    setGigiOverBite,

    gigiCrossBite,
    setGigiCrossBite,

    gigiImpaksi,
    setGigiImpaksi,

    gigiRusakBerlubang,
    setGigiRusakBerlubang,

    gigiBerjamur,
    setGigiBerjamur,

    gigiBerjamurKuning,
    setGigiBerjamurKuning,

    gigiAbrasi,
    setGigiAbrasi,

    gigiPalsuLepasPasang,
    setGigiPalsuLepasPasang,

    gigiBehel,
    setGigiBehel,

    gigiKelainanSendi,
    setGigiKelainanSendi,

    gigiTonggos,
    setGigiTonggos,
    
    gigiAbsesKistaTumor,
    setGigiAbsesKistaTumor
  }

  const kesehatanTangan = {
    tanganJariLeherAngsa,
    setTanganJariLeherAngsa,
  
    tanganKelainanBoutonniere,
    setTanganKelainanBoutonniere,
  
    tanganKelainanDopuytren,
    setTanganKelainanDopuytren,
  
    tanganBerkeringat,
    setTanganBerkeringat,
  
    tanganPanjangSebelah,
    setTanganPanjangSebelah,
  
    tanganGemetarSaatDiluruskan,
    setTanganGemetarSaatDiluruskan,
  }

  const kesehatanTelinga = {
    telingaGendangRobek,
    setTelingaGendangRobek,

    telingaLebarSebelah,
    setTelingaLebarSebelah,
  }

  const kesehatanPunggung = {
    punggungLordosis,
    setPunggungLordosis,

    punggungKifosis,
    setPunggungKifosis,

    punggungSkoliosis,
    setPunggungSkoliosis
  }

  const kesehatanLainnya = {
    ambeyen,
    setAmbeyen,

    varikokel,
    setVarikokel,

    herniaScrotalis,
    setHerniaScrotalis,

    jumlahTestis,
    setJumlahTestis,

    kondisiAlatReproduksi,
    setKondisiAlatReproduksi
  }

  const context: AppContextType = {
    page,
    setPage: setMyPage,

    umur,
    setUmur,

    sekolah,
    setSekolah,

    jurusan,
    setJurusan,

    tinggiBadan,
    setTinggiBadan,

    butaWarna,
    setButaWarna,

    minus,
    setMinus,

    ...kesehatanMata,
    ...bagianKepala,
    ...kesehatanKaki,
    ...kesehatanGigi,
    ...kesehatanTelinga,
    ...kesehatanTangan,
    ...kesehatanPunggung,
    ...kesehatanLainnya,
    
    wajahBercakHitam,
    setWajahBercakHitam,

    hidungPatahTulang,
    setHidungPatahTulang
  };

  return (
    <>
      <main id="content" className="p-2 container card overflow-auto">
        <AppContext.Provider value={context}>
          <ShowBasicPage page={page} />
          <ShowCheckPage page={page} />
          <ShowResultPage page={page} />
        </AppContext.Provider>
      </main>
      <Footer />
    </>
  );
}

export default App;
