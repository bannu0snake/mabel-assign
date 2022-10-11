import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import classes from "../styles/Card.module.css";
import Link from "next/link";
function CardItem({ itemId, title, image }) {
    return (
        <Card className={classes.card}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Link href={`/cocktail/${itemId}`}>
                    <a className={classes.link}>More Details....</a>
                </Link>
            </Card.Body>
        </Card>
    );
}

export default CardItem;
