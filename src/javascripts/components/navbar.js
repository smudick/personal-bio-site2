const navBuilder = () => {
  $('#navbar').html(
    `<nav class="navbar navbar-expand-lg navbar-light bg-dark">
      <a class="navbar-brand title text-white" href="#">Sam Mudick</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
    <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
      <ul class="navbar-nav navLinks">
        <li class="nav-item linkSpace">
          <a class="nav-link navLink text-white" href="#bioPage">Bio</a>
        </li>
        <li class="nav-item linkSpace">
          <a class="nav-link navLink text-white" href="#skillsPage">Skills</a>
        </li>
        <li class="nav-item linkSpace">
          <a class="nav-link navLink text-white" href="#projectsPage">Projects</a>
        </li>
      </ul>
    </div>
  </nav>`
  );
};

export default { navBuilder };
