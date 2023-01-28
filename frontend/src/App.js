import logo from './logo.svg';
import { Routes, Route , Link } from "react-router-dom";
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faHouse, faNewspaper, faSquare, faTableCells } from '@fortawesome/free-solid-svg-icons';
import Home from './components/pages/home.js';
import About from './components/pages/about.js';
import Blog from './components/pages/blog.js';
import Testimonial from './components/pages/testimonial.js';
import Contact from './components/pages/contact.js';


function App() {
  return (

    <div className="App">
      <header className="App-header">
            <div className="App-header-container">
                  <div class="logo-contain">
                      <img src={logo} className="App-logo" alt="logo" />
                  </div>
                  <div class="main-menu">
                        <nav className="navbar navbar-expand-lg ">
                        <div className="container-fluid">
                          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav menu-navbar-container">
                              <Link className="nav-link text-white active" aria-current="page" to="home"> <FontAwesomeIcon icon={faHouse} />Home</Link>
                              <Link  className="nav-link text-white" to="about"><FontAwesomeIcon icon={faNewspaper} />About</Link>
                              <Link  className="nav-link text-white" to="blog"><FontAwesomeIcon icon={faSquare} />Blog</Link>
                              <Link  className="nav-link text-white" to="testimonial"><FontAwesomeIcon icon={faTableCells} />Testimonial</Link>
                              <Link  className="nav-link text-white" to="contact"><FontAwesomeIcon icon={faAddressBook} />Contact</Link>
                            </div>
                          </div>
                        </div>
                      </nav>
                       
                  </div>
                
             </div>
        
      </header>
           <Routes>
              <Route path="home" element={ <Home /> } />
              <Route path="about" element={<About /> } />
              <Route path="blog" element={<Blog /> } />
              <Route path="testimonial" element={<Testimonial /> } />
              <Route path="contact" element={<Contact /> } />
          </Routes>
    </div>
  );
}

export default App;
