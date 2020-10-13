const buildProjectHeader = () => {
  $('#projectsPage').html(
    '<div class="projectsHeader"><h2>Projects</h2></div>'
  );
};

const buildProjectCards = (projectObject) => {
  const domString = `<div class="card project" style="width: 28rem;" id=${projectObject.uid}>
                      <img class="card-img-top" src="${projectObject.screenshot}" alt="Card image cap">
                      <div class="card-body">
                        <h4 class="card-title">${projectObject.title}</h4>
                        <p>${projectObject.description}</p>
                        <a href="${projectObject.url}" target="_blank">Check it out here!</a> <br>
                        <a href="${projectObject.githubUrl} "target="_blank">Github Repository</a>
                      </div>
                    </div>`;
  return domString;
};

export default { buildProjectCards, buildProjectHeader };
