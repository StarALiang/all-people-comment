import React, { Component } from 'react'
import { connect } from 'react-redux'

export class B extends Component {
  render() {
    return <div>{this.props.userinfo.city}</div>
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(B)
