import { ListGroup, ListGroupItem } from "react-bootstrap";
import { useContext } from "react";

import AppContext from "../../../../context/AppContext";
import YES_OR_NO from "../../../../finals/basic/YES_OR_NO";

import Filled from "../../partials/Filled";
import NotFilled from "../../partials/NotFilled";

function KesehatanKaki() {
  const {
    kaki_X,
    kaki_O,
    kakiTelapakFlatDatar,
    kakiPesKavus,
    kakiVarises,
  } = useContext(AppContext);

  const _kaki_X = kaki_X 
    ? YES_OR_NO[kaki_X as unknown as keyof typeof YES_OR_NO] 
    : null;
  const _kaki_O = kaki_O 
    ? YES_OR_NO[kaki_O as unknown as keyof typeof YES_OR_NO] 
    : null;
  const _kakiTelapakFlatDatar = kakiTelapakFlatDatar 
    ? YES_OR_NO[kakiTelapakFlatDatar as unknown as keyof typeof YES_OR_NO] 
    : null;
  const _kakiPesKavus = kakiPesKavus 
    ? YES_OR_NO[kakiPesKavus as unknown as keyof typeof YES_OR_NO] 
    : null;
  const _kakiVarises = kakiVarises 
    ? YES_OR_NO[kakiVarises as unknown as keyof typeof YES_OR_NO] 
    : null;

  return (
    <ListGroupItem>
      Bagian Kaki
      <ListGroup numbered>
        <ListGroupItem>
          Kaki X {_kaki_X ? <Filled text={_kaki_X} /> : <NotFilled />}
        </ListGroupItem>
        <ListGroupItem>
          Kaki O {_kaki_O ? <Filled text={_kaki_O} /> : <NotFilled />}
        </ListGroupItem>
        <ListGroupItem>
          Kaki Telapak Flat Datar {_kakiTelapakFlatDatar ? <Filled text={_kakiTelapakFlatDatar} /> : <NotFilled />}
        </ListGroupItem>
        <ListGroupItem>
          Kaki Pes Kavus {_kakiPesKavus ? <Filled text={_kakiPesKavus} /> : <NotFilled />}
        </ListGroupItem>
        <ListGroupItem>
          Kaki Varises {_kakiVarises ? <Filled text={_kakiVarises} /> : <NotFilled />}
        </ListGroupItem>
      </ListGroup>
    </ListGroupItem>
  );
}

export default KesehatanKaki;
