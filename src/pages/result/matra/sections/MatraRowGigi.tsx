import { ListGroup } from "react-bootstrap";
import MatraRow from "../partials/MatraRow";

export default function MatraRowGigi() {
  return (
    <MatraRow title="Gigi">
      <ListGroup numbered>
        <ListGroup.Item>
          <span>Gigi ompong tidak boleh</span>
          <ListGroup numbered>
            <ListGroup.Item>Ompong pada 1 gigi depan dengan celah lebih dari 2mm</ListGroup.Item>
            <ListGroup.Item>Ompong lebih dari 2 gigi belakang secara berurutan</ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>
        <ListGroup.Item>Jumlah gigi minimal 28 dan tidak ada kelebihan gigi</ListGroup.Item>
        <ListGroup.Item>
          <span>Gigi Rapi</span>
          <ListGroup numbered>
            <ListGroup.Item>6 gigi depan (mulai dari caninus kiri – kanan), 4 gigi seri (rahang atas dan bawah) lengkap dan tidak ada caries</ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>
        <ListGroup.Item>6 gigi depan atas dan 6 gigi bawah harus dalam posisi gigitan normal</ListGroup.Item>
        <ListGroup.Item>Tidak ada gigi crowding atau berjejal, openbite, overbite, cross-bite</ListGroup.Item>
        <ListGroup.Item>Tidak boleh gigi impaksi</ListGroup.Item>
        <ListGroup.Item>Fraktur gigi kurang dari 1/3 gigi</ListGroup.Item>
        <ListGroup.Item>Dianjurkan gigi tidak berlubang</ListGroup.Item>
        <ListGroup.Item>Tidak ada abses, kista, tumor, kelainan kelenjar ludah</ListGroup.Item>
        <ListGroup.Item>Gigi tidak boleh berjamur, warna gigi dianjurkan tidak kuning</ListGroup.Item>
        <ListGroup.Item>Tidak boleh gigi abrasi</ListGroup.Item>
        <ListGroup.Item>Gigi palsu tidak boleh lepas pasang</ListGroup.Item>
        <ListGroup.Item>Tidak boleh memakai behel</ListGroup.Item>
        <ListGroup.Item>Tidak boleh ada kelainan sendi</ListGroup.Item>
        <ListGroup.Item>Tidak berlubang atau kotor rusak</ListGroup.Item>
        <ListGroup.Item>Gigi daerah senyum tidak ompong</ListGroup.Item>
        <ListGroup.Item>Gigi tidak ompong lebih dari 3</ListGroup.Item>
        <ListGroup.Item>Gigi tidak tonggos terlihat</ListGroup.Item>
      </ListGroup>
    </MatraRow>
  );
}
