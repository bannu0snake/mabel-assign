import React from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import CardItem from "./Card";

function HorizotalScroll(props) {
    const [items, setItems] = React.useState(props.items);

    return (
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
            {items.map(({ idDrink, strDrink, strDrinkThumb }) => (
                <CardItem
                    itemId={idDrink} // NOTE: itemId is required for track items
                    title={strDrink}
                    key={idDrink}
                    image={strDrinkThumb}
                />
            ))}
        </ScrollMenu>
    );
}

function LeftArrow() {
    const { isFirstItemVisible, scrollPrev } =
        React.useContext(VisibilityContext);

    return (
        <Arrow disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
            Left
        </Arrow>
    );
}

function RightArrow() {
    const { isLastItemVisible, scrollNext } =
        React.useContext(VisibilityContext);

    return (
        <Arrow disabled={isLastItemVisible} onClick={() => scrollNext()}>
            Right
        </Arrow>
    );
}
function Arrow({ children, disabled, onClick }) {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            style={{
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                right: "1%",
                opacity: disabled ? "0" : "1",
                userSelect: "none",
            }}
        >
            {children}
        </button>
    );
}

export default HorizotalScroll;
