import { NavLink } from 'react-router-dom'
import './index.scss'
// import LogoS from '../../assets/images/logo-s.png'
// import LogoSubtitle from '../../assets/images/logo_sub.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faGear, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faSkype } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        {/* <Link className='logo' to='/'>
            <img src={LogoS} alt='Logo' />
            <img className='sub-logo' src={LogoSubtitle} alt='LogSlobodan' />
        </Link> */}
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#2f5e78" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#2f5e78" />
            </NavLink>            
            <NavLink exact="true" activeclassname="active" className="skill-link" to="/skill">
                <FontAwesomeIcon icon={faGear} color="#2f5e78" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#2f5e78" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/pooja-vaghadiya-0188911b0/'>
                    <FontAwesomeIcon color='#4d4d4e' icon={faLinkedin}></FontAwesomeIcon>
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href='https://github.com/PoojaVaghadiya99'>
                    <FontAwesomeIcon color='#4d4d4e' icon={faGithub}></FontAwesomeIcon>
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href='skype:live:cid.208f17de77382a06

'>
                    <FontAwesomeIcon color='#4d4d4e' icon={faSkype}></FontAwesomeIcon>
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar