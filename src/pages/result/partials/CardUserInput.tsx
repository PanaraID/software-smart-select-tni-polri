import { useContext } from "react";
import AppContext from "../../../context/AppContext.tsx";

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
            Matra: {matra ? matra : <NotFilled />}
          </ListGroupItem>
          <ListGroupItem>
            Buta Warna: {butaWarna ? butaWarna : <NotFilled />}
          </ListGroupItem>
          <ListGroupItem>
            Mata minus: {minus ? minus : <NotFilled />}
          </ListGroupItem>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default CardUserInput;