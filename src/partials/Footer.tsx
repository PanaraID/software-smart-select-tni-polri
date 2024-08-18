import { Navbar } from "react-bootstrap";

function Footer() {
  return (
    <Navbar id="footer" className="navbar bg-dark border-bottom border-body fixed-bottom text-center">
      <div className="container-fluid justify-content-center">
        <span className="navbar-text text-white">
          Copyright PT Pendidikan Abdi Negara | Panara Course
        </span>
      </div>
    </Navbar>
  );
}

export default Footer;
