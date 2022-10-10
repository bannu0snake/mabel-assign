import React, { useState } from "react";
import AllItems from "../../components/AllItems";
import axios from "axios";
import classes from "../../styles/Search.module.css";
import Button from "react-bootstrap/Button";
const index = ({ items }) => {
    const [name, setName] = useState("");
    const [results, setResults] = useState([]);
    const onClickHandler = async () => {
        const res = await axios.get(
            `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`
        );
        setResults(res.data.drinks);
    };
    return (
        <>
            <div className={classes.searchbar}>
                <input
                    className={classes.input}
                    value={name}
                    onChange={(event) => {
                        setName(event.target.value);
                    }}
                    placeholder="Search Your Cocktail"
                    type="text"
                    name="name"
                />
                <Button onClick={onClickHandler} variant="primary">
                    Search
                </Button>
            </div>
            {results.length !== 0 && <AllItems items={results} />}
        </>
    );
};

export default index;
