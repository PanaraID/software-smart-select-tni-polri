import { Button } from "react-bootstrap";

type PropsType = {
  text: string;
  variant: "primary" | "secondary";
  action: () => void;
}

function TheButtonNavigation(props: PropsType) {
  return (
    <Button onClick={props.action} variant={props.variant} className="m-2">
      {props.text}
    </Button>
  );
}

export default TheButtonNavigation;
