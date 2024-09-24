import { Badge } from "react-bootstrap";

type PropsType = {
  text: string | number;
}

function Filled(props: PropsType) {
  return <Badge bg="info" text="dark" className="font-monospace">{props.text}</Badge>;
}

export default Filled;
