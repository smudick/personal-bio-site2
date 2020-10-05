const buildProjectHeader = () => {
  $('#projectsPage').html(
    '<div class="projectsHeader"><h2>Projects</h2></div>'
  );
};

const buildProjectCards = (projectObject) => {
  buildProjectHeader();
  const domString = `<div class="card project" style="width: 18rem;" id=${projectObject.uid}>
                      <img class="card-img-top" src="${projectObject.screenshot}" alt="Card image cap">
                      <div class="card-body">
                        <h5 class="card-title">${projectObject.title}</h5>
                        <p>${projectObject.description}</p>
                      </div>
                    </div>`;
  return domString;
};

export default { buildProjectCards };

// projectData.getAllProjects().forEach((item) => {
//   $('#projectsPage').append(`
// <div class"project">
// <div class="projTitle"><h3>${item.title}</h3></div>
// <div class="projImage"><img src=${item.screenshot} alt="Screenshot of project ${item.title}"></div>
// <div class="projDescription"><p>${item.description}</p></div>
// <div class="urls">
// <div class="url"><a href=${item.url}>Project Link</a></div>
// <div class="url"><a href=${item.githubUrl}>Github Link</a></div>
// </div>
// </div>`);
