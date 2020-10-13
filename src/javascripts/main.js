import '../styles/main.scss';
import projectsView from './components/views/projectsView';
import navbar from './components/navbar';
import projects from './components/projects';

const init = () => {
  navbar.navBuilder();
  projects.buildProjectHeader();
  projectsView.projectsView();
};
init();
