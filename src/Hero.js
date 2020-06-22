import React, { Component } from 'react';

class Hero extends Component {
    render() {
        return (
            <div className='hero'>
                <div className='hero-buffer'/>
                <div className='banner container'>
                PHIRST
                </div>
                <div className='hero-diamond'>
                    <div className='left-triangle'>
                        <img alt='map of phillipines' src={require('./images/philipine black.png')}></img>
                    </div>
                    
                    <div className='right-triangle'>
                        <div className='container'>
                        <div className='slogan'>
                        Philippine Health Initiative Research Service and Training
                        </div>
                        <div className='divider'></div>
                        <ul className='hero-navigation'>
                            <li>our mission</li>
                            <li>what we do</li>
                            <li>mentorship</li>
                            {/* <li>research</li> */}
                            <li>contact</li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Hero;