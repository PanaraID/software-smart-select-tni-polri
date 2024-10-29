import { ListGroup, ListGroupItem } from "react-bootstrap";
import { useContext } from "react";

import AppContext from "../../../../context/AppContext";

import YES_OR_NO from "../../../../finals/basic/YES_OR_NO";

import Filled from "../../partials/Filled";
import NotFilled from "../../partials/NotFilled";

function KesehatanTelinga() {
  const { telingaGendangRobek, telingaLebarSebelah } = useContext(AppContext);
  
  const theTelingaGendangRobek = telingaGendangRobek 
    ? YES_OR_NO[telingaGendangRobek as unknown as keyof typeof YES_OR_NO] 
    : null;
  const theTelingaLebarSebelah = telingaLebarSebelah 
    ? YES_OR_NO[telingaLebarSebelah as unknown as keyof typeof YES_OR_NO] 
    : null;

  return (
    <ListGroupItem>
      Telinga
      <ListGroup numbered>
        <ListGroupItem>
          Gendang Telinga Robek {theTelingaGendangRobek ? <Filled text={theTelingaGendangRobek} /> : <NotFilled />}
        </ListGroupItem>
        <ListGroupItem>
          Daun Telinga Lebar Sebelah {theTelingaLebarSebelah ? <Filled text={theTelingaLebarSebelah} /> : <NotFilled />}
        </ListGroupItem>
      </ListGroup>
    </ListGroupItem>
  );
}

export default KesehatanTelinga;
