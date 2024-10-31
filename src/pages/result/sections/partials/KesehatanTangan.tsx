import { ListGroup, ListGroupItem } from "react-bootstrap";
import { useContext } from "react";

import AppContext from "../../../../context/AppContext";

import YES_OR_NO from "../../../../finals/basic/YES_OR_NO";

import Filled from "../../partials/Filled";
import NotFilled from "../../partials/NotFilled";

function KesehatanTangan() {
  const {
    tanganJariLeherAngsa,
    tanganKelainanBoutonniere,
    tanganKelainanDopuytren,
    tanganBerkeringat,
    tanganPanjangSebelah,
    tanganGemetarSaatDiluruskan,
  } = useContext(AppContext);

  const _tanganJariLeherAngsa = tanganJariLeherAngsa
    ? YES_OR_NO[tanganJariLeherAngsa as unknown as keyof typeof YES_OR_NO]
    : null;
  const _tanganKelainanBoutonniere = tanganKelainanBoutonniere
    ? YES_OR_NO[tanganKelainanBoutonniere as unknown as keyof typeof YES_OR_NO]
    : null;
  const _tanganKelainanDopuytren = tanganKelainanDopuytren
    ? YES_OR_NO[tanganKelainanDopuytren as unknown as keyof typeof YES_OR_NO]
    : null;
  const _tanganBerkeringat = tanganBerkeringat
    ? YES_OR_NO[tanganBerkeringat as unknown as keyof typeof YES_OR_NO]
    : null;
  const _tanganPanjangSebelah = tanganPanjangSebelah
    ? YES_OR_NO[tanganPanjangSebelah as unknown as keyof typeof YES_OR_NO]
    : null;
  const _tanganGemetarSaatDiluruskan = tanganGemetarSaatDiluruskan
    ? YES_OR_NO[
        tanganGemetarSaatDiluruskan as unknown as keyof typeof YES_OR_NO
      ]
    : null;

  return (
    <ListGroupItem>
      Bagian Tangan
      <ListGroup numbered>
        <ListGroupItem>
          Tangan Jari Leher Angsa {_tanganJariLeherAngsa ? <Filled text={_tanganJariLeherAngsa} /> : <NotFilled />}
        </ListGroupItem>
        <ListGroupItem>
          Tangan Kelainan Boutonniere {_tanganKelainanBoutonniere ? <Filled text={_tanganKelainanBoutonniere} /> : <NotFilled />}
        </ListGroupItem>
        <ListGroupItem>
          Tangan Kelainan Dupuytren {_tanganKelainanDopuytren ? <Filled text={_tanganKelainanDopuytren} /> : <NotFilled />}
        </ListGroupItem>
        <ListGroupItem>
          Tangan Berkeringat {_tanganBerkeringat ? <Filled text={_tanganBerkeringat} /> : <NotFilled />}
        </ListGroupItem>
        <ListGroupItem>
          Tangan Panjang Sebelah {_tanganPanjangSebelah ? <Filled text={_tanganPanjangSebelah} /> : <NotFilled />}
        </ListGroupItem>
        <ListGroupItem>
          Tangan Gemetar Saat Diluruskan {_tanganGemetarSaatDiluruskan ? <Filled text={_tanganGemetarSaatDiluruskan} /> : <NotFilled />}
        </ListGroupItem>
      </ListGroup>
    </ListGroupItem>
  );
}

export default KesehatanTangan;
