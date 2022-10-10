import Carousel from "react-bootstrap/Carousel";
import { Button } from "react-bootstrap";
import classes from "../styles/HomePage.module.css";
function HomePage({ items }) {
    return (
        <>
            {/* <Button variant="primary">Primary</Button>{" "} */}
            <Carousel className={classes.carousel}>
                {items.map((item) => {
                    return (
                        <Carousel.Item>
                            <img
                                className={`d-block w-100 ${classes.img}`}
                                src={item.strDrinkThumb}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>{item.strDrink}</h3>
                                <p>{item.strInstructions}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    );
                })}
            </Carousel>
        </>
    );
}

export default HomePage;
