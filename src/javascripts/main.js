import '../styles/main.scss';

const projects = [
  {
    title: 'Cool Project',
    screenshot: 'Pepper.jpeg',
    description: 'This is the best project',
    technologiesUsed:
      'HTML, CSS, Vanilla JavaScript, Version Control with Github',
    available: true,
    url: 'https://github.com/nss-evening-cohort-8/js-part-deux',
    githubUrl: 'https://github.com/nss-evening-cohort-8/js-part-deux',
  },
  {
    title: 'Cooler Project',
    screenshot: 'Pepper.jpeg',
    description: 'This is the best project',
    technologiesUsed:
      'HTML, CSS, Vanilla JavaScript, Version Control with Github',
    available: true,
    url: 'https://github.com/nss-evening-cohort-8/js-part-deux',
    githubUrl: 'https://github.com/nss-evening-cohort-8/js-part-deux',
  },
  {
    title: 'Coolest Project',
    screenshot: 'Pepper.jpeg',
    description: 'This is the best project',
    technologiesUsed:
      'HTML, CSS, Vanilla JavaScript, Version Control with Github',
    available: true,
    url: 'https://github.com/nss-evening-cohort-8/js-part-deux',
    githubUrl: 'https://github.com/nss-evening-cohort-8/js-part-deux',
  },
  {
    title: 'Uncool Project',
    screenshot: 'Pepper.jpeg',
    description: 'This is the best project',
    technologiesUsed:
      'HTML, CSS, Vanilla JavaScript, Version Control with Github',
    available: false,
    url: 'https://github.com/nss-evening-cohort-8/js-part-deux',
    githubUrl: 'https://github.com/nss-evening-cohort-8/js-part-deux',
  },
];

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);

  selectedDiv.innerHTML = textToPrint;
};

const buildProjectCards = () => {
  let domString = '<div class="projectsHeader"><h2>Projects</h2></div>';

  for (let i = 0; i < projects.length; i += 1) {
    if (projects[i].available === true) {
      domString += '<div class"project">';
      domString += `<div class="projTitle"><h3>${projects[i].title}</h3></div>`;
      domString += `<div class="projImage"><img src=${projects[i].screenshot} alt="Screenshot of project ${projects[i].title}"></div>`;
      domString += `<div class="projDescription"><p>${projects[i].description}</p></div>`;
      domString += `<div class="projUrl"><a href=${projects[i].url}>Project Link</a></div>`;
      domString += `<div class="projGitUrl"><a href=${projects[i].githubUrl}>Github Link</a></div>`;
      domString += '</h2>';
    }
  }
  printToDom('projectsPage', domString);
};

const init = () => {
  buildProjectCards();
};
init();
