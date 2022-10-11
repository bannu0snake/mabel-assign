import React from "react";
import Head from "next/head";
import axios from "axios";
import AllItems from "../../components/AllItems";
import classes from "../../styles/Alcoholic.module.css";
const index = ({ items }) => {
    return (
        <>
            <Head>
                <title>Alcoholic</title>
                <meta name="description" content="Alcoholic" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={classes.title}>Alcoholic</div>
            <AllItems items={items} />
        </>
    );
};
export const getStaticProps = async () => {
    const res = await axios.get(
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic"
    );
    return {
        props: {
            items: res.data.drinks,
        },
    };
};
export default index;
