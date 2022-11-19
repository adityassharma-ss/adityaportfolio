import LogoTitle from '../../assets/images/logo-s.png';
import './index.scss';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import Logo from './Logo'
import AnimatedLetters from '../AnimatedLetters'
import React from 'react';


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    const nameArray = ['d', 'i', 't', 'y', 'a']
    const jobArray = ['F','u','l','l','s','t','a','c','k',' ','D','e','v','e','l','o','p','e','r']


    return (
        <div className="container home-page">
        <div className="text-zone">
            <h1><span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoTitle} alt="Developer" />
            <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
            <br/>
            <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={12} />
            </h1>
            <h2>Java Expert / DevOps / Javascript / Content Creator</h2>
            <Link to="/contact" className="flat-button">CONTACT ME</Link>
        </div>
        <Logo />
        </div>
    )
    }


export default Home