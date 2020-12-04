import React, { Component } from 'react'

import './style.scss'

export default class HemoHeader extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-left">深圳</div>
        <div className="header-center">
          <input />
        </div>
        <div className="header-right">用户中心</div>
      </div>
    )
  }
}
