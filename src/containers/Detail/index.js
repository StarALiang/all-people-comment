import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as userinfoActions from '../../actions/userinfo'

export class Detail extends Component {
  render() {
    return (
      <div>
        Detail
        <div>{this.props.userinfo.userId}</div>
        <div>{this.props.userinfo.city}</div>
        <button onClick={this.changeUserinfo.bind(this)}>修改</button>
      </div>
    )
  }
  componentDidMount() {
    console.log(this.props)
    this.props.userinfoActions.login({
      userId: 3,
      city: '丽水',
    })
  }
  // 修改用户信息
  changeUserinfo() {
    this.props.userinfoActions.login({
      userId: 2,
      city: '杭州',
    })
  }
}

const mapStateToProps = (state) => ({
  userinfo: state.userinfo,
})

const mapDispatchToProps = (dispatch) => ({
  userinfoActions: bindActionCreators(userinfoActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Detail)
