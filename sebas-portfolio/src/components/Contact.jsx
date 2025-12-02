import { useState } from 'react';
import '../assets/css/theme.css';
import dataJson from '../data/data.json';

function Contact() {
    const [data, setData] = useState(dataJson.lang_Es.Contact);

    return (
        <>
            <div id='contactme'>
                <p className='title'>{data.title}</p>
                <div className='container'>
                    <div className='contactways'>
                        <span className='mainSkillName'>{data.email}</span>
                        <span className='mainSkillName'>{data.phone}</span>
                    </div>
                    <div className='contactways'>
                        <span className='mainSkillName'>{data.linkedin}</span>
                        <span className='mainSkillName'>{data.github}</span>
                    </div>
                </div>
            </div >
            <br />
            <br />
            <br />
            <br />
            <br />
        </>
    )
}

export default Contact;