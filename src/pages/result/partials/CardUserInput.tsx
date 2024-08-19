import { useContext } from "react";
import AppContext from "../../../context/AppContext.tsx";

import MATRA from "../../../finals/MATRA.ts";
import BUTA_WARNA from "../../../finals/BUTA_WARNA.ts";
import MINUS from "../../../finals/MINUS.ts";

import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import NotFilled from "./NotFilled.tsx";

function CardUserInput() {
  const { matra, butaWarna, minus } = useContext(AppContext);

  const theMatra = MATRA[matra as keyof typeof MATRA];
  const theButaWarna = BUTA_WARNA[butaWarna as unknown as keyof typeof BUTA_WARNA];
  const theMinus = MINUS[minus as unknown as keyof typeof MINUS];

  return (
    <Card>
      <Card.Header>Berikut adalah daftar data yang anda masukkan:</Card.Header>
      <Card.Body>
        <ListGroup>
          <ListGroupItem>
            Matra: {theMatra ?? <NotFilled />}
          </ListGroupItem>
          <ListGroupItem>
            Buta Warna: {theButaWarna ?? <NotFilled />}
          </ListGroupItem>
          <ListGroupItem>
            Mata minus: {theMinus ?? <NotFilled />}
          </ListGroupItem>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default CardUserInput;
