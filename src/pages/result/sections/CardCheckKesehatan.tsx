import { Accordion, Card } from "react-bootstrap";

import KesehatanKepala from "./partials/KesehatanKepala";
import KesehatanMata from "./partials/KesehatanMata";
import KesehatanTelinga from "./partials/KesehatanTelinga";
import KesehatanHidung from "./partials/KesehatanHidung";
import KesehatanWajah from "./partials/KesehatanWajah";
import KesehatanTangan from "./partials/KesehatanTangan";
import KesehatanTulangPunggung from "./partials/KesehatanTulangPunggung";
import KesehatanKaki from "./partials/KesehatanKaki";
import KesehatanLainnya from "./partials/KesehatanLainnya";
import KesehatanGigi from "./partials/KesehatanGigi";

function CardCheckKesehatan() {
  return (
    <Card>
      <Card.Header>Cek Kesehatan</Card.Header>
      <Card.Body>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Kesehatan Mata</Accordion.Header>
            <Accordion.Body>
              <KesehatanMata />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Kesehatan Kepala</Accordion.Header>
            <Accordion.Body>
              <KesehatanKepala />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Kesehatan Telinga</Accordion.Header>
            <Accordion.Body>
              <KesehatanTelinga />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Kesehatan Hidung</Accordion.Header>
            <Accordion.Body>
              <KesehatanHidung />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Kesehatan Wajah</Accordion.Header>
            <Accordion.Body>
              <KesehatanWajah />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>Kesehatan Tangan</Accordion.Header>
            <Accordion.Body>
              <KesehatanTangan />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>Kesehatan Tulang Punggung</Accordion.Header>
            <Accordion.Body>
              <KesehatanTulangPunggung />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header>Kesehatan Kaki</Accordion.Header>
            <Accordion.Body>
              <KesehatanKaki />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="8">
            <Accordion.Header>Kesehatan Lainnya</Accordion.Header>
            <Accordion.Body>
              <KesehatanLainnya />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="9">
            <Accordion.Header>Kesehatan Gigi</Accordion.Header>
            <Accordion.Body>
              <KesehatanGigi />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Card.Body>
    </Card>
  );
}

export default CardCheckKesehatan;
