import React, { Component } from 'react'

import HomeHeader from '../../components/HomeHeader/index'

export default class index extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div>
        <HomeHeader />
      </div>
    )
  }
}
