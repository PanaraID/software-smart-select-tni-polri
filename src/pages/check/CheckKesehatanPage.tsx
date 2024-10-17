import { useContext } from "react";
import AppContext from "../../context/AppContext";

import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";

import Header from "../../partials/Header";

import PAGES from "../../finals/basic/PAGES";

import ButtonNavigation from "../../partials/button-navigation/ButtonNavigation";

function CheckKesehatanPage() {
  const { setPage } = useContext(AppContext);

  const list: [PAGES, string][] = [
    [PAGES.CHECK_MATA, "Mata"],
    [PAGES.CHECK_BAGIAN_KEPALA, "Bagian Kepala"],
    // [PAGES.CHECK_MATA, "Telinga"],
    // [PAGES.CHECK_MATA, "Bagian Hidung"],
    [PAGES.CHECK_WAJAH, "Wajah"],
    [PAGES.CHECK_BAGIAN_TANGAN, "Bagian Tangan"],
    // [PAGES.CHECK_MATA, "Tulang Punggung"],
    [PAGES.CHECK_KAKI, "Bagian Kaki"],
    // [PAGES.CHECK_BEDAH, "Tes Bedah"],
    [PAGES.CHECK_GIGI, "Gigi"],
  ];

  return (
    <>
      <Header text="Cek Kesehatan" />

      <ListGroup>
        {list.map((value, index) => {
          return (
            <ListGroup.Item
              key={index}
              className="hover-scale-0-99 d-flex justify-content-between"
            >
              <span>{value[1]}</span>
              <Badge
                tabIndex={index + 1}
                className="badge-hover"
                pill
                bg="info"
                onClick={() => setPage(value[0])}
              >
                Klik Disini
              </Badge>
            </ListGroup.Item>
          );
        })}
      </ListGroup>

      <ButtonNavigation
        button1={{
          text: "Beranda",
          action: () => setPage(PAGES.HOME),
        }}
      />
    </>
  );
}

export default CheckKesehatanPage;
