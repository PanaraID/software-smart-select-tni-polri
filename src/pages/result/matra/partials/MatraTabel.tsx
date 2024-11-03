import { ListGroup } from "react-bootstrap";

type TyMatraTabel = {
  matraName: string;
}

export default function MatraTabel({ matraName }: TyMatraTabel) {
  return (
    <ListGroup variant="flush">
      <ListGroup.Item className="d-flex align-items-center">
        <span className="flex-1">Matra</span>
        <div className="flex-1">{matraName}</div>
      </ListGroup.Item>
    </ListGroup>
  );
}
