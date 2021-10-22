import React from 'react';
import '../Style/Css/home.css';
import FeaturedInfo from '../Commponents/FeaturedInfo';
import Chart from '../Commponents/Chart';

export default function Home() {
    return (<div className='home'>
            <FeaturedInfo/>
            <Chart/>
        </div>
    )
}
