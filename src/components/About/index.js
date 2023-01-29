import { useEffect, useState } from 'react'
import {
  faAngular,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faCss3Alt,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import React from 'react'
import { faCat, faDatabase } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'About me'.split('')}
              idx={15}
            />
          </h1>
          <p>
            I'm a National University of Singapore (NUS) graduate, majoring in
            Computational Biology with a minor in Computer Science. Currently
            planning to take up a Masters to further my interest in CS.
          </p>
          <p>
            I'm a software engineer in an established bio-tech company with the
            opportunity to work with a wide range of technologies across
            challenging and diverse projects to build life science tools and
            integrated systems for large-scale analysis of genetic variation and
            function.
          </p>
          <p>
            I'm quiet confident, naturally curious, and am working on improving
            myself a bit at a time.
          </p>
          <p>I kinda like cats.</p>
          <Link to="/portfolio" className="flat-button">
            Portfolio
            <FontAwesomeIcon
              icon={faCat}
              color="#8d8d8ds"
              className="anchor-icon"
            />
          </Link>
          <Link to="/contact" className="flat-button">
            Contact Me
            <FontAwesomeIcon
              icon={faCat}
              color="#8d8d8ds"
              className="anchor-icon"
            />
          </Link>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3Alt} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faDatabase} color="#DEDCD9" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
