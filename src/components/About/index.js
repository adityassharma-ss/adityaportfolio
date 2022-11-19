import React from 'react';
import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGitAlt, faHtml5, faJsSquare, faReact, faJava, faDocker, faGithub } from '@fortawesome/free-brands-svg-icons'
// import { useEffect, useState } from 'react'

const About = () => {
    // const [letterClass, setLetterClass] = useState('text-animate')

    // useEffect(() => {
    //     return setTimeout(() => {
    //       setLetterClass('text-animate-hover')
    //     }, 3000)
    //   }, [])

    return (
        <>
        <div className="container about-page">
            <div className='text-zone'>
                <h1>
                {/* letterClass={letterClass} */}
                    <AnimatedLetters strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']} idx = {15} />
                    </h1> 
                    <p>
            I'm a very ambitious Software developer and a DevOps enthusiast looking 
            for a role in an established IT company with the opportunity to work 
            with the latest technologies on challenging and diverse projects.

          </p>
          <p align="LEFT">
            I'm quiet confident, naturally curious, and perpetually working on
            improving my personality. I am very curious guy and I love to learn
            new things. I am a fast learner and I am always looking for new 
            challenges. I am a team player and I am always ready to help my colleagues.
          </p>
          <p>
            If I need to define myself in one sentence that would be a kind
            person, a sports fanatic, photography enthusiast, and technology-obsessed!!!
          </p>
            </div>
        </div>

        <div className="stage-cube-cont">
            <div className="cubespinner">
            <div className="face1">
            <FontAwesomeIcon icon={faJava} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faDocker} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGithub} color="#EC4D28" />
            </div>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default About