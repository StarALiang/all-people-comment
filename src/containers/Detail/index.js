import React, { Component } from 'react'
import { connect } from 'react-redux'

import { login } from '../../actions/userinfo'

export class Detail extends Component {
  render() {
    return (
      <div>
        Detail
        <div>{this.props.userinfo.userId}</div>
        <div>{this.props.userinfo.city}</div>
      </div>
    )
  }
  componentDidMount() {
    console.log(
      login({
        userId: 8,
        city: '杭州',
      })
    )
  }
}

const mapStateToProps = (state) => ({
  userinfo: state.userinfo,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)
