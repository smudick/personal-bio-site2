import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getAllProjects = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/projects.json`)
    .then((response) => {
      const projectData = response.data;
      const projects = [];
      console.warn(projectData);

      if (projectData) {
        Object.keys(projectData).forEach((projectId) => {
          projects.push(projectData[projectId]);
        });
      }
      resolve(projects);
    })
    .catch((error) => reject(error));
});

export default { getAllProjects };
