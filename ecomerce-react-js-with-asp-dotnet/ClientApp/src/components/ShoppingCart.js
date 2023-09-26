import React, { Component, useState } from 'react';

export const ShoppingCart = (props) => {
    const { shoppingCartState } = props;
    const { shoppingCart, setShoppingCart } = shoppingCartState;
    return (
        <section style={{ display: "flex", gap:"3rem" }}>
            {shoppingCart.map((product, index) => (<ShoppingCartItem key={index} product={product} shoppingCartState={{ shoppingCart, setShoppingCart }} />))}
            <div>
            </div>
        </section>
    )
}
export let itemInCart = ""
export const ShoppingCartItem = (props) => {
    const [quantity, setQuantity] = useState(0);
    const { shoppingCartState,product} = props;
    const { shoppingCart, setShoppingCart } = shoppingCartState;
    

    const removeItemFromCart = () => {
        let copiedShoppingCart = [...shoppingCart];
        copiedShoppingCart = copiedShoppingCart.filter((item, index) => item.productName !== product.productName);
        console.log(copiedShoppingCart);
        itemInCart = product.productName;
        setShoppingCart(copiedShoppingCart);
    }
    return (
        <article style={{ backgroundColor: "lightgray", width: "fit-content", padding: "1px", borderRadius: "20px" }}>
            <ul style={{ listStyleType: "none", display: "flex", flexDirection: "column" }}>
                <div style={{ backgroundColor: "purple", width: "fit-content", marginBottom: "1rem", translate: "-15px 10px" }}><img style={{ height: "120px", width: "150px" }} src={product.imageUrl} alt="img" /></div>
                <h3>{product.productName}</h3>
                <p>Price: { product.priceString + " " + product.priceInt }</p>
                <ul style={{ listStyleType: "none", width: "fit-content", display: "flex", flexDirection: "row", gap: "1rem", translate: "-30px 0px" }}>
                    <button onClick={() => setQuantity((prev) => {
                        if (quantity > 0) {
                            return prev - 1;
                        } else {
                            return prev
                        }
                    })} style={{ width: "30px", height: "30px", borderRadius: "10px" }} > - </button>
                    {quantity}
                    <button onClick={() => setQuantity((prev) => prev + 1)} style={{ width: "30px", height: "30px", borderRadius: "10px" }} > + </button>
                </ul>
                <button onClick={() => removeItemFromCart()} style={{ width: "100px", height: "55px", borderRadius: "10px" }} >remove from cart</button>
            </ul>
        </article>
    );
}