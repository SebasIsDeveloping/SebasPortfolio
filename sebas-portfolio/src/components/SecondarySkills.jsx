import { useState } from 'react';
import '../assets/css/theme.css';
import dataJson from '../data/data.json';

function SecondarySkills() {
    const [data, setData] = useState(dataJson.lang_Es.SecondarySkills);

    return (
        <>
            <div id='secondarySkills_bg'></div>
            <div id='secondarySkills'>
                <p className='title'>{data.title}</p>
                <div className='container'>
                    {data.content.map(skill =>
                        <div className='secondarySkill'>
                            <div className='secondarySkillCard'>
                                <img
                                    className='secondarySkillImage'
                                    alt={skill.name}
                                    width={100}
                                    src={new URL(`/src/assets/images/${skill.route}`, import.meta.url).href}
                                />
                                <span className='secondarySkillName'>{skill.name}</span>
                            </div>
                            <span className='secondarySkillDesc'>{skill.description}</span>
                        </div>
                    )}
                </div>
            </div >
        </>
    )
}

export default SecondarySkills;