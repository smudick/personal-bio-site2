import '../styles/main.scss';
import projects from './components/projects';
import navbar from './components/navbar';

const init = () => {
  navbar.navBuilder();
  projects.buildProjectCards();
};
init();
