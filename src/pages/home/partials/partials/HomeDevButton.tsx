import { useContext } from "react";

import { Button } from "react-bootstrap";

import AppContext from "../../../../context/AppContext";
import PAGES from "../../../../finals/basic/PAGES";

type PropsType = {
  text: string;
  target: PAGES;
};

function HomeDevButton(props: PropsType) {
  const { setPage } = useContext(AppContext);

  return (
    <Button
      variant="info"
      onClick={() => setPage(props.target)}
      className="mb-3"
    >
      {props.text}
    </Button>
  );
}

export default HomeDevButton;
