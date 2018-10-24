import React from 'react';
import DocumentTitle from 'react-document-title';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {title: 'YevBes | Contact'};
    }
    render(){
        return(
            <DocumentTitle title={this.state.title}>
                <div>
                    <h2>Contact</h2>
                </div>
            </DocumentTitle>
        );
    }
}

export default Contact;