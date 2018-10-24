import React from 'react';
import Article from "./Article";
import Sidebar from "./Sidebar";
import DocumentTitle from 'react-document-title';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title: 'YevBes | Home' };
    }

    render() {
        return (
            <DocumentTitle title={this.state.title}>
                <div className="container">
                    <div className="row">
                        <section className="col-md-9">
                            <Article/>
                            <Article/>
                        </section>

                        <aside className="col-md-3">
                            <Sidebar/>
                        </aside>
                    </div>
                </div>
            </DocumentTitle>
        );
    }
}

export default Home;