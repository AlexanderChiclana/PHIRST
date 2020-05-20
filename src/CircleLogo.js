import React from 'react';
import Logo from './Logo.js'

function CircleLogo(props) {
    return (
    <div style={{
        width: '50%',
        display: 'flex',
        justifyContent: 'flex-end'
    }}>
        <div style={{
            backgroundColor: 'white',
            borderRadius: '50%',
            height: '310px',
            width: '310px'
        }}>
            {/* <Logo /> */}
        </div>
    </div>
    );
}

export default CircleLogo;