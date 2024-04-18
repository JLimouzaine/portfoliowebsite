import React from 'react';
import './App.css';
import fotoPersonal from './resources/josue limouzaine 1.png';
import seleniumLogo from './resources/image-removebg-preview.png';
import postmanLogo from './resources/postmanLogo.png';
import duneMessiah from './resources/duneMessiah.jpg';
import meditations from './resources/meditations.jpg';
import thinkPolitically from './resources/thinkPoli.jpg';

function PersonalInterests() {
  return (
    <section id="personal-interests">
      <h2>Reading List</h2>
      <div className="book-container">
        <div className="book">
          <img src={duneMessiah} alt="Dune Messiah" />
          <p>Dune Messiah - Frank Herbert (Currently Reading)</p>
        </div>
        <div className="book">
          <img src={meditations} alt="Meditations" />
          <p>Meditations - Marcus Aurelius</p>
        </div>
        <div className="book">
          <img src={thinkPolitically} alt="How to Think Politically" />
          <p>How to Think Politically - Graeme Garrard and James Bernard Murphy</p>
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="animated-text">Hi, I'm Josué.</h1>
        <h1 className="animated-text">I specialize in breaking things to make them better.</h1>

      </header>
      <section id="about-me">
        <h2>About Me</h2>
        <img src={fotoPersonal} alt="Your Name" className="foto-Personal" />
        <h3>QA Engineer</h3>
        <p>Computer Technology Engineering graduate, with 4 years of work experience in QA and Automation. My experience has equipped me with a deep understanding of software development principles, with a focus on quality and efficiency. I specialize in implementing QA and automation strategies, skills that I have honed through real world business projects. My friends joke that I have a pretty basic music taste and I love reading! Please take a couple of minutes to look at my projects and feel free to contact me via <a href='mailto: jlimouzaine@gmail.com'>email</a> or <a href='https://www.linkedin.com' target='_blank' rel="noopener noreferrer">LinkedIn</a>.</p>
      </section>
      <section id="projects">
        <h2>Projects</h2>
        <div className="project-grid">
          <div className="project-box">
            <h3>Selenium</h3>
            <img src={seleniumLogo} alt='Selenium Logo' className="projectLogos" />
            <p>The Selenium_Portfolio project is a collection of automated test scripts designed to demonstrate proficiency in web automation using Selenium. The project covers a range of test scenarios on websites like ParaBank and Swag Labs, providing examples of how to automate user interactions, data-driven tests, and various assertion techniques.</p>
            <a href="https://github.com/JLimouzaine/Selenium_Portfolio" target='_blank' rel="noopener noreferrer">View on GitHub</a>
          </div>
          <div className="project-box">
            <h3>Postman</h3>
            <img src={postmanLogo} alt='Postman Logo' className="projectLogos" />
            <p>Description of your Postman project...</p>
            <a href="https://github.com/YourGithub/postman-project" target='_blank' rel="noopener noreferrer">View on GitHub</a>
          </div>
          <div className="project-box">
            <h3>Work in Progress... ⚙️🔨</h3>
            <p>Check back in a couple of weeks!</p>
            {/* <a href="#">Coming Soon</a> */}
          </div>
        </div>
      </section>
      <PersonalInterests />
    </div>
  );
}

export default App;
