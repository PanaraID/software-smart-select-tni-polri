import { ListGroup, ListGroupItem } from "react-bootstrap";
import { useContext } from "react";

import AppContext from "../../../../context/AppContext";

import YES_OR_NO from "../../../../finals/basic/YES_OR_NO";

import Filled from "../../partials/Filled";
import NotFilled from "../../partials/NotFilled";

function KesehatanHidung() {
  const { hidungPatahTulang } = useContext(AppContext);
  
  const theHidungPatahTulang = hidungPatahTulang 
    ? YES_OR_NO[hidungPatahTulang as unknown as keyof typeof YES_OR_NO] 
    : null;

  return (
    <ListGroupItem>
      Bagian Hidung
      <ListGroup numbered>
        <ListGroupItem>
          Patah Tulang Hidung {theHidungPatahTulang ? <Filled text={theHidungPatahTulang} /> : <NotFilled />}
        </ListGroupItem>
      </ListGroup>
    </ListGroupItem>
  );
}

export default KesehatanHidung;
