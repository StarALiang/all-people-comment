import React, { Component } from 'react'
import { connect } from 'react-redux'

export class C extends Component {
  render() {
    return (
      <div>
        <button onClick={this.changeUserInfo.bind(this)}>修改</button>
      </div>
    )
  }
  // 改变用户信息
  changeUserInfo() {
    const actions = this.props.actions
    actions.login({
      userid: 'abcabc',
      city: 'hanzhou',
    })
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(C)
