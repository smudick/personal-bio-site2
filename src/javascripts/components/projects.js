import projectData from '../helpers/data/projectData';

const builProjectHeader = () => {
  $('#projectsPage').html(
    '<div class="projectsHeader"><h2>Projects</h2></div>'
  );
};

const buildProjectCards = () => {
  builProjectHeader();
  projectData.getProjects().forEach((item) => {
    $('#projectsPage').append(`
  <div class"project">
  <div class="projTitle"><h3>${item.title}</h3></div>
  <div class="projImage"><img src=${item.screenshot} alt="Screenshot of project ${item.title}"></div>
  <div class="projDescription"><p>${item.description}</p></div>
  <div class="urls">
  <div class="url"><a href=${item.url}>Project Link</a></div>
  <div class="url"><a href=${item.githubUrl}>Github Link</a></div>
  </div>
  </div>`);
  });
};

export default { buildProjectCards };
