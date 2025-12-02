import { useState } from 'react';
import '../assets/css/theme.css';
import dataJson from '../data/data.json';

function WorkExperiences() {
    const [data, setData] = useState(dataJson.lang_Es.WorkExperience);

    return (
        <>
            <div id='workExperience_bg'></div>
            <div id='workExperiences'>
                <p className='title'>{data.title}</p>
                <div className='container'>
                    {data.content.map(experience =>
                        <div className='workExperience'>
                            <p className='workExperienceCompany'>{experience.company}</p>
                            <div style={{ marginTop: '-15px', marginLeft: '15px' }}>
                                <span className='workExperiencePosition'>{data.common.as}</span> &nbsp;
                                <span className='workExperiencePositionBold'>{experience.position}</span>&nbsp;
                                <span className='workExperiencePosition'>{data.common.since}</span> &nbsp;
                                <span className='workExperiencePositionBold'>{experience.startDate}</span>&nbsp;
                                <span className='workExperiencePosition'>{data.common.to}</span> &nbsp;
                                <span className='workExperiencePositionBold'>{experience.endDate}</span>&nbsp;
                            </div>
                            <p className='workExperienceDesc'>{experience.description}</p>
                            <ul>
                                {experience.tasks.map(task =>
                                    <li className="workTask">{task.task}</li>
                                )}
                            </ul>
                        </div>
                    )}
                </div>
            </div >
        </>
    )
}

export default WorkExperiences;