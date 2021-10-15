import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionExperience = ({ experience }) => {
  if (!experience.length) return null;
  return (
    <Section title="Experience">
      {experience.map((item) =>{ 
      return(
        <>
        <SummaryItem
          key={item.name}
          name={item.name}
          description={item.description}
          link={item.link}
          responsbilities={item.responsbilities}
        />
         {item.responsbilities.map((item)=>{
            return(
              <h4 style={{color:"#333333"}} key={item.id}>{item.desc}</h4>
            )
          })}
        </>
      )})}
    </Section>
  );
};

export default SectionExperience;
