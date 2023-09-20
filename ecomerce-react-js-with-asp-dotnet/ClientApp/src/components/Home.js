import React, { Component, Fragment, useState } from 'react';
import { itemInCart } from './ShoppingCart'
export const Product = (props) => {
    const { product, shoppingCartState } = props;
    const [enabled, setEnabled] = useState(true);

    const addToCart = () => {
        const { shoppingCart, setShoppingCart } = shoppingCartState;
        if (itemInCart === false) {
            setEnabled(!enabled);
        }
        setShoppingCart((prev) => [...prev,product]);
        setEnabled(!enabled);
    }

    return (
        <article style={{ backgroundColor: "lightgray", width: "fit-content", padding: "1px", borderRadius:"20px" }}>
            <ul style={{ listStyleType: "none", display: "flex", flexDirection: "column" }}>
                <div style={{ backgroundColor: "purple", width: "fit-content", marginBottom: "1rem", translate:"-15px 10px" }}><img style={{ height: "120px", width: "150px" }} src={product.imageUrl} alt="img" /></div>
                <h3>{product.productName}</h3>
                <p>Price: {product.price}</p>
                {enabled ? < button onClick={() => addToCart()} style={{ width: "100px", height: "30px", borderRadius: "10px" }} >Add to cart</button> : < button style={{ width: "100px", height: "30px", borderRadius: "10px" }} disabled={true} >item in cart</button>}
            </ul>
        </article>
    );
}
export class Home extends Component {
    static displayName = Home.name;
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            productsArray: [{ imageUrl: "", productName:"ddddddd",price:"R 20,00" }], loading: true
        };
    }
    renderProduct() {
        return (
            <Fragment>
                {this.state.productsArray.map((product, index) => (
                    <Product product={product} shoppingCartState={this.props.shoppingCartState} key={index} />
                ))
                }
            </Fragment>
        )
    }
    componentDidMount() {
        this.populateProducts();
    }
    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p> : this.renderProduct();
        return (
            <Fragment>
                <h1>Products</h1>
                <section style={{ display: "grid", gridTemplateColumns: "auto auto", gap:"1rem" }} >
                    {contents}
                </section>
            </Fragment>
        );
    }
    async populateProducts() {
        const response = await fetch('products');
        const data = await response.json();
        this.setState({ productsArray: data, loading: false });
    }
}

