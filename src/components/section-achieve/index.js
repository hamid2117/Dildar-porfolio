import React from 'react';

import Section from '../section';

const SectionAchieve = ({ achieve }) => {
  return (
    <Section title="Distinctions / Achievements">
      <ol style={{ listStyleType: 'upper-roman' }}>
        {achieve.map((skill) => (
          <li>{skill.name}</li>
        ))}
      </ol>
    </Section>
  );
};

export default SectionAchieve;
