import React from "react";
import axios from "axios";
import classes from "../../../styles/Cocktail.module.css";
const index = ({ item }) => {
    console.log(item);
    return (
        <>
            <div className={classes.imgSec}>
                <div className={classes.title}>{item.strDrink}</div>
                <img
                    className={classes.img}
                    src={item.strDrinkThumb}
                    alt="img"
                    srcset=""
                />
                <p>
                    <span className={classes.subTitle}>Tags : </span>{" "}
                    {item.strTags}
                </p>
                <p>
                    <span className={classes.subTitle}>Glass : </span>{" "}
                    {item.strGlass}
                </p>
                <p>
                    <span className={classes.subTitle}>Category: </span>{" "}
                    {item.strCategory}
                </p>
                <p>
                    <span className={classes.subTitle}>Alcoholic: </span>{" "}
                    {item.strAlcoholic}
                </p>
                <p>
                    <span className={classes.subTitle}>Instructions: </span>{" "}
                    {item.strInstructions}
                </p>
                <p>
                    <span className={classes.subTitle}>
                        strInstructionsIT:{" "}
                    </span>{" "}
                    {item.strInstructionsIT}
                </p>
            </div>
        </>
    );
};
export const getServerSideProps = async (context) => {
    const res = await axios.get(
        `http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${context.params.id}`
    );
    return {
        props: {
            item: res.data.drinks[0],
        },
    };
};
export default index;
