import { ListGroup } from "react-bootstrap";
import MatraRow from "../partials/MatraRow";

export default function MatraRowTelinga() {
  return (
    <MatraRow title="Telinga">
      <ListGroup numbered>
        <ListGroup.Item>
          <span>Bagian Telinga tidak boleh</span>
          <ListGroup numbered>
            <ListGroup.Item>
              Gendang telinga robek atau peradangan
            </ListGroup.Item>
            <ListGroup.Item>Daun telinga lebar sebelah</ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
    </MatraRow>
  );
}
