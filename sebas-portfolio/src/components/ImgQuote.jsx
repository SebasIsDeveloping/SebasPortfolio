import { useState } from 'react';
import '../assets/css/theme.css';
import dataJson from '../data/data.json';
import profilePicture from '../assets/images/profilePicture.png';

function ImgQuote() {
    const [data, setData] = useState(dataJson.lang_Es.Quote);

    return (
        <>
            <div id='imgQuote_bg'></div>
            <div id='imgQuote'>
                <p className='title'>{data.title}</p>
                <div className='container'>
                    <p className='quote'>{data.quote}</p>
                    <img
                        className='quoteImg'
                        alt='Profile picture'
                        src={profilePicture}
                    />
                </div>
            </div>
        </>
    )
}

export default ImgQuote;