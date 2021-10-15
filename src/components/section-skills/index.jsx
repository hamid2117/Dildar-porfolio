import React from 'react';

import Section from '../section';

const SectionSkills = ({ skills }) => {
  return (
    <Section title="Skills">
        <ul style={{listStyleType:"square"}}>
        {skills.map((skill) => (
            <li>{skill.name}</li>
        ))}
        </ul>
    </Section>
  );
};

export default SectionSkills;
