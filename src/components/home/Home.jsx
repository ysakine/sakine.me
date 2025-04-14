import React from 'react';
import './Home.css';
import Me from '../../assets/avatar.png';
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';
import Resume from '../../assets/CV.pdf';

const Home = () => {
     const downloadResume = async () => {
            window.open(Resume, '_blank');
        }

    return (
        <section className="home container" id='home'>
            <div className="intro">
                <img src={Me} alt="" className='home__img' width='120' />
                <h1 className="home__name">Yassine Sakine</h1>
                <span className="home__education">Software Engineer | Tech Lead | Freelance<br />
                                                    Java & Python Specialist<br />
                                                    DevOps & Cloud Enthusiast</span>

                <HeaderSocials />
        
                <div className="home__button-group">
                    <a href="#contact" className="btn">Contact</a>
                    <a className="btn" onClick={downloadResume}>Télécharger le CV</a>
                </div>

                <ScrollDown />
            </div>

            <Shapes />
        </section>
    )
}

export default Home