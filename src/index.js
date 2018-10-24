import React from 'react';
import ReactDOM from 'react-dom';

import Footer from './components/general/Footer';
import Home from './components/pages/Home';
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Link, NavLink} from "react-router-dom";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {library} from '@fortawesome/fontawesome-svg-core'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Projects from "./components/pages/Projects";

library.add(faSearch);

const HomePage = () => (
    <Home/>
);

const AboutPage = () => (
    <About/>
);

const ProjectsPage = () => (
    <Projects/>
);

const ContactPage = () => (
    <div>
        <Contact />
    </div>
);

class Web extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <header>
                        <nav className="navbar navbar-expand-lg badge-light">
                            <div className="container">
                                <NavLink className="navbar-brand brand" to="/"><span>YevBes</span></NavLink>

                                <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse"
                                        data-target="#navbar"
                                        aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon my-toggler"></span>
                                </button>

                                <div className="collapse navbar-collapse" id="navbar">
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item">
                                            <NavLink exact={true} className="nav-link" activeClassName='is-active'
                                                     to="/"><span>Home</span></NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" activeClassName='is-active'
                                                     to="/about"><span>About Me</span></NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" activeClassName='is-active'
                                                     to="/projects"><span>Projects</span></NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" activeClassName='is-active'
                                                     to="/contact"><span>Contact</span></NavLink>
                                        </li>
                                        <li className="nav-item"><a className="nav-link" href="#"><FontAwesomeIcon
                                            icon="search"/></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </header>

                    <Route exact path="/" component={HomePage}/>
                    <Route path="/about" component={AboutPage}/>
                    <Route path="/projects" component={ProjectsPage}/>
                    <Route path="/contact" component={ContactPage}/>
                    <footer className="container-fluid">
                        <Footer/>
                    </footer>
                </div>
            </Router>
        );
    }
}


ReactDOM.render(<Web/>, document.getElementById("root"));