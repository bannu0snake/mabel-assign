import React from "react";
import axios from "axios";
import Head from "next/head";
import List from "../../components/list";
const index = ({ items }) => {
    return (
        <>
            <Head>
                <title>Optional Alcoholic</title>
                <meta name="description" content="Optional Alcoholic" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>Optional Alcoholic</div>
            <List items={items} />
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
