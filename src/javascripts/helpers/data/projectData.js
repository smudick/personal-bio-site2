import bear from '../../../images/bear-watcher.png';
import dino from '../../../images/dino-kennel.png';
import tamagotchi from '../../../images/tamagotchi.png';
import hat from '../../../images/sorting-hat.png';

const projects = [
  {
    title: 'Dino Kennel',
    screenshot: `${dino}`,
    description: 'This project allows users to interact with Dinosaurs in a virtual dino kennel. Here you can learn more about each dino, feed and pet dinos, and send them on adventures. Be wary of the dinos health though, if their health drops too low they may end up in the hospital or even the graveyard.',
    technologiesUsed:
      'HTML, CSS, Bootstrap Styling, JavaScript, JQuery, ES6 Modules, Version Control with Github',
    available: true,
    url: 'https://sm-dino-kennel.netlify.app/',
    githubUrl: 'https://github.com/smudick/Dino-Kennel',
  },
  {
    title: 'Tamagotchi',
    screenshot: `${tamagotchi}`,
    description: 'This project simulates the classic handheld Tamagotchi game. It allows you to feed, play with, fight with, and rest your virtual pet. Be careful that to watch your pets health, because bad things can happen if its score in any one area drops too low!',
    technologiesUsed:
      'HTML, CSS, Sass, JavaScript, JQuery, Webpack, Version Control with Github',
    available: true,
    url: 'https://sm-tamagotchi.netlify.app/',
    githubUrl: 'https://github.com/smudick/tamagotchi',
  },
  {
    title: 'Bear Watcher',
    screenshot: `${bear}`,
    description: 'This sites purpose is to provide bear watching enthusiasts a place where they can upload images of their favorite bears, while also demonstrating my ability to code with jQuery and separate code into js modules.',
    technologiesUsed:
      'HTML, CSS, JavaScript, JQuery, ES6 Modules, Version Control with Github',
    available: true,
    url: 'https://smbearwatcher.netlify.app/',
    githubUrl: 'https://github.com/smudick/bear-watcher',
  },
  {
    title: 'Sorting Hat',
    screenshot: `${hat}`,
    description: 'An app that simulates the sorting hat from Harry Potter. Enter a name and press sort in order to randomly assign a new Hogwarts student to a house. Once sorted, students can also be removed from Hogwarts by pressing the Expel button.',
    technologiesUsed:
      'HTML, CSS, Bootstrap Styling, Vanilla JavaScript, Version Control with Github',
    available: true,
    url: 'https://sorting-hat-project.netlify.app/',
    githubUrl: 'https://github.com/smudick/sorting-hat',
  },
];

const getProjects = () => projects;

export default { getProjects };
