import { ListGroup, ListGroupItem } from "react-bootstrap";
import { useContext } from "react";

import AppContext from "../../../../context/AppContext";

import GIGI_OMPONG from "../../../../finals/kesehatan/gigi/GIGI_OMPONG";
import GIGI_JUMLAH from "../../../../finals/kesehatan/gigi/GIGI_JUMLAH";
import GIGI_RAPIH from "../../../../finals/kesehatan/gigi/GIGI_RAPIH";
import GIGI_FRAKTUR from "../../../../finals/kesehatan/gigi/GIGI_FRAKTUR";
import YES_OR_NO from "../../../../finals/basic/YES_OR_NO";

import Filled from "../../partials/Filled";
import NotFilled from "../../partials/NotFilled";

function KesehatanGigi() {
  const { 
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
  } = useContext(AppContext);

  const _gigiOmpong = gigiOmpong 
    ? GIGI_OMPONG[gigiOmpong as unknown as keyof typeof GIGI_OMPONG] 
    : null;
  const _gigiJumlah = gigiJumlah 
    ? GIGI_JUMLAH[gigiJumlah as unknown as keyof typeof GIGI_JUMLAH] 
    : null;
  const _gigiRapih = gigiRapih 
    ? GIGI_RAPIH[gigiRapih as unknown as keyof typeof GIGI_RAPIH] 
    : null;
  const _gigiFraktur = gigiFraktur 
    ? GIGI_FRAKTUR[gigiFraktur as unknown as keyof typeof GIGI_FRAKTUR] 
    : null;
  const _gigiBerjejal = gigiBerjejal 
    ? YES_OR_NO[gigiBerjejal as unknown as keyof typeof YES_OR_NO] 
    : null;
  const _gigiOpenBite = gigiOpenBite 
    ? YES_OR_NO[gigiOpenBite as unknown as keyof typeof YES_OR_NO] 
    : null;
  const _gigiOverBite = gigiOverBite 
    ? YES_OR_NO[gigiOverBite as unknown as keyof typeof YES_OR_NO] 
    : null;
  const _gigiCrossBite = gigiCrossBite 
    ? YES_OR_NO[gigiCrossBite as unknown as keyof typeof YES_OR_NO] 
    : null;
  const _gigiImpaksi = gigiImpaksi 
    ? YES_OR_NO[gigiImpaksi as unknown as keyof typeof YES_OR_NO] 
    : null;
  const _gigiRusakBerlubang = gigiRusakBerlubang 
    ? YES_OR_NO[gigiRusakBerlubang as unknown as keyof typeof YES_OR_NO] 
    : null;
  const _gigiBerjamur = gigiBerjamur 
    ? YES_OR_NO[gigiBerjamur as unknown as keyof typeof YES_OR_NO] 
    : null;
  const _gigiBerjamurKuning = gigiBerjamurKuning 
    ? YES_OR_NO[gigiBerjamurKuning as unknown as keyof typeof YES_OR_NO] 
    : null;
  const _gigiAbrasi = gigiAbrasi 
    ? YES_OR_NO[gigiAbrasi as unknown as keyof typeof YES_OR_NO] 
    : null;
  const _gigiPalsuLepasPasang = gigiPalsuLepasPasang 
    ? YES_OR_NO[gigiPalsuLepasPasang as unknown as keyof typeof YES_OR_NO] 
    : null;
  const _gigiBehel = gigiBehel 
    ? YES_OR_NO[gigiBehel as unknown as keyof typeof YES_OR_NO] 
    : null;
  const _gigiKelainanSendi = gigiKelainanSendi 
    ? YES_OR_NO[gigiKelainanSendi as unknown as keyof typeof YES_OR_NO] 
    : null;
  const _gigiTonggos = gigiTonggos 
    ? YES_OR_NO[gigiTonggos as unknown as keyof typeof YES_OR_NO] 
    : null;
  const _gigiAbsesKistaTumor = gigiAbsesKistaTumor 
    ? YES_OR_NO[gigiAbsesKistaTumor as unknown as keyof typeof YES_OR_NO] 
    : null;

  return (
    <ListGroupItem>
      Gigi
      <ListGroup numbered>
        <ListGroupItem>
          Gigi Ompong {_gigiOmpong ? <Filled text={_gigiOmpong} /> : <NotFilled />}
        </ListGroupItem>
        <ListGroupItem>
          Gigi Jumlah {_gigiJumlah ? <Filled text={_gigiJumlah} /> : <NotFilled />}
        </ListGroupItem>
        <ListGroupItem>
          Gigi Rapih {_gigiRapih ? <Filled text={_gigiRapih} /> : <NotFilled />}
        </ListGroupItem>
        <ListGroupItem>
          Gigi Fraktur {_gigiFraktur ? <Filled text={_gigiFraktur} /> : <NotFilled />}
        </ListGroupItem>
        <ListGroupItem>
          Gigi Berjejal {_gigiBerjejal ? <Filled text={_gigiBerjejal} /> : <NotFilled />}
        </ListGroupItem>
        <ListGroupItem>
          Gigi Open Bite {_gigiOpenBite ? <Filled text={_gigiOpenBite} /> : <NotFilled />}
        </ListGroupItem>
        <ListGroupItem>
          Gigi Over Bite {_gigiOverBite ? <Filled text={_gigiOverBite} /> : <NotFilled />}
        </ListGroupItem>
        <ListGroupItem>
          Gigi Cross Bite {_gigiCrossBite ? <Filled text={_gigiCrossBite} /> : <NotFilled />}
        </ListGroupItem>
        <ListGroupItem>
          Gigi Impaksi {_gigiImpaksi ? <Filled text={_gigiImpaksi} /> : <NotFilled />}
        </ListGroupItem>
        <ListGroupItem>
          Gigi Rusak/Berlubang {_gigiRusakBerlubang ? <Filled text={_gigiRusakBerlubang} /> : <NotFilled />}
        </ListGroupItem>
        <ListGroupItem>
          Gigi Berjamur {_gigiBerjamur ? <Filled text={_gigiBerjamur} /> : <NotFilled />}
        </ListGroupItem>
        <ListGroupItem>
          Gigi Berjamur Kuning {_gigiBerjamurKuning ? <Filled text={_gigiBerjamurKuning} /> : <NotFilled />}
        </ListGroupItem>
        <ListGroupItem>
          Gigi Abrasi {_gigiAbrasi ? <Filled text={_gigiAbrasi} /> : <NotFilled />}
        </ListGroupItem>
        <ListGroupItem>
          Gigi Palsu Lepas/Pasang {_gigiPalsuLepasPasang ? <Filled text={_gigiPalsuLepasPasang} /> : <NotFilled />}
        </ListGroupItem>
        <ListGroupItem>
          Gigi Behel {_gigiBehel ? <Filled text={_gigiBehel} /> : <NotFilled />}
        </ListGroupItem>
        <ListGroupItem>
          Kelainan Sendi {_gigiKelainanSendi ? <Filled text={_gigiKelainanSendi} /> : <NotFilled />}
        </ListGroupItem>
        <ListGroupItem>
          Gigi Tonggos {_gigiTonggos ? <Filled text={_gigiTonggos} /> : <NotFilled />}
        </ListGroupItem>
        <ListGroupItem>
          Abses/Kista/Tumor {_gigiAbsesKistaTumor ? <Filled text={_gigiAbsesKistaTumor} /> : <NotFilled />}
        </ListGroupItem>
      </ListGroup>
    </ListGroupItem>
  );
}

export default KesehatanGigi;
