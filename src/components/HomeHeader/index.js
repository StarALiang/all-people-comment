import React, { Component } from 'react'

import './style.scss'
import { SearchBar } from 'antd-mobile'

export default class HemoHeader extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: '',
    }
  }

  render() {
    return (
      <div id="header" className="flex-center-between">
        <div className="header-left flex-center-between">
          <p className="city-name">{this.props.cityName}</p>
          <i className="iconfont icon-arrowdown"></i>
        </div>
        <div className="header-center">
          <SearchBar
            value={this.state.value}
            placeholder="Search"
            onChange={this.onChange}
          />
        </div>
        <div className="header-right">
          <i className="iconfont icon-yonghu"></i>
        </div>
      </div>
    )
  }
}
