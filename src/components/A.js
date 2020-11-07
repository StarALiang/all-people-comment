import React, { Component } from 'react'
import { connect } from 'react-redux'

export class A extends Component {
  render() {
    return <div>{this.props.userinfo.userid}</div>
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(A)
