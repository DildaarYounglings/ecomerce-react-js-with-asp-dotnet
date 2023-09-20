import React, { Component } from 'react';

export const ShoppingCart = (props) => {
    const { shoppingCartState } = props;
    const {shoppingCart} = shoppingCartState;
    return(
        <section>
            {shoppingCart.map(()=>(<ShoppingCartItem key={index} product={product} shoppingCartState={shoppingCartState} />))}
        </section>
    )
}
export const ShoppingCartItem = () => {
    return (
        <article style={{ backgroundColor: "lightgray", width: "fit-content", padding: "1px", borderRadius: "20px" }}>
            <ul style={{ listStyleType: "none", display: "flex", flexDirection: "column" }}>
                <div style={{ backgroundColor: "purple", width: "fit-content", marginBottom: "1rem", translate: "-15px 10px" }}><img style={{ height: "120px", width: "150px" }} src="" alt="img" /></div>
                <h3></h3>
                <p>Price:</p>
                <button style={{ width: "100px", height: "30px", borderRadius: "10px" }} >Add to cart</button>
            </ul>
        </article>
    );
}