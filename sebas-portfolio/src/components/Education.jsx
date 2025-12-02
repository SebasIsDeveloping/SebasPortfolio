import { useState } from 'react';
import '../assets/css/theme.css';
import dataJson from '../data/data.json';

function Education() {
    const [data, setData] = useState(dataJson.lang_Es.MainEducation);

    return (
        <>
            <div id='education_bg'></div>
            <div id='education'>
                <p className='title'>{data.title}</p>
                <div className='container'>
                    {data.content.map(course =>
                        <div className='education'>
                            <p className='educationName'>{course.course}</p>
                            <div style={{ marginTop: '-15px', marginLeft: '15px' }}>
                                <span className='educationInfo'>{data.common.At}</span> &nbsp;
                                <span className='educationInfo'>{course.school}</span>&nbsp;
                                <span className='educationInfo'> | </span> &nbsp;
                                <span className='educationInfo'>{course.dates}</span>&nbsp;
                            </div>
                            <p className='educationDesc'>{course.description}</p>
                        </div>
                    )}
                </div>
            </div >
        </>
    )
}

export default Education;