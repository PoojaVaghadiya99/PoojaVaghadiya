import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Loader from 'react-loaders'

import MyImage from '../../assets/images/HomePage.png'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = [' ', 'P', 'O', 'O', 'J', 'A']
  const jobArray = [
    'F',
    'r',
    'o',
    'n',
    't',
    'e',
    'n',
    'd',
    ' ',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
  ]

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <>
    <div className='container'>
      <div className="home-page">

        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />

            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>`m </span>

            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={18}
            />
          </h1>
          <h2>Frontend Developer / javascript Expert</h2>

          <Link to="/contact" className="flat-bottom">
            CONTACT ME
          </Link>
        </div>

        <div className='image-zone'>
          <img src={MyImage}></img>
        </div>

      </div>

      <Loader type="pacman" />
      </div>
    </>
  )
}

export default Home
