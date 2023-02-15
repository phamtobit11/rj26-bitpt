import React, { Component } from 'react'
import '../Bt2/Basic2.css';
import anh from '../images/3.jpg';

type Props = {
  tech: string,
  title1: string,
  title2: string,
  day: string,
  drf: string
}

type State = {}

class Basic2 extends Component<Props, State> {
  state = {}

  render() {
    return (
      <div className='main'>
        <img src={anh} alt="" />
        <div className='content'>
          <p className='tech'>{this.props.tech}</p>
          <h1>{this.props.title1}</h1>
          <h1>{this.props.title2}</h1>
          <div className="footer">
          <p  className='text1'>{this.props.day}</p>
          <p  className='text2'>{this.props.drf}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Basic2