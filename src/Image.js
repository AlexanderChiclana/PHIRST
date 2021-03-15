import React, { Component } from 'react'
import axios from 'axios'

export default class Image extends Component {
    state = {
        imageURL: null
    }
    componentDidMount() {
        console.log('image url ' + this.props.imageURL)

        axios
        .get(`https://cdn.contentful.com/spaces/fxjn6hn7ptqk/environments/master/assets/${this.props.imageURL}?access_token=7Cp2qRcbgPNokFoPZjpxbZKyYewJdeCypE94i6Lm71Q `)
  
        .then(res => {
          console.log('the response' + res)
          this.setState({
              imageURL: res.data.fields.file.url
          })
        })
    }
    render() {
        return (
            <React.Fragment>
            {this.state.imageURL && 
            <div
            className="member-frame"
            style={{backgroundImage: `url(${this.state.imageURL})`}}
            >
            
            </div>
            }

            </React.Fragment>
        )
    }
}
