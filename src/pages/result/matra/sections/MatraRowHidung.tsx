import { ListGroup } from "react-bootstrap";
import MatraRow from "../partials/MatraRow";

export default function MatraRowHidung() {
  return (
    <MatraRow title="Hidung">
      <ListGroup numbered>
        <ListGroup.Item>
          <span>Bagian Hidung tidak boleh</span>
          <ListGroup numbered>
            <ListGroup.Item>
            Patah tulang hidung
            </ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
    </MatraRow>
  );
}
