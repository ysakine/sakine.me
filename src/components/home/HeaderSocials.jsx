import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";



const HeaderSocials = () => {
    return (
        <div className='home__socials'>
            <a href='https://www.github.com/ysakine' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaGithub />
            </a>

            <a href='https://www.linkedin.com/in/yassine-sakine/' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaLinkedinIn />
            </a>

            <a href='https://x.com/SakineYassine' className='home__social-link' target='__blank' rel='noreferrer'>
                <FaXTwitter />
            </a>
        </div>
    );
};

export default HeaderSocials;
