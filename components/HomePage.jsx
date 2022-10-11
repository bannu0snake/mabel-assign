import Carousel from "react-bootstrap/Carousel";
import classes from "../styles/HomePage.module.css";
import { useRouter } from "next/router";
function HomePage({ items }) {
    const router = useRouter();
    const onClickHandler = (id) => {
        router.push(`/cocktail/${id}`);
    };
    return (
        <>
            <Carousel className={classes.carousel}>
                {items.map((item) => {
                    return (
                        <Carousel.Item
                            onClick={() => {
                                onClickHandler(item.idDrink);
                            }}
                        >
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
