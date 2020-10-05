import '../styles/main.scss';
import projectsView from './components/views/projectsView';
import navbar from './components/navbar';

const init = () => {
  navbar.navBuilder();
  projectsView.projectsView();
};
init();
