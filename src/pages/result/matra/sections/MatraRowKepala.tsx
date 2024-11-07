import { ListGroup } from "react-bootstrap";
import MatraRow from "../partials/MatraRow";

export default function MatraRowKepala() {
  return (
    <MatraRow title="Bagian Kepala">
      <ListGroup numbered>
        <ListGroup.Item>Tidak Boleh ada riwayat atau bekas Luka Oprasi</ListGroup.Item>
        <ListGroup.Item>Kesempurnaan bentuk kepala Oval tidak gepeng atau benjol2</ListGroup.Item>
      </ListGroup>
    </MatraRow>
  );
}
