import React from 'react';
import Featurebox from '../Components/Featurebox';
import fimage1 from '../images/1.svg';
import fimage2 from '../images/2.svg';
import fimage3 from '../images/3.svg';
import fimage4 from '../images/4.svg';

function FeaturesSection() { 
    return (
        <div id="features">
            <h1>FEATURES</h1>
            <div className="a-container">
                <Featurebox img={fimage1} title="Weightlifting" altText="Weightlifting" />
                <Featurebox img={fimage2} title="Specific Muscle" altText="Specific Muscle" />
                <Featurebox img={fimage3} title="Flex Your Muscle" altText="Flex Your Muscle" />
                <Featurebox img={fimage4} title="Cardio Exercise" altText="Cardio Exercise" />
            </div>
        </div>
    );
}

export default FeaturesSection;
