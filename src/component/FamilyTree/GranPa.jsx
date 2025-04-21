import React from 'react';
import Father from './Father';
import Uncle from './Uncle';

const GranPa = () => {
    return (
        <div>
            <h2>GranPa</h2>
            <div className="flex">
            <Father></Father>
            <Uncle></Uncle>
            </div>

        </div>
    );
};

export default GranPa;