import React from 'react';
import './style.css'

import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {faFolderOpen} from '@fortawesome/free-solid-svg-icons'

library.add(faUser);
library.add(faFolderOpen);

class Article extends React.Component {
    constructor(params) {
        super(params);
        this.today = new Date();
    }

    render() {
        return (
            <article>
                <div className="container-post">
                    <div className="post-area">

                        <div className="blog-classic">
                            <div className="left-side">
                                <div className="date">
                                    {('0' + this.today.getDate()).slice(-2)}
                                    <span>{('0' + (this.today.getMonth() + 1)).slice(-2) + " " + this.today.getFullYear()}</span>
                                </div>
                                <div className="type">
                                    <img src={window.location.origin + '/img/Android.png'}/>
                                </div>
                            </div>

                            <div className="blog-post">
                                {/* TODO: onImgClickExpandPhoto */}
                                <div className="img-post">
                                    <img className="img-fluid" src={window.location.origin + '/img/test.jpg'}/>
                                </div>
                                <h4 className="text-uppercase"><a
                                    href="">Hello World</a></h4>
                                <ul className="post-meta">
                                    <li><FontAwesomeIcon
                                        icon="user"/> posted by <a href="#">Yevgeniy Bespal</a></li>
                                    <li><FontAwesomeIcon icon="folder-open"/><a
                                        href="#"> Android</a>
                                    </li>
                                    {/*<!--li><i class="fa fa-comments"></i> <a href="#">4 comments</a></li-->*/}
                                </ul>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consequatur cumque
                                    distinctio ex facilis iusto, laboriosam laborum, mollitia, nisi praesentium repellat
                                    saepe sed vitae. Consequuntur ipsam molestias nisi nostrum veniam.</p>

                                <div className="row">
                                    <div className="col-md-8 col-lg-5">
                                        <a href="#"
                                           className="btn btn-small btn-dark-solid btn-block">Read More</a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </article>
        );
    }
}

export default Article;
