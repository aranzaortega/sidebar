import React from 'react';
import styled from 'styled-components';
import Background from '../assets/aranza.jpg';
import Button from '../components/Button/Button.js'
import {Link} from 'react-router-dom';

const Hero = styled.div`
    width: 100%;
    height: 90vh;
    background: linear-gradient(326deg, rgba(2,0,36,0.75) 0%, rgba(9,9,121,0.75) 35%, rgba(0,212,255,0.75) 100%),
    url(${Background}) center no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const HeroContent = styled.div`
    text-align: center;
    color: #fff;
`;

const Home = () => {
    return (
        <div className="home">
            <Hero>
                <HeroContent>
                    <h1>Hey! I'm Aranza</h1>
                    <h3>Junior Frontend Developer</h3>
                    <Button onClick='/about'>
                        Know more
                    </Button>
                </HeroContent>
            </Hero>
        </div>
    )
}

export default Home
