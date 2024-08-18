import { useContext } from "react";
import AppContext from "../../../context/AppContext.tsx";

import MATRA from "../../../finals/MATRA.ts";
import BUTA_WARNA from "../../../finals/BUTA_WARNA.ts";
import MINUS from "../../../finals/MINUS.ts";

import  {Card, ListGroup, ListGroupItem } from "react-bootstrap";
import NotFilled from "./NotFilled.tsx";

function CardUserInput() {
  const { matra, butaWarna, minus } = useContext(AppContext);

  return (
    <Card>
      <Card.Header>
        Berikut adalah daftar data yang anda masukkan:
      </Card.Header>
      <Card.Body>
        <ListGroup>
          <ListGroupItem>
            Matra: {matra ? MATRA[matra] : <NotFilled />}
          </ListGroupItem>
          <ListGroupItem>
            Buta Warna: {butaWarna ? BUTA_WARNA[butaWarna] : <NotFilled />}
          </ListGroupItem>
          <ListGroupItem>
            Mata minus: {minus ? MINUS[minus] : <NotFilled />}
          </ListGroupItem>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default CardUserInput;