import React from 'react';
import DocumentTitle from 'react-document-title';
import './style.css'

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {title: 'YevBes | About Me'};
    }

    render() {
        return (
            <DocumentTitle title={this.state.title}>
                <div>
                    <div className="container-fluid full-container-first-section-design">
                        <div className="container container-first-section-design">
                            <section className="row">
                                <div
                                    className="col-lg-6 col-lg-offset-0 col-md-6 col-md-offset-0 col-sm-8 col-sm-offset-2 col-xs-12 col-xs-offset-0">
                                    <img src={window.location.origin + '/img/port.jpg'} alt="It's me"
                                         className="img-fluid foto-principal-design"/>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 defaultcursor">
                                    <h2 className="description-title-design">Hola Mundo!</h2>
                                    <p className="description-design">Soy Yevgeniy Bespal y soy ingeniero informático.
                                        Graduado en la
                                        Universidad Politecnica de Valencia (Escuela Técnica Superior de Ingeniería
                                        Informática) como
                                        Ingeniero de Software.
                                        Llevo mas de 5 años ejerciendo los labores como analista programador al terminar
                                        la formación
                                        profesional en Aula Campus (Burjasot, Valencia).<br/><br/>
                                        Es muy importante hoy en día desarrollar el software de calidad, por ello mi
                                        labor para llegar a
                                        conseguir este objetivo se basa en pasar por todas las fases del proceso de
                                        desarrollo del software.
                                        En esta página podreis encontrar varios ejemplos de mis proyectos.</p>
                                </div>
                            </section>
                        </div>
                    </div>
                    <div className="container-fluid full-container-second-section-design">
                        <div className="container container-second-section-design">
                            <section className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 text-center"><img
                                    src={window.location.origin + '/img/octocat.png'}
                                    alt="octocat"
                                    className="img-fluid img-octocat-design"/>
                                </div>
                                <div
                                    className="col-lg-3 col-md-3 col-sm-12 col-xs-12 d-md-flex align-items-md-center text-center">
                                    <div className="button-title-joinme-design">
                                        <p className="defaultcursor">Join me</p>
                                        <button id="buttonGitLab">GitHub</button>
                                    </div>

                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </DocumentTitle>
        );
    }
}

export default About;