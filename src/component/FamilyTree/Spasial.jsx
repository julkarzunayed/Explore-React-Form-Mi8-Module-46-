import React, { useContext } from 'react';
import { AssetsContext } from './FamilyTree';

const Spasial = () => {

    //receive the context 
    const familyAsset = useContext(AssetsContext);
    console.log(familyAsset.assets, familyAsset.newAssets)
    return (
        <div>
            <h2>Spacial</h2>
            <small style={{color:'tomato'}}>{familyAsset.assets}</small>
        </div>
    );
};

export default Spasial;