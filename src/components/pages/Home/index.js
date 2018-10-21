import React from 'react';
import Article from "./Article";
import Sidebar from "./Sidebar";

class Home extends React.Component {

    render() {
        return (
            <div className="container">

                <div className="row">
                    <section className="col-md-9">
                        <Article/>
                    </section>

                    <aside className="col-md-3">
                        <Sidebar/>
                    </aside>
                </div>
            </div>
        );
    }
}

export default Home;