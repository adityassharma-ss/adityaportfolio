import React from 'react';
import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Skills = () => {
  return (
    <>
    <div className="container skills-page">
        <div className='text-zone'>
        <h1>
                {/* letterClass={letterClass} */}
                    <AnimatedLetters strArray={['S','k','i','l','l','s',' ']} idx = {15} />
                    </h1>
                    <p>
            Expert in software development including technologies like 

            <span class="tech-tag"> HTML5</span>,
            <span class="tech-tag"> CSS3</span>,
            <span class="tech-tag"> JavaScript</span>,
            <span class="tech-tag"> Java</span>,
            <span class="tech-tag"> React</span>,
            <span class="tech-tag"> React</span>,
            <span class="tech-tag"> Docker</span>,
            <span class="tech-tag"> Kubernetes</span>,
            <span class="tech-tag"> SQL</span>,
            <span class="tech-tag"> Linux</span>,
            <span class="tech-tag"> Git</span>, etc.
          </p>
          <br/>

          <p>
          I put special effort into optimizing my code and providing the best user
          experience. I would love to give you any kind of support & help you with your project.
          Currently, I am learning DevOps and working on enhancing my skills as a Full Stack Developer.
          </p>

          <br/>

          <p>
            Visit my
            <a onclick="ga('send', {'hitType': 'event', 'eventCategory': 'Skills Page', 'eventAction': 'Link Clicked', 'eventLabel': 'Linkedin profile' });" target="_blank" href="https://www.linkedin.com/in/aditya-sharma-47b787201/"> LinkedIn </a>
            profile for more details. Also you can checkout my cv on this
            <a target="_blank" href="https://drive.google.com/file/d/1UN_NomK-aj-o9Zu2l0bB-0ISdjqqCaRu/view?usp=share_link"> link</a>
            , or feel free to give a peek on some of my blog
            <a target="_blank" href="https://hashnode.com/@adityash23"> posts. </a>
             And you can also checkout my github profile for some of my
            <a target="_blank" href="https://github.com/adityassharma-ss"> projects.</a>

          </p>
        </div>

    </div>

    
    <Loader type="pacman" />
    
    </>
  )
}

export default Skills