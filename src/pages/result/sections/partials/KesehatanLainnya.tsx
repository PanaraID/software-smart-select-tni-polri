import { ListGroup, ListGroupItem } from "react-bootstrap";
import { useContext } from "react";

import AppContext from "../../../../context/AppContext";

import YES_OR_NO from "../../../../finals/basic/YES_OR_NO";

import JUMLAH_TESTIS from "../../../../finals/kesehatan/lainnya/JUMLAH_TESTIS";
import KONDISI_ALAT_REPRODUKSI from "../../../../finals/kesehatan/lainnya/KONDISI_ALAT_REPRODUKSI";

import Filled from "../../partials/Filled";
import NotFilled from "../../partials/NotFilled";

function KesehatanLainnya() {
  const {
    ambeyen,
    varikokel,
    herniaScrotalis,
    jumlahTestis,
    kondisiAlatReproduksi,
  } = useContext(AppContext);

  const _ambeyen = ambeyen 
    ? YES_OR_NO[ambeyen as unknown as keyof typeof YES_OR_NO] 
    : null;
  const _varikokel = varikokel 
    ? YES_OR_NO[varikokel as unknown as keyof typeof YES_OR_NO] 
    : null;
  const _herniaScrotalis = herniaScrotalis 
    ? YES_OR_NO[herniaScrotalis as unknown as keyof typeof YES_OR_NO] 
    : null;
  const _jumlahTestis = jumlahTestis 
    ? JUMLAH_TESTIS[jumlahTestis as unknown as keyof typeof JUMLAH_TESTIS] 
    : null;
  const _kondisiAlatReproduksi = kondisiAlatReproduksi 
    ? KONDISI_ALAT_REPRODUKSI[kondisiAlatReproduksi as unknown as keyof typeof KONDISI_ALAT_REPRODUKSI] 
    : null;

  return (
    <ListGroupItem>
      Kesehatan Lainnya
      <ListGroup numbered>
      <ListGroupItem>
          Ambeyen {_ambeyen ? <Filled text={_ambeyen} /> : <NotFilled />}
        </ListGroupItem>
        <ListGroupItem>
          Varikokel {_varikokel ? <Filled text={_varikokel} /> : <NotFilled />}
        </ListGroupItem>
        <ListGroupItem>
          Hernia Scrotalis {_herniaScrotalis ? <Filled text={_herniaScrotalis} /> : <NotFilled />}
        </ListGroupItem>
        <ListGroupItem>
          Jumlah Testis {_jumlahTestis ? <Filled text={_jumlahTestis} /> : <NotFilled />}
        </ListGroupItem>
        <ListGroupItem>
          Kondisi Alat Reproduksi {_kondisiAlatReproduksi ? <Filled text={_kondisiAlatReproduksi} /> : <NotFilled />}
        </ListGroupItem>
      </ListGroup>
    </ListGroupItem>
  );
}

export default KesehatanLainnya;
