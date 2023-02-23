import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "../Card/Card";


const Main = ({data}) => {
  return (
    <>
      <Container className="card-container rounded-4 my-4 p-3">
        <Row className="g-5 justify-content-center">
          {
            data.map((x,i)=>{
              return(
                x.Stok > 0 ? 
                <Col md={6} lg={4} xl={3} key={i} >
                  <Card data={x} /> 
                </Col> : null
              );
            })
          }
        </Row>
      </Container>
    </>
  )
}

export default Main;