import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardItem from "./Card";
function AllItems({ items }) {
    return (
        <Container>
            <Row>
                {items.map(({ idDrink, strDrink, strDrinkThumb }) => {
                    return (
                        <Col sm={6} md={4} key={idDrink}>
                            <CardItem
                                itemId={idDrink}
                                title={strDrink}
                                image={strDrinkThumb}
                            />
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
}
export default AllItems;
