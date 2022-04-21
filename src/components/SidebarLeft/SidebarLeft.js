// import './App.css';
import {Link} from 'react-router-dom';

function SidebarLeft() {
  return (
    <aside className="sidebar">
        <nav>
          This is where the routes in the sidebar to the left would go to which is in a nav in an aside. Now from a component!
        </nav>
        <ul>
          <li>Personal Projects</li>
          <Link to="/shopify">
          <li>Shopify Pages</li>
          </Link>
          <Link to="/">
            <li>About Me</li>
          </Link>
          <Link to="/resume">
            <li>Resume</li>
          </Link>
          <li>Brand Statement</li>
          <li>Contact</li>
          <li>indeed/gh blah blah blah</li>
        </ul>
      </aside>
  )
}

export default SidebarLeft;
