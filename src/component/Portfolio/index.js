import React from 'react';
import ProjectList from '../ProjectList';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Portfolio(props) {
  const { currentProject} = props;
  return (
    <section>
      <h1 data-testid="h1tag">{capitalizeFirstLetter(currentProject.name)}</h1>
      <p>{currentProject.description}</p>
      <ProjectList category={currentProject.name} />
    </section>
  );
}
export default Portfolio;