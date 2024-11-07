import { ListGroup } from "react-bootstrap";
import MatraRow from "../partials/MatraRow";

export default function MatraRowMata() {
  return (
    <MatraRow title="Mata">
      <span>Bagian Mata harus Sehat tidak boleh:</span>
      <ListGroup numbered>
        <ListGroup.Item>Mata Rabun Jauh ataupun Rabun dekat lebih dari 0,5</ListGroup.Item>
        <ListGroup.Item>Mata Katarak diakibatkan lensa mata yang keruh sehingga sinar ke retina terhalang</ListGroup.Item>
        <ListGroup.Item>Mata Peteregium disebabkan pertubungan jaringan berbentuk segitiga di lapisan membran tipis bening bagian putih mata"</ListGroup.Item>
      </ListGroup>
    </MatraRow>
  );
}
