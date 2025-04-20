import React, { useState } from 'react';
import ProductForm from './ProductForm';
import ProductTable from './ProductTable';
import './Product.css'

const ProductManagement = () => {
    
    const [products, setProducts] = useState([]);

    const handAddProductInTable = newProduct => {
        const newProducts = [...products, newProduct];

        setProducts(newProducts);
    }

    return (
        <div>
            <ProductForm handAddProductInTable={handAddProductInTable}></ProductForm>
            <ProductTable products={products}></ProductTable>
        </div>
    );
};

export default ProductManagement;