import { ListGroup } from "react-bootstrap";
import MatraRow from "../partials/MatraRow";

export default function MatraRowWajah() {
  return (
    <MatraRow title="Wajah">
      <ListGroup numbered>
        <ListGroup.Item>Kulit wajah tidak boleh hitam bercak-bercak</ListGroup.Item>
      </ListGroup>
    </MatraRow>
  );
}
