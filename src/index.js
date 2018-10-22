import React from 'react';
import ReactDOM from 'react-dom';

import Footer from './components/general/Footer';
import Home from './components/pages/Home';
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {library} from '@fortawesome/fontawesome-svg-core'
import {faSearch} from '@fortawesome/free-solid-svg-icons'

library.add(faSearch);

const HomePage = () => (
    <Home/>
);

const AboutPage = () => (
    <div>
        <h2>About</h2>
    </div>
);

const ProjectsPage = () => (
    <div>
        <h2>Projects</h2>
    </div>
);

const ContactPage = () => (
    <div>
        <h2>Contact</h2>
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
                                <Link className="navbar-brand brand" to="/"><span>YevBes</span></Link>

                                <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse"
                                        data-target="#navbar"
                                        aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon my-toggler"></span>
                                </button>

                                <div className="collapse navbar-collapse" id="navbar">
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/"><span>Home</span></Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/about"><span>About Me</span></Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/projects"><span>Projects</span></Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/contact"><span>Contact</span></Link>
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