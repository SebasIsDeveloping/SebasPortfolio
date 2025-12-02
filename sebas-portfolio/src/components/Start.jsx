import { useState } from 'react';
import '../assets/css/theme.css';
import dataJson from '../data/data.json';

function Start() {
    const [data, setData] = useState(dataJson.lang_Es.Start);

    return (
        <>
            <div id='start_bg'></div>
            <div id='start'>
                <p className='hello'>Hello World!</p>
                <p className='iam'>{data.title}</p>
                <p className='name'>{data.name}</p>
                <p className='lastname'>{data.lastname}</p>
                <p className='quote'>{data.quote}</p>
            </div>
        </>
    )
}

export default Start;