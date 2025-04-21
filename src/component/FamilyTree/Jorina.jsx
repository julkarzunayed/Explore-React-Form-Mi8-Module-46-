import React, { useContext } from 'react';
import { AssetsContext } from './FamilyTree';

const Jorina = () => {
    const familyAsset = useContext(AssetsContext);

    return (
        <div>
            <h2>Jorina</h2>
            <p>{familyAsset.newAssets}</p>
        </div>
    );
};

export default Jorina;