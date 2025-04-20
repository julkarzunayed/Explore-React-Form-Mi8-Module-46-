import React, { useState } from 'react';

const ProductForm = ({handAddProductInTable}) => {
    const [error, setError] = useState('')

    const handleProductSubmit = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        console.log(name, price, quantity)

        if(name.length === 0){
            setError("Product Name cannot be empty");
            return;
        }
        else if(price < 0){
            setError("Product Price cannot be negative");
            return;
        }
        else if(price.length === 0){
            setError("Product Price cannot be empty");
            return;
        }
        else if(quantity.length === 0){
            setError("Product Quantity cannot be empty");
            return;
        }
        else if(quantity < 0){
            setError("Product Quantity cannot be negative");
            return;
        }
        else{
            setError('')
        }

        const newProduct = {
            name,
            price,
            quantity
        }
        handAddProductInTable(newProduct);
    }

    return (
        <div>
            <h2>Product Form</h2>
            <form onSubmit={handleProductSubmit}>
                <input type="text" name='name' placeholder='Product Name'/>
                <br />
                <input type="text" name='price' placeholder='Product Price'/>
                <br />
                <input type="text" name='quantity' placeholder='Product Quantity'/>
                <br />
                <input type="submit" value='Submit' />
            </form>
            <p style={{color: 'red'}}>{error}</p>
        </div>
    );
};

export default ProductForm;