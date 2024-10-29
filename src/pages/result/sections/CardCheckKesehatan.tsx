import { useContext } from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

import AppContext from "../../../context/AppContext";

import YES_OR_NO from "../../../finals/basic/YES_OR_NO";
import GIGI_OMPONG from "../../../finals/kesehatan/gigi/GIGI_OMPONG";

import Filled from "../partials/Filled";
import NotFilled from "../partials/NotFilled";

import KesehatanKepala from "./partials/KesehatanKepala";
import KesehatanMata from "./partials/KesehatanMata";

function CardCheckKesehatan() {
  const { wajahBercakHitam, gigiOmpong } = useContext(AppContext);

  const theWajahBercakHitam =
    YES_OR_NO[
      wajahBercakHitam as unknown as keyof typeof YES_OR_NO
    ];
  const theGigiOmpong =
    GIGI_OMPONG[
      gigiOmpong as unknown as keyof typeof GIGI_OMPONG
    ];

  return (
    <Card>
      <Card.Header>Cek Kesehatan</Card.Header>
      <Card.Body>
        <ListGroup>
          <KesehatanKepala />
          <KesehatanMata />
          <ListGroupItem>
            Wajah Bercak Hitam: {theWajahBercakHitam ? <Filled text={theWajahBercakHitam} /> : <NotFilled />}
          </ListGroupItem>
          <ListGroupItem>
            Gigi
            <ListGroup numbered>
              <ListGroupItem>
                Ompong: {theGigiOmpong ? <Filled text={theGigiOmpong} /> : <NotFilled />}
              </ListGroupItem>
            </ListGroup>
          </ListGroupItem>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default CardCheckKesehatan;
