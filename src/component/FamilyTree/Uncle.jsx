import React from 'react';
import Cusine from './Cusine';
import Jorina from './Jorina';

const Uncle = () => {
    return (
        <div>
            <h2>Uncle</h2>
            <div className="flex">
            <Cusine></Cusine>
            <Jorina></Jorina>
            </div>
        </div>
    );
};

export default Uncle;