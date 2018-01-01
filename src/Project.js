import React, {Component} from 'react';

class Project extends Component {
    render() {
        return (
            <div className="item">
                <span className="project-title"><a href={this.props.project.url} target="_blank">{this.props.project.name}</a></span> - 
                <span className="project-tagline">{this.props.project.detail}</span>
            </div>
        );
    }
}

export default Project;
