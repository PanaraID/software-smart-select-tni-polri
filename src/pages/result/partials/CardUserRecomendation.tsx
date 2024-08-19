import { useContext } from "react";
import AppContext from "../../../context/AppContext.tsx";

import MATRA from "../../../finals/MATRA.ts";
import BUTA_WARNA from "../../../finals/BUTA_WARNA.ts";
import MINUS from "../../../finals/MINUS.ts";

import { Button, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import AllDataNotFilled from "./AllDataNotFilled.tsx";

function isFilledAll(matra: MATRA | undefined, butaWarna: BUTA_WARNA | undefined, minus: MINUS | undefined): boolean {
  // Memastikan semua data diisi
  return matra !== undefined && butaWarna !== undefined && minus !== undefined;
}

function getRecomendations(): string[][] {
  return [
    ["masih kosong", "masih kosong"],
    ["masih kosong", "masih kosong"],
  ];
}

function CardUserRecomendation() {
  const { matra, butaWarna, minus } = useContext(AppContext);

  const isFilled = isFilledAll(matra, butaWarna, minus);
  const recomendations = getRecomendations();

  return (
    <Card>
      <Card.Header>
        Berdasarkan data tersebut maka berikut adalah rekomendasinya:
      </Card.Header>
      <Card.Body>
        <ListGroup>
          {!isFilled && <AllDataNotFilled />}

          {/* Menampilkan rekomendasi */}
          {isFilled && recomendations.map((value, index) => {
            return (
              <ListGroupItem key={index} className="d-flex justify-content-between align-items-center">
                <span>{value[0]}</span>
                <Button variant="primary" onClick={() => alert(value[1])}>Lanjutkan</Button>
              </ListGroupItem>
            );
          })}
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default CardUserRecomendation;
