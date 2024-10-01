import { useContext } from "react";
import AppContext from "../../../context/AppContext";

import YES_OR_NO from "../../../finals/basic/YES_OR_NO";
import MINUS from "../../../finals/MINUS";

import {Button, Card, ListGroup, ListGroupItem} from "react-bootstrap";
import AllDataNotFilled from "./AllDataNotFilled";
import PAGES from "../../../finals/basic/PAGES";

function isFilledAll(butaWarna: YES_OR_NO | undefined, minus: MINUS | undefined): boolean {
  // Memastikan semua data diisi
  return butaWarna !== undefined && minus !== undefined;
}

function getRecommendations(): [string, PAGES][] {
  return [
    ["Rekomendasi 1", PAGES.RECOMMENDATION_1]
  ];
}

function CardUserRecommendation() {
  const {setPage, butaWarna, minus} = useContext(AppContext);

  const isFilled = isFilledAll(butaWarna, minus);
  const recommendations = getRecommendations();

  return (
    <Card>
      <Card.Header>
        Berdasarkan data tersebut maka berikut adalah rekomendasinya:
      </Card.Header>
      <Card.Body>
        <ListGroup>
          {!isFilled && <AllDataNotFilled/>}

          {/* Menampilkan rekomendasi */}
          {isFilled && recommendations.map((value, index) => {
            return (
              <ListGroupItem key={index} className="d-flex justify-content-between align-items-center">
                <span>{value[0]}</span>
                <Button variant="primary" onClick={() => setPage(value[1])}>Lanjutkan</Button>
              </ListGroupItem>
            );
          })}
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default CardUserRecommendation;
