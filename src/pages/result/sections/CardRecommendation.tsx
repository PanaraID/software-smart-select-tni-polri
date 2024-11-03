import { Accordion, Card } from "react-bootstrap";

export default function CardRecommendation() {
  return (
    <Card>
      <Card.Header>Hasil Rekomendasi</Card.Header>
      <Card.Body>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>INSTANSI A</Accordion.Header>
            <Accordion.Body>test</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>INSTANSI B</Accordion.Header>
            <Accordion.Body>test</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>INSTANSI C</Accordion.Header>
            <Accordion.Body>test</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>INSTANSI D</Accordion.Header>
            <Accordion.Body>test</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>INSTANSI E</Accordion.Header>
            <Accordion.Body>test</Accordion.Body>
            <Accordion.Item eventKey="5">
              <Accordion.Header>INSTANSI F</Accordion.Header>
              <Accordion.Body>test</Accordion.Body>
            </Accordion.Item>
          </Accordion.Item>
        </Accordion>
      </Card.Body>
    </Card>
  );
}
