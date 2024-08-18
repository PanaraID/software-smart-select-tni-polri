import ButtonGroup from "react-bootstrap/ButtonGroup";

import ButtonNavigationType from "./ButtonNavigationType";
import TheButtonNavigation from "./TheButtonNavigation";
import BackButtonNavigation from "./BackButtonNavigation";

type PropsType = {
  // Kalau tidak diisi maka defaultnya adalah tombol mundur
  button1?: ButtonNavigationType;

  // Kalau tidak diisi maka tidak tidak muncul apa-apa
  button2?: ButtonNavigationType;
};

function ButtonNavigation(props: PropsType) {
  return (
    <nav className="mt-3 card border-0 border-top" id="nav-navigation">
      <ButtonGroup>
        {/* Jika diisi maka tampilkan, dan jika tidak maka tampilkan tombol kembali */}
        {props.button1 ? (
          <TheButtonNavigation
            text={props.button1.text}
            action={props.button1.action}
            variant="primary"
          />
        ) : (
          <BackButtonNavigation />
        )}

        {props.button2 && (
          <TheButtonNavigation
            text={props.button2.text}
            action={props.button2.action}
            variant="secondary"
          />
        )}
      </ButtonGroup>
    </nav>
  );
}

export default ButtonNavigation;
