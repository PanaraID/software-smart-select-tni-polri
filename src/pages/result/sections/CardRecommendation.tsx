import { useContext } from "react";
import AppContext from "../../../context/AppContext";

import PAGES from "../../../finals/basic/PAGES";
import MATRA from "../../../finals/MATRA";
import { ListGroup, Card } from "react-bootstrap";
import "./CardRecommendation.css";

type PropsType = {
  title: string;
  action: PAGES;
}

function ItemOfCardRecommendation(props: PropsType) {
  const { setPage } = useContext(AppContext);
  return (
    <ListGroup.Item action onClick={() => setPage(props.action)} className="list-group-item-custom">
      {props.title}
    </ListGroup.Item>
  );
}

export default function CardRecommendation() {
  return (
    <Card className="card-custom">
      <Card.Header className="card-header-custom">Hasil Rekomendasi</Card.Header>
      <Card.Body style={{ padding: "0" }}>
        <ListGroup variant="flush">
          <ItemOfCardRecommendation title="POLRI TAMTAMA" action={PAGES.MATRA_PA_PK_TNI} />
        </ListGroup>
      </Card.Body>
    </Card>
  );
}
