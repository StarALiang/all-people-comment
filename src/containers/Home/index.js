import React, { Component } from 'react'
import { connect } from 'react-redux'

import HomeHeader from '../../components/HomeHeader'
import Category from '../../components/Category'
import Ad from './subpage/Ad'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div>
        <HomeHeader cityName={this.props.userinfo.cityName} />
        <Category />
        <Ad />
      </div>
    )
  }

  componentDidMount() {
    console.log(this.props.userinfo)
  }
}

const mapStateToProps = (state) => ({
  userinfo: state.userinfo,
})

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
