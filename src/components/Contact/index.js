import { useEffect, useState } from 'react'
import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()
  
    useEffect(() => {
        const timeoutId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 3000);
        return () => clearTimeout(timeoutId);
      }, []);

      const sendEmail = (e) => {
        e.preventDefault();
      
        emailjs
          .sendForm('service_44e66a4', 'template_1mb3pvp', refForm.current, 'JBaJuXO1xEeB-UbxC')
          .then(
            (response) => {
              alert('Message successfully sent!');
              console.log('Email sent successfully:', response);
              window.location.reload(false);
            },
            (error) => {
              alert('Failed to send the message, please try again');
              console.error('Error sending email:', error);
            }
          );
      };
      

    return (
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['C','o','n','t','a','c','t',' ','M','e']}
                    idx={15}
                    ></AnimatedLetters>
                </h1>

                <p>
                I am a Software Developer at Confidosoft Solutions Pvt Ltd since June 2023, following a successful term as a Software Developer Intern from January to May 2023. Academically, I hold a Master's in Computer Application (M.C.A) from Maharaja Sayajirao University (MSU), Baroda (2023), and a Bachelor's of Computer Application (B.C.A) from Saurashtra University, Rajkot (2020).               
                </p>

                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type='text' name='name' placeholder='Name' required />
                            </li>
                            <li className='half'>
                                <input type='email' name='email' placeholder='Email ID' required />
                            </li>
                            <li>
                                <input placeholder='Subject' type='text' name='subject' required />
                            </li>
                            <li>
                                <textarea placeholder='Message' name='message' required></textarea>
                            </li>
                            <li>
                                <input type='submit' className='flat-button' value='SEND' />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
        <Loader type='pacman' />
        </>
    )
}

export default Contact