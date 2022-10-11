import Head from "next/head";
import axios from "axios";
import HomePage from "../components/HomePage";
import HorizotalScroll from "../components/HorizotalScroll";
import classes from "../styles/index.module.css";
import Link from "next/link";
export default function Home({
    CarosalItems,
    alcoholicItems,
    nonAlcoholicItems,
    categories,
}) {
    return (
        <div>
            <Head>
                <title>Home</title>
                <meta name="description" content="Mable Assignment" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <HomePage items={CarosalItems} />
            <div>
                <div className={classes.heading}>
                    <h1>{categories[0].strAlcoholic}</h1>

                    <Link href={`/alcoholic`}>
                        {/* <Button variant="primary">View More</Button> */}
                        <a
                            style={{
                                textDecoration: "none",
                                color: "blue",
                                fontSize: 20,
                            }}
                        >
                            Veiw More
                        </a>
                    </Link>
                </div>

                <HorizotalScroll items={alcoholicItems} />
            </div>

            <div>
                <div className={classes.heading}>
                    <h1>{categories[1].strAlcoholic}</h1>
                    <Link href={`/non-alcoholic`}>
                        {/* <Button variant="primary">View More</Button> */}
                        <a
                            style={{
                                textDecoration: "none",
                                color: "blue",
                                fontSize: 20,
                            }}
                        >
                            Veiw More
                        </a>
                    </Link>
                </div>

                <HorizotalScroll items={nonAlcoholicItems} />
            </div>
        </div>
    );
}
export const getStaticProps = async () => {
    const res1 = await axios.get(
        "http://www.thecocktaildb.com/api/json/v1/1/random.php"
    );
    const res2 = await axios.get(
        "http://www.thecocktaildb.com/api/json/v1/1/random.php"
    );
    const res3 = await axios.get(
        "http://www.thecocktaildb.com/api/json/v1/1/random.php"
    );
    const res4 = await axios.get(
        "http://www.thecocktaildb.com/api/json/v1/1/random.php"
    );
    const res5 = await axios.get(
        "http://www.thecocktaildb.com/api/json/v1/1/random.php"
    );
    const CarosalItems = [
        ...res1.data.drinks,
        ...res2.data.drinks,
        ...res3.data.drinks,
        ...res4.data.drinks,
        ...res5.data.drinks,
    ];
    const res6 = await axios.get(
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic"
    );
    const alcoholicItems = res6.data.drinks.slice(0, 5);
    const res7 = await axios.get(
        "http://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
    );
    const nonAlcoholicItems = res7.data.drinks.slice(0, 5);
    const res8 = await axios.get(
        "http://www.thecocktaildb.com/api/json/v1/1/list.php?a=list"
    );
    const categories = res8.data.drinks;
    return {
        props: {
            CarosalItems,
            alcoholicItems,
            nonAlcoholicItems,
            categories,
        },
    };
};
