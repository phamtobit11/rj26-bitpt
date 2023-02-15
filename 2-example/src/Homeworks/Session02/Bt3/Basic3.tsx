import React, { Component } from 'react'
import anh from '../images/2.jpg';
import '../Bt3/Basic3.css'
import anh1 from '../Bt3/icon/icons8-christmas-star-24.png'

type Props = {
    title: string,
    samsung: string,
    icon: string,
    so: string,
    price: string
}

type State = {}

class Basic3 extends Component<Props, State> {
    state = {}

    render() {
        return (
            <div className='main'>
                <div className='anh1'>
                <img src={anh} alt="" />
                </div>
                <div className='content'>
                    <p>{this.props.title}</p>
                    <hr />
                    <p className='samsung'>{this.props.samsung}</p>
                    <div className="icon">
                        <div className='icon1'>
                            <img src={anh1} alt="" />
                            <img src={anh1} alt="" />
                            <img src={anh1} alt="" />
                        </div>
                        <p className='so'>{this.props.so}</p>
                    </div>
                    <p>{this.props.price}</p>
                </div>
            </div>
        )
    }
}

export default Basic3