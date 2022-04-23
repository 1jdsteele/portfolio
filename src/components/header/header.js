
import './Header.css';




function Header() {
  return (
    <header className="header">
      <div className="headerFlex">
        <div>
          <h1>
            Jake Steele:
          </h1>
          <h2>
            Full Stack Software Engineer. 
          </h2>
        </div>
        <div className="headerImage">
          <img src="/IMG_7484.jpeg" alt="face photo" />
        </div>
      </div>
        
    </header>
  )
}

export default Header;
