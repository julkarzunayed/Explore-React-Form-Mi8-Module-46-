import React, { createContext } from 'react';
import GranPa from './GranPa';
import './FamilyTree.css'

export const AssetsContext = createContext('');

const FamilyTree = () => {

    const assets = "Diamond"
    const newAssets = "Gold"

    return (
        <div className='family-tree'>
            <h1>EXplore React Context API</h1>
            <h2>Family Tree</h2>
            <AssetsContext.Provider value={{assets, newAssets}}>
                <GranPa></GranPa>
            </AssetsContext.Provider>
        </div>
    );
};

export default FamilyTree;