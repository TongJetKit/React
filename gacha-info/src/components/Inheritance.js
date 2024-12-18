import React from 'react';
import Tab from '../components/Tab';
import './Inheritance.css';

function Inheritance() {
    const inheritance = ["Insight 1", "Insight 2"];
    return (
        <div className='inheritance'>
            <Tab topics={inheritance}></Tab>
        </div>
    )
}

export default Inheritance
