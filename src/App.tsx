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

// useEffect
import useEffectSaveActivePage from "./hooks/basic/useEffectSaveActivePage";
import useEffectSaveCheck from "./hooks/useEffectSaveCheck";

import ShowBasicPage from "./partials/app/ShowBasicPage";
import ShowCheckPage from "./partials/app/ShowCheckPage";
import ShowResultPage from "./partials/app/ShowResultPage";
import ShowRecommendationPage from "./partials/app/ShowRecommendationPage";

import Footer from "./partials/Footer";

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

    wajahBercakHitam
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
    ...kesehatanGigi,
    

    wajahBercakHitam,
    setWajahBercakHitam,
  };

  return (
    <>
      <main id="content" className="p-2 container card overflow-auto">
        <AppContext.Provider value={context}>
          <ShowBasicPage page={page} />
          <ShowCheckPage page={page} />
          <ShowResultPage page={page} />
          <ShowRecommendationPage page={page} />
        </AppContext.Provider>
      </main>
      <Footer />
    </>
  );
}

export default App;
