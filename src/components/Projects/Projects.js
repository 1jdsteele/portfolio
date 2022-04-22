import './Projects.css';

function Projects() {
    return (
      <div>
        <h3>Personal Projects</h3>
          <div>
                <a href="https://github.com/1jdsteele">
                  <p className="git-border">
                    Click here for my personal github.
                  </p>
                </a>
          </div>
          <div>
            <h4>Tamagotchi Project</h4>
            <p>A static site game where you take care of your pet! Made with javascript, HTML, and CSS.</p>
          </div>
          <div>
            <h4>PokeBattle</h4>
            <p>A game where you choose Pokemon to see who will prevail in battle! Do you have what it takes to become a champion? Made with React calling the Pokemon API.</p>
          </div>
          <div>
            <h4>RAM electronics</h4>
            <p>An e-commerce store that sells electronics. Made in a group in a one week sprint. Built using full stack MERN.</p>
          </div>
      </div>
    )
  }
  
  export default Projects;
  