import { Card, ListGroup } from "react-bootstrap";

import KesehatanKepala from "./partials/KesehatanKepala";
import KesehatanMata from "./partials/KesehatanMata";
import KesehatanTelinga from "./partials/KesehatanTelinga";
import KesehatanHidung from "./partials/KesehatanHidung";
import KesehatanWajah from "./partials/KesehatanWajah";
import KesehatanTangan from "./partials/KesehatanTangan";

function CardCheckKesehatan() {
  return (
    <Card>
      <Card.Header>Cek Kesehatan</Card.Header>
      <Card.Body>
        <ListGroup>
          <KesehatanMata />
          <KesehatanKepala />
          <KesehatanTelinga />
          <KesehatanHidung />
          <KesehatanWajah />
          <KesehatanTangan />
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default CardCheckKesehatan;
