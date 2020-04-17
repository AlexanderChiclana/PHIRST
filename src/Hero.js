import React, { Component } from 'react';

class Hero extends Component {
    render() {
        return (
            <div className='hero'>
                <div className='banner container'>
                PHIRST
                </div>
                <div className='hero-diamond'>
                    <div className='left-triangle'>
                        <img alt='map of phillipines' src={require('./images/philipine black.png')}></img>
                    </div>
                    
                    <div className='right-triangle'>
                        <div className='slogan'>
                        Philippine health initiative research service and training
                        </div>
                        <div className='divider'></div>
                        <ul className='hero-navigation'>
                            <li>about</li>
                            <li>initiatives</li>
                            <li>community</li>
                            <li>research</li>
                            <li>contact</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Hero;