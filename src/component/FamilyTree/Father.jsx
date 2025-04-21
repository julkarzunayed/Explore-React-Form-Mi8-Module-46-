import React from 'react';
import MySelf from './MySelf';
import Brother from './Brother';

const Father = () => {
    return (
        <div>
            <h2>Father</h2>
            <div className="flex">
            <MySelf></MySelf>
            <Brother></Brother>
            </div>
        </div>
    );
};

export default Father;