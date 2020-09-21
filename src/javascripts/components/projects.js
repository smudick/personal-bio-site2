import projectData from '../helpers/data/projectData';

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);

  selectedDiv.innerHTML = textToPrint;
};

const buildProjectCards = () => {
  let domString = '<div class="projectsHeader"><h2>Projects</h2></div>';

  for (let i = 0; i < projectData.getProjects().length; i += 1) {
    if (projectData.getProjects()[i].available === true) {
      domString += '<div class"project">';
      domString += `<div class="projTitle"><h3>${projectData.getProjects()[i].title}</h3></div>`;
      domString += `<div class="projImage"><img src=${projectData.getProjects()[i].screenshot} alt="Screenshot of project ${projectData.getProjects()[i].title}"></div>`;
      domString += `<div class="projDescription"><p>${projectData.getProjects()[i].description}</p></div>`;
      domString += `<div class="projUrl"><a href=${projectData.getProjects()[i].url}>Project Link</a></div>`;
      domString += `<div class="projGitUrl"><a href=${projectData.getProjects()[i].githubUrl}>Github Link</a></div>`;
      domString += '</h2>';
    }
  }
  printToDom('projectsPage', domString);
};

export default { buildProjectCards };
