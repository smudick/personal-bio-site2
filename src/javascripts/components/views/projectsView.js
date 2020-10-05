import projectData from '../../helpers/data/projectData';
import projects from '../projects';

const projectsView = () => {
  projectData.getAllProjects().then((response) => {
    if (response.length) {
      response.forEach((projectObject) => {
        $('#projectsPage').append(projects.buildProjectCards(projectObject));
      });
    } else {
      $('#projectsPage').append('<h3>Where are the projects?</h3>');
    }
  });
};

export default { projectsView };
