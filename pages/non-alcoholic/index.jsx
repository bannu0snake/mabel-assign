import React from "react";
import axios from "axios";
import Head from "next/head";
import AllItems from "../../components/AllItems";
import classes from "../../styles/NonAlcoholic.module.css";
const index = ({ items }) => {
    return (
        <>
            <Head>
                <title>Non Alcoholic</title>
                <meta name="description" content="Non Alcoholic" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={classes.title}>Non Alcoholic</div>
            <AllItems items={items} />
        </>
    );
};
export const getStaticProps = async () => {
    const res = await axios.get(
        "http://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
    );
    return {
        props: {
            items: res.data.drinks,
        },
    };
};
export default index;
