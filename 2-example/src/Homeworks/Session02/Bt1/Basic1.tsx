import React, { Component } from 'react'
import '../Bt1/Basic1.css'
import anh1 from '../images/1.jpg';
type Props = {
    title: string,
    access: string,
    bag: string,
    kid: string,
    sex: string
}

type State = {}

class Basic1 extends Component<Props, State> {
  state = {}

  render() {
    return (
      <div className='main'>
        <img src={anh1} alt="" />
        <div className='content'>
          <h1>{this.props.title}</h1>
            <p>{this.props.access}</p>
            <p>{this.props.bag}</p>
            <p>{this.props.kid}</p>
            <p>{this.props.sex}</p>             
        </div>
      </div>
    )
  }
}

export default Basic1