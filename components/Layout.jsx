import axios from "axios";
import React, { useEffect, useState } from "react";
import classes from "../styles/Layout.module.css";
import { Circles } from "react-loader-spinner";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Layout = ({ children }) => {
    const [categories, setCategories] = useState([]);
    const [loader, setLoader] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(
                    "http://www.thecocktaildb.com/api/json/v1/1/list.php?a=list"
                );
                setCategories([...res.data.drinks]);
                setLoader(false);
            } catch (error) {
                console.log(error);
                setLoader(false);
            }
        };
        fetchData();
    }, []);

    return loader ? (
        <div className={classes.loader}>
            <Circles
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    ) : (
        <div>
            <div className={classes.con}>
                <Container className={classes.header}>
                    <Row className={classes.row}>
                        <Col xs={6} sm={6} md={3}>
                            <Link href={`/`}>
                                <a className={classes.link}>Home</a>
                            </Link>
                        </Col>

                        <Col xs={6} sm={6} md={3}>
                            <Link
                                href={`/${categories[0].strAlcoholic
                                    .replace(" ", "-")
                                    .toLowerCase()}`}
                            >
                                <a className={classes.link}>
                                    {categories[0].strAlcoholic}
                                </a>
                            </Link>
                        </Col>

                        <Col xs={6} sm={6} md={3}>
                            <Link
                                href={`/${categories[1].strAlcoholic
                                    .replace(" ", "-")
                                    .toLowerCase()}`}
                            >
                                <a className={classes.link}>
                                    {categories[1].strAlcoholic}
                                </a>
                            </Link>
                        </Col>

                        <Col xs={6} sm={6} md={3}>
                            <Link href={`/search`}>
                                <a className={classes.link}>Search</a>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div>{children}</div>
        </div>
    );
};

export default Layout;
