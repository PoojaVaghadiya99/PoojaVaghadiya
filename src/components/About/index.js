import { useEffect, useState } from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
  
    useEffect(() => {
        const timeoutId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 3000);
        return () => clearTimeout(timeoutId);
      }, []);
    
    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['A','b','o','u','t',' ','M','e']}
                    idx={15}
                    ></AnimatedLetters>
                </h1>
                <p>
                I am a Software Developer at Confidosoft Solutions Pvt Ltd since June 2023, following a successful term as a Software Developer Intern from January to May 2023. Academically, I hold a Master's in Computer Application (M.C.A) from Maharaja Sayajirao University (MSU), Baroda (2023), and a Bachelor's of Computer Application (B.C.A) from Saurashtra University, Rajkot (2020).               
                </p>
                <p>
                I am proficient in Angular, Typescript, HTML, CSS, Python, and Django, my expertise spans diverse technologies. Specializing in Frontend Development, Angular Development, and Full Stack roles, I bring a unique blend of strong educational grounding and practical experience to the field. 
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color='#DD0031' />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faGitAlt} color='#EC4D28' />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                    </div>
                </div>
            </div>

            <div className='stage-cube-cont2'>
                <div className='cubespinner2'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color='#DD0031' />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faGitAlt} color='#EC4D28' />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                    </div>
                </div>
            </div>

            <div className='stage-cube-cont3'>
                <div className='cubespinner3'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color='#DD0031' />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faGitAlt} color='#EC4D28' />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                    </div>
                </div>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default About