import React from 'react';
import './style.css'

class Sidebar extends React.Component {
    render() {
        return (
            <div className="right-sidebar">
                <div className="container-fluid">
                    <div className="category noselect row">
                        <h3>Categories</h3>
                        <ul id="accordion-des">
                            <li><a href="#">Android</a>
                                <ul className="inside-category">
                                    <li><a
                                        href="#">Material UI</a>
                                    </li>
                                </ul>
                            </li>
                            <li><a href="#">Linux</a>
                            </li>
                        </ul>
                    </div>
                    <div className="recent-articles row">
                        <h3>Recent articles</h3>
                        <ul>
                            <li><a href="#">Android is the best 1</a></li>
                            <li><a href="#">Android is the best 2</a></li>
                            <li><a href="#">Android is the best 3</a></li>
                        </ul>
                    </div>
                    <div className="popular-articles row">
                        <h3>Popular articles</h3>
                        <ul>
                            <li><a href="#">Android is popular 1</a></li>
                            <li><a href="#">Android is the best 2</a></li>
                            <li><a href="#">Android is the best 3</a></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h3>Join Me</h3>
                    <div className="container-fluid github-section">
                        <div className="row">
                            <div className="col-md-3 col-sm-3">
                                <img className="img-github" src={window.location.origin + '/img/github.png'}/>
                            </div>
                            <div className="col-md-9">
                                <p>Yevgeniy Bespal</p>
                                <p>@yevbes</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 col-sm-8">
                                <button className="btn btn-dark-solid btn-small git-hub-btn">GitHub</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sidebar;