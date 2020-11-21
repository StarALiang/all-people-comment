import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import RouterMap from '../router/routerMap'
import LocalStore from '../utils/localStore'
import { CITYNAME } from '../config/localStoreKey'
import * as userInfoAction from '../actions/userinfo'
export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      initDone: false,
    }
  }

  render() {
    return (
      <div>{this.state.initDone ? <RouterMap /> : <div>加载中...</div>}</div>
    )
  }

  componentDidMount() {
    let cityName = LocalStore.getItem(CITYNAME)
    if (cityName == null) {
      cityName = '杭州'
    }
    console.log(cityName)
    LocalStore.setItem(CITYNAME, '北京')
    setTimeout(() => {
      this.setState({
        initDone: true,
      })
    }, 3000)
  }
}

const mapStateToProps = (state) => ({
  userinfo: state.userinfo,
})

const mapDispatchToProps = (dispatch) => ({
  userInfoAction: bindActionCreators(userInfoAction, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Detail)
