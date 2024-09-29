import { useContext } from "react";
import AppContext from "../../../context/AppContext";

import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

import WAJAH_BERCAK_HITAM from "../../../finals/kesehatan/wajah/WAJAH_BERCAK_HITAM";

import GIGI_OMPONG from "../../../finals/kesehatan/gigi/GIGI_OMPONG";

import Filled from "../partials/Filled";
import NotFilled from "../partials/NotFilled";

function CardCheckKesehatan() {
  const { wajahBercakHitam, gigiOmpong } = useContext(AppContext);

  const theWajahBercakHitam =
    WAJAH_BERCAK_HITAM[
      wajahBercakHitam as unknown as keyof typeof WAJAH_BERCAK_HITAM
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
