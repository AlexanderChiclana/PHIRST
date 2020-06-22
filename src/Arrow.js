import './Arrow.scss'
import React from 'react'
import { Link } from 'react-router-dom'

const Arrow = (props) => {
  return (
    <Link to={props.route}>
    <div className='link-arrow'>
      <a className="animated-arrow">
        <span className="the-arrow -left">
          <span className="shaft"></span>
        </span>
        <span className="main">
          <span className="text">{props.message}</span>
          <span className="the-arrow -right">
            <span className="shaft"></span>
          </span>
        </span>
      </a>
    </div>
    </Link>
  )
}

export default Arrow
