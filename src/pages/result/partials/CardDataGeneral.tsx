import { useContext } from "react";
import AppContext from "../../../context/AppContext";

import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

import UMUR from "../../../finals/UMUR";
import SEKOLAH from "../../../finals/SEKOLAH";
import JURUSAN from "../../../finals/JURUSAN";
import BUTA_WARNA from "../../../finals/BUTA_WARNA";
import MINUS from "../../../finals/MINUS";

import Filled from "./Filled";
import NotFilled from "./NotFilled";

function CardDataGeneral() {
  const { umur, sekolah, jurusan, butaWarna, minus } = useContext(AppContext);

  const theUmur = UMUR[umur as unknown as keyof typeof UMUR];
  const theSekolah = SEKOLAH[sekolah as unknown as keyof typeof SEKOLAH];
  const theJurusan = JURUSAN[jurusan as unknown as keyof typeof JURUSAN];
  const theButaWarna = BUTA_WARNA[butaWarna as unknown as keyof typeof BUTA_WARNA];
  const theMinus = MINUS[minus as unknown as keyof typeof MINUS];

  return (
    <Card>
      <Card.Header>Data Umum</Card.Header>
      <Card.Body>
        <ListGroup>
          <ListGroupItem>
            Umur: {theUmur ? <Filled text={theUmur} /> : <NotFilled />}
          </ListGroupItem>
          <ListGroupItem>
            Asal Sekolah: {theSekolah ? <Filled text={theSekolah} /> : <NotFilled />}
          </ListGroupItem>
          <ListGroupItem>
            Asal Jurusan: {theJurusan ? <Filled text={theJurusan} /> : <NotFilled />}
          </ListGroupItem>
          <ListGroupItem>
            Buta Warna: {theButaWarna ? <Filled text={theButaWarna} /> : <NotFilled />}
          </ListGroupItem>
          <ListGroupItem>
            Mata Minus: {theMinus ? <Filled text={theMinus} /> : <NotFilled />}
          </ListGroupItem>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default CardDataGeneral;
