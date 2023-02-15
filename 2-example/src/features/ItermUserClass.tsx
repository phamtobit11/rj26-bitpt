/* eslint-disable @typescript-eslint/no-unused-vars */
//tsrce
import React, { Component } from 'react'


interface IUser {
  name: string;
  age: number

}
interface IProps {
  userProps: IUser
}

type Props = {}

type State = {}

class ItermUserClass extends Component<IProps, State> {
  state = {}

  render() {
    return (
      <div>{this.props.userProps.name}</div>
    ) 
  }
}

export default ItermUserClass