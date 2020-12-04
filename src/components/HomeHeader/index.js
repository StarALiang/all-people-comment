import React, { Component } from 'react'

import './style.scss'
import { Button } from 'antd-mobile'

export default class HemoHeader extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-left">深圳</div>
        <div className="header-center">
          <input />
        </div>
        <div className="header-right">用户中心</div>
        <button onClick={this.clickMe.bind(this)}>按钮</button>
        <Button type="primary">ant design mobile</Button>
      </div>
    )
  }

  // 点击
  clickMe() {
    console.log('点击==>')
  }
}
