import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import resume from './resume.json';
import Experience from './Experience';
import Project from './Project';

class App extends Component {
    renderExperiences() {
        let resultsArray = resume.experiences.map((exp, index) => {
            return <Experience job={exp} key={index} />
        });

        return resultsArray;
    }

    renderProjects() {
        let rProj = resume.projects.map((proj, index) => {
            return <Project project={proj} key={index} />;
        });

        return rProj;
    }

  render() {
    // console.log(resume);

    return (
      <div className="App">
        <div className="wrapper">
          <div className="sidebar-wrapper">
            <div className="profile-container">
              <img className="profile" src={resume.image} alt="" />
              <h1 className="name">{resume.name}</h1>
              <h3 className="tagline">Full Stack Developer</h3>
            </div>
        
            <div className="contact-container container-block">
              <ul className="list-unstyled contact-list">
                <li className="email"><i className="fa fa-envelope"></i><a href="mailto: yourname@email.com">{resume.email}</a></li>
                <li className="phone"><i className="fa fa-phone"></i><a href="tel:0123 456 789">{resume.phone}}</a></li>
                <li className="website"><i className="fa fa-globe"></i><a href={resume.website} target="_blank">{resume.website}</a></li>
                <li className="twitter"><i className="fa fa-twitter"></i><a href={resume.twitterURL} target="_blank">{resume.twitter}</a></li>
              </ul>
          </div>
          <div className="education-container container-block">
            <h2 className="container-block-title">Education</h2>
            <div className="item">
                <h4 className="degree">MSc in Computer Science</h4>
                <h5 className="meta">University of London</h5>
                <div className="time">2011 - 2012</div>
            </div>
            <div className="item">
                <h4 className="degree">BSc in Applied Mathematics</h4>
                <h5 className="meta">Bristol University</h5>
                <div className="time">2007 - 2011</div>
            </div>
          </div>
        
          <div className="languages-container container-block">
            <h2 className="container-block-title">Languages</h2>
            <ul className="list-unstyled interests-list">
                {
                    resume.languages.map((lang, index) => {
                        return (<li>{lang.name}<span className="lang-desc"> ({lang.details})</span></li>);
                    })
                }
                <li>English <span className="lang-desc">(Native)</span></li>
                <li>French <span className="lang-desc">(Professional)</span></li>
                <li>Spanish <span className="lang-desc">(Professional)</span></li>
            </ul>
          </div>
        
          <div className="interests-container container-block">
            <h2 className="container-block-title">Interests</h2>
            <ul className="list-unstyled interests-list">
                <li>Climbing</li>
                <li>Snowboarding</li>
                <li>Cooking</li>
            </ul>
          </div>
        </div>
        <div className="main-wrapper">
      
        <section className="section summary-section">
            <h2 className="section-title"><i className="fa fa-user"></i>Career Profile</h2>
            <div className="summary">
                <p>Summarise your career here lorem ipsum dolor sit amet, consectetuer adipiscing elit. You can <a href="http://themes.3rdwavemedia.com/website-templates/orbit-free-resume-cv-template-for-developers/" target="_blank">download this free resume/CV template here</a>. Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.</p>
            </div>
        </section>
        
        <section className="section experiences-section">
            <h2 className="section-title"><i className="fa fa-briefcase"></i>Experiences</h2>
            {this.renderExperiences()}
        </section>
        
        <section className="section projects-section">
            <h2 className="section-title"><i className="fa fa-archive"></i>Projects</h2>
            <div className="intro">
                <p>You can list your side projects or open source libraries in this section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et ligula in nunc bibendum fringilla a eu lectus.</p>
            </div>
            {this.renderProjects()}
        </section>
        
        <section className="skills-section section">
            <h2 className="section-title"><i className="fa fa-rocket"></i>Skills &amp; Proficiency</h2>
            <div className="skillset">        
                <div className="item">
                    <h3 className="level-title">Python &amp; Django</h3>
                    <div className="level-bar">
                        <div className="level-bar-inner" data-level="98%">
                        </div>                                      
                    </div>
                </div>
                
                <div className="item">
                    <h3 className="level-title">Javascript &amp; jQuery</h3>
                    <div className="level-bar">
                        <div className="level-bar-inner" data-level="98%">
                        </div>                                      
                    </div>
                </div>
                
                <div className="item">
                    <h3 className="level-title">Angular</h3>
                    <div className="level-bar">
                        <div className="level-bar-inner" data-level="98%">
                        </div>                                      
                    </div>
                </div>
                
                <div className="item">
                    <h3 className="level-title">HTML5 &amp; CSS</h3>
                    <div className="level-bar">
                        <div className="level-bar-inner" data-level="95%">
                        </div>                                      
                    </div>
                </div>
                
                <div className="item">
                    <h3 className="level-title">Ruby on Rails</h3>
                    <div className="level-bar">
                        <div className="level-bar-inner" data-level="85%">
                        </div>                                      
                    </div>
                </div>
                
                <div className="item">
                    <h3 className="level-title">Sketch &amp; Photoshop</h3>
                    <div className="level-bar">
                        <div className="level-bar-inner" data-level="60%">
                        </div>                                      
                    </div>
                </div>
                
            </div>  
        </section>
      </div>
      </div>
</div>
    );
  }
}

export default App;
