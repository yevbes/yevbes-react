import React from 'react';
import DocumentTitle from 'react-document-title';

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {title: 'YevBes | Projects'};
    }
    render(){
        return(
            <DocumentTitle title={this.state.title}>
                <div>
                    <h2>Projects</h2>
                </div>
            </DocumentTitle>
        );
    }
}

export default Projects;