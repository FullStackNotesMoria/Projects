import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "../Card/Card";
import styled from "styled-components";

const Containerx = styled.div`
.card-container{
  .row{
    .col{
      .card{
        margin-left: 25px;
        margin-bottom: 15px;
        height:600px;

      }
    }
  }
}
`;
const Main = ({ data }) => {
  return (
    <Containerx>
      <Container className="card-container rounded-4 my-2 p-1">
        <Row className="justify-content-center row">
          {data.map((x, i) => {
            return x.Stok > 0 ? (
              <Col md={6} lg={4} xl={3} key={i} className="col">
                <Card data={x} className="card" />
              </Col>
            ) : null;
          })}
        </Row>
      </Container>
    </Containerx>
  );
};

export default Main;
