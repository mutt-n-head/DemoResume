import React, {Component} from 'react';

class Experience extends Component {
    render() {
        return (
            <div className="item">
                <div className="meta">
                    <div className="upper-row">
                        <h3 className="job-title">{this.props.job.title}</h3>
                        <div className="time">{this.props.job.period}</div>
                    </div>
                    <div className="company"><a href={this.props.job.companyURL}></a>{this.props.job.company}</div>
                </div>
                <div className="details">
                    <p>{this.props.job.details}</p>
                </div>
            </div>
        );
    }
}

export default Experience;
