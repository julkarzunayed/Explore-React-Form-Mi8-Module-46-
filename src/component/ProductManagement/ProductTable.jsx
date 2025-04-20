import React from 'react';

const ProductTable = ({products}) => {

    // const {name, price, quantity} = products;

    return (
        <div>
            <h4>Table of the products</h4>
            <table>
                <thead>
                    <th>No.</th>
                    <th>Product Name:</th>
                    <th>product Price: </th>
                    <th>Products Quantity</th>
                    <th>Details</th>
                </thead>
                <tbody>
                    {
                        products.map((product, index) => <tr>
                            <td>{index + 1}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.quantity}</td>
                            <td>details</td>
                        </tr> )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;