import React, { Component } from 'react'

class Testimonial extends Component {
  render() {
      const { quote, name, position, photo } = this.props
    return (
      <div
        style={{
          flexBasis: '45%', 
          position: 'relative',
          backgroundColor: '#FFB401',
          borderRadius: '30px',
          padding: '30px 50px 50px 50px',
        //   fontStyle: 'italic',
          fontSize: '22px',
          boxShadow: '1px 2px 4px -1px rgba(0,0,0,0.2)',
          margin: '60px 0px 90px 0px'
        }}
      >
        <p
          style={{
            // fontStyle: 'italic'
          }}
        >
            <b>"</b>{quote}<b>"</b>
        </p>
        <div
          style={{
            display: 'flex',
            flexGrow: '1',
            justifyContent: 'flex-end',
            textAlign: 'right'
          }}
        >
          <div>
            <h3>- {name}</h3>
            <h6>{position}</h6>
          </div>
        </div>
        <div
            style={{
                position: 'absolute',
                bottom: '-57px',
                left: '0px',
                width: '100%',
                display: 'flex',
                justifyContent: 'center'

            }}
        >
        <div
          style={{
            height: '115px',
            width: '115px',
            backgroundColor: '#FFB401',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: '0 2px 4px -1px rgba(0,0,0,0.2)'
          }}
        >
          <img
            alt="quotee"
            src={photo}
            style={{
              height: '90%',
              width: '90%',
              objectFit: 'cover',
              borderRadius: '50%'
            }}
          />
        </div>
        </div>
      </div>
    )
  }
}

export default Testimonial
