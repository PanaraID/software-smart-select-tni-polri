import { ListGroup, ListGroupItem } from "react-bootstrap";
import { useContext } from "react";

import AppContext from "../../../../context/AppContext";
import MATA_RABUN_JAUH_DEKAT from "../../../../finals/kesehatan/mata/MATA_RABUN_JAUH_DEKAT";

import YES_OR_NO from "../../../../finals/basic/YES_OR_NO";

import Filled from "../../partials/Filled";
import NotFilled from "../../partials/NotFilled";

function KesehatanMata() {
  const { mataRabunJauhDekat, mataKatarak, mataPeteregium } = useContext(AppContext);
  
  const theMataRabunJauhDekat = mataRabunJauhDekat 
    ? MATA_RABUN_JAUH_DEKAT[mataRabunJauhDekat as unknown as keyof typeof MATA_RABUN_JAUH_DEKAT] 
    : null;
  const theMataKatarak = mataKatarak 
    ? YES_OR_NO[mataKatarak as unknown as keyof typeof YES_OR_NO] 
    : null;
  const theMataPeteregium = mataPeteregium 
    ? YES_OR_NO[mataPeteregium as unknown as keyof typeof YES_OR_NO] 
    : null;

  return (
    <ListGroupItem>
      Mata
      <ListGroup numbered>
        <ListGroupItem>
          Rabun Jauh / Dekat {theMataRabunJauhDekat ? <Filled text={theMataRabunJauhDekat} /> : <NotFilled />}
        </ListGroupItem>
        <ListGroupItem>
          Mata Katarak {theMataKatarak ? <Filled text={theMataKatarak} /> : <NotFilled />}
        </ListGroupItem>
        <ListGroupItem>
          Mata Peteregium {theMataPeteregium ? <Filled text={theMataPeteregium} /> : <NotFilled />}
        </ListGroupItem>
      </ListGroup>
    </ListGroupItem>
  );
}

export default KesehatanMata;
