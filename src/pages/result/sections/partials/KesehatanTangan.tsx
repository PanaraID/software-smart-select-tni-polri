import { ListGroup, ListGroupItem } from "react-bootstrap";
import { useContext } from "react";

import AppContext from "../../../../context/AppContext";

import YES_OR_NO from "../../../../finals/basic/YES_OR_NO";

import Filled from "../../partials/Filled";
import NotFilled from "../../partials/NotFilled";

function KesehatanTangan() {
  const { tanganJariLeherAngsa } = useContext(AppContext);
  
  const _tanganJariLeherAngsa = tanganJariLeherAngsa 
    ? YES_OR_NO[tanganJariLeherAngsa as unknown as keyof typeof YES_OR_NO] 
    : null;

  // TODO

  return (
    <ListGroupItem>
      Bagian Tangan
      <ListGroup numbered>
        <ListGroupItem>
          Tangan Jari Leher Angsa {_tanganJariLeherAngsa ? <Filled text={_tanganJariLeherAngsa} /> : <NotFilled />}
        </ListGroupItem>
      </ListGroup>
    </ListGroupItem>
  );
}

export default KesehatanTangan;
