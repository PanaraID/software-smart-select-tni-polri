import "./matra.css";
import { ListGroup } from "react-bootstrap";

import MatraRow from "./partials/MatraRow";

import MatraRowMata from "./sections/MatraRowMata";
import MatraRowGigi from "./sections/MatraRowGigi";
import MatraRowKepala from "./sections/MatraRowKepala";
import MatraRowTelinga from "./sections/MatraRowTelinga";
import MatraRowHidung from "./sections/MatraRowHidung";
import MatraRowWajah from "./sections/MatraRowWajah";

import ButtonNavigation from "../../../partials/button-navigation/ButtonNavigation";

export default function MatraPaPKTNI() {
  return (
    <>
      <section id="matra">
        <MatraRow title="Matra">
          PA PK TNI
        </MatraRow>
        <MatraRow title="Usia Saat Pembukaan">
          Berusia paling tinggi 30 tahun 
        </MatraRow>
        <MatraRow title="SLTA">
          Telah lulus dan berijazah D4, S1, S1-Profesi atau S2 dengan jurusan/ prodi kebutuhan TNI
        </MatraRow>
        <MatraRow title="Jurusan">
          -
        </MatraRow>
        <MatraRowMata />
        <MatraRowGigi />
        <MatraRowKepala />
        <MatraRowTelinga />
        <MatraRowHidung />
        <MatraRowWajah />
        <MatraRow title="Tes Kulit dan Kelamin">
          <ListGroup numbered>
            <ListGroup.Item>
              <span>Gigi ompong tidak boleh</span>
              <ListGroup numbered>
                <ListGroup.Item>Ompong pada 1 gigi depan dengan celah lebih dari 2mm</ListGroup.Item>
                <ListGroup.Item>Ompong lebih dari 2 gigi belakang secara berurutan</ListGroup.Item>
              </ListGroup>
            </ListGroup.Item>
            <ListGroup.Item>Jumlah gigi minimal 28 dan tidak ada kelebihan gigi</ListGroup.Item>
          </ListGroup>
        </MatraRow>
      </section>
      <ButtonNavigation/>
    </>
  );
}