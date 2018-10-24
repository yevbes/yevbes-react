import React from 'react';
import DocumentTitle from 'react-document-title';

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {title: 'YevBes | About Me'};
    }
    render(){
        return(
        <DocumentTitle title={this.state.title}>
            <div>
                <h2>About</h2>
            </div>
        </DocumentTitle>
        );
    }
}

export default About;