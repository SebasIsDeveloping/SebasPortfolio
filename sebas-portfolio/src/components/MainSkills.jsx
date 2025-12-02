import { useState } from 'react';
import '../assets/css/theme.css';
import dataJson from '../data/data.json';

function MainSkills() {
    const [data, setData] = useState(dataJson.lang_Es.MainSkills);

    return (
        <>
            <div id='mainSkills_bg'></div>
            <div id='mainSkills'>
                <p className='title'>{data.title}</p>
                <div className='container'>
                    {data.content.map(skill =>
                        <div className='mainSkill'>
                            <div className='mainSkillCard'>
                                <img
                                    className='mainSkillImage'
                                    alt={skill.name}
                                    width={100}
                                    src={`../../public/assets/images/${skill.route}`}
                                />
                                <span className='mainSkillName'>{skill.name}</span>
                            </div>
                            <span className='mainSkillDesc'>{skill.description}</span>
                        </div>
                    )}
                </div>
            </div >
        </>
    )
}

export default MainSkills;