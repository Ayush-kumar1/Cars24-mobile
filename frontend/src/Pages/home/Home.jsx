import React from 'react';
import Carasouel from '../../components/carasouel/Carasouel';
import CardContainer from '../../components/card/CardContainer';
import Selectors from '../../components/Selectors/Selectors';


function Home() {
    
    return (
        <div>
            <Carasouel/>
            <Selectors/>
            <CardContainer/>
        </div>
    )
}

export default Home
