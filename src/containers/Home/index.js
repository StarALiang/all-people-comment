import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class index extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div>
        Home
        <div>
          <Link to="/detail">goDetail</Link>
          <Link to="/city">goCity</Link>
          <Link to="/user">goUser</Link>
        </div>
      </div>
    )
  }
}
