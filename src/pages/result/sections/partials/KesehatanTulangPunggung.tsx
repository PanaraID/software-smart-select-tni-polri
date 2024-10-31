import { ListGroup, ListGroupItem } from "react-bootstrap";
import { useContext } from "react";

import AppContext from "../../../../context/AppContext";

import YES_OR_NO from "../../../../finals/basic/YES_OR_NO";

import Filled from "../../partials/Filled";
import NotFilled from "../../partials/NotFilled";

function KesehatanTulangPunggung() {
  const {
    punggungLordosis,
    punggungKifosis,
    punggungSkoliosis,
  } = useContext(AppContext);

  const _punggungLordosis = punggungLordosis 
    ? YES_OR_NO[punggungLordosis as unknown as keyof typeof YES_OR_NO] 
    : null;
  const _punggungKifosis = punggungKifosis 
    ? YES_OR_NO[punggungKifosis as unknown as keyof typeof YES_OR_NO] 
    : null;
  const _punggungSkoliosis = punggungSkoliosis 
    ? YES_OR_NO[punggungSkoliosis as unknown as keyof typeof YES_OR_NO] 
    : null;

  return (
    <ListGroupItem>
      Tulang Punggung
      <ListGroup numbered>
        <ListGroupItem>
          Punggung Lordosis {_punggungLordosis ? <Filled text={_punggungLordosis} /> : <NotFilled />}
        </ListGroupItem>
        <ListGroupItem>
          Punggung Kifosis {_punggungKifosis ? <Filled text={_punggungKifosis} /> : <NotFilled />}
        </ListGroupItem>
        <ListGroupItem>
          Punggung Skoliosis {_punggungSkoliosis ? <Filled text={_punggungSkoliosis} /> : <NotFilled />}
        </ListGroupItem>
      </ListGroup>
    </ListGroupItem>
  );
}

export default KesehatanTulangPunggung;
