import { ListGroup, ListGroupItem } from "react-bootstrap";
import { useContext } from "react";

import AppContext from "../../../../context/AppContext";

import YES_OR_NO from "../../../../finals/basic/YES_OR_NO";
import BENTUK_KEPALA from "../../../../finals/kesehatan/bagian-kepala/BENTUK_KEPALA";

import Filled from "../../partials/Filled";
import NotFilled from "../../partials/NotFilled";

function KesehatanKepala() {
  const { kepalaRiwayatBekasLukaOperasi, kepalaBentuk } = useContext(AppContext);
  
  const theKepalaRiwayatBekasLukaOperasi = kepalaRiwayatBekasLukaOperasi 
    ? YES_OR_NO[kepalaRiwayatBekasLukaOperasi as unknown as keyof typeof YES_OR_NO] 
    : null;
  const theKepalaBentuk = kepalaBentuk 
    ? BENTUK_KEPALA[kepalaBentuk as unknown as keyof typeof BENTUK_KEPALA] 
    : null;

  return (
    <ListGroupItem>
      Bagian Kepala
      <ListGroup numbered>
        <ListGroupItem>
          Riwayat Bekas Luka Operasi {theKepalaRiwayatBekasLukaOperasi ? <Filled text={theKepalaRiwayatBekasLukaOperasi} /> : <NotFilled />}
        </ListGroupItem>
        <ListGroupItem>
          Bentuk Kepala {theKepalaBentuk ? <Filled text={theKepalaBentuk} /> : <NotFilled />}
        </ListGroupItem>
      </ListGroup>
    </ListGroupItem>
  );
}

export default KesehatanKepala;
