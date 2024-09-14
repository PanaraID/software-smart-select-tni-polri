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
    [PAGES.CHECK_MATA, "Mata"]
  ];

  return (
    <>
      <Header text="Cek Kesehatan" />

      <ListGroup>
        {list.map((value, index) => {
          return (
            <ListGroup.Item action key={index}>
              <div className="d-flex justify-content-between">
                <span>{value[1]}</span>
                <Badge pill bg="info" onClick={() => setPage(value[0])}>
                  Klik Disini
                </Badge>
              </div>
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
