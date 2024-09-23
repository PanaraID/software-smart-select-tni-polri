  import { useContext } from "react";
import AppContext from "../../../context/AppContext";

import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

import UMUR from "../../../finals/UMUR";
import SEKOLAH from "../../../finals/SEKOLAH";
import JURUSAN from "../../../finals/JURUSAN";
import BUTA_WARNA from "../../../finals/BUTA_WARNA";
import MINUS from "../../../finals/MINUS";

import NotFilled from "./NotFilled";

function CardCheckKesehatan() {
  const { umur, sekolah, jurusan, butaWarna, minus } = useContext(AppContext);

  const theUmur = UMUR[umur as unknown as keyof typeof UMUR];
  const theSekolah = SEKOLAH[umur as unknown as keyof typeof SEKOLAH];
  const theJurusan = JURUSAN[umur as unknown as keyof typeof JURUSAN];
  const theButaWarna = BUTA_WARNA[butaWarna as unknown as keyof typeof BUTA_WARNA];
  const theMinus = MINUS[minus as unknown as keyof typeof MINUS];

  return (
    <Card>
      <Card.Header>Cek Kesehatan</Card.Header>
      <Card.Body>
        <ListGroup>
          <ListGroupItem>
            Mata: {theUmur ?? <NotFilled />}
          </ListGroupItem>
          <ListGroupItem>
            Bagian Kepala: {theSekolah ?? <NotFilled />}
          </ListGroupItem>
          <ListGroupItem>
            Telinga: {theJurusan ?? <NotFilled />}
          </ListGroupItem>
          <ListGroupItem>
            Bagian Hidung: {theButaWarna ?? <NotFilled />}
          </ListGroupItem>
          <ListGroupItem>
            Wajah: {theMinus ?? <NotFilled />}
          </ListGroupItem>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default CardCheckKesehatan;
