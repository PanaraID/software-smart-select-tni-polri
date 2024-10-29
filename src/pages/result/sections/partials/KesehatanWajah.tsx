import { ListGroup, ListGroupItem } from "react-bootstrap";
import { useContext } from "react";

import AppContext from "../../../../context/AppContext";

import YES_OR_NO from "../../../../finals/basic/YES_OR_NO";

import Filled from "../../partials/Filled";
import NotFilled from "../../partials/NotFilled";

function KesehatanWajah() {
  const { wajahBercakHitam } = useContext(AppContext);
  
  const theWajahBercakHitam =
  YES_OR_NO[
    wajahBercakHitam as unknown as keyof typeof YES_OR_NO
  ];

  return (
    <ListGroupItem>
      Wajah
      <ListGroup numbered>
        <ListGroupItem>
          Wajah Bercak Hitam {theWajahBercakHitam ? <Filled text={theWajahBercakHitam} /> : <NotFilled />}
        </ListGroupItem>
      </ListGroup>
    </ListGroupItem>
  );
}

export default KesehatanWajah;
