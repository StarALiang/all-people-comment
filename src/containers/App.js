import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Rout from '../router/routerMap'
import LocalStore from '../utils/localStore'
import { CITYNAME } from '../config/localStoreKey'
import * as userInfoActions from '../actions/userinfo'
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      initDone: false,
    }
  }

  render() {
    return (
      <div>
        {this.state.initDone ? <Rout erMap /> : '加载中...'}
        {/* <Rout erMap /> */}
      </div>
    )
  }

  componentDidMount() {
    const loadTimer = setTimeout(() => {
      this.setState({
        initDone: true,
      })
      clearTimeout(loadTimer)
    }, 3000)
    // 从localStorage里，获取城市
    let cityName = LocalStore.getItem(CITYNAME)
    if (cityName == null) {
      cityName = '杭州'
    }
    // 将城市信息存储到 Redux 中，方法为异步
    this.props.userInfoActions.updateCityName({ city: cityName })
  }
}

const mapStateToProps = (state) => ({
  userinfo: state.userinfo,
})

const mapDispatchToProps = (dispatch) => ({
  userInfoActions: bindActionCreators(userInfoActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
