import React, { Component } from 'react'
import { Grid } from 'antd-mobile'
import ReactSwipe from 'react-swipe'

import './style.scss'

const data = Array.from(new Array(21)).map((_val, i) => ({
  icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
  text: `name${i}`,
}))

export default class Category extends Component {
  constructor(props) {
    super(props)

    this.state = {
      // 分类导航列表
      navList: [
        {
          icon: require('../../static/image/home/nav-category/1.png'),
          text: '景点',
        },
        {
          icon: require('../../static/image/home/nav-category/2.png'),
          text: 'KTV',
        },
        {
          icon: require('../../static/image/home/nav-category/3.png'),
          text: '购物',
        },
        {
          icon: require('../../static/image/home/nav-category/4.png'),
          text: '生活服务',
        },
        {
          icon: require('../../static/image/home/nav-category/5.png'),
          text: '健身运动',
        },
        {
          icon: require('../../static/image/home/nav-category/6.png'),
          text: '美发',
        },
        {
          icon: require('../../static/image/home/nav-category/7.png'),
          text: '亲子',
        },
        {
          icon: require('../../static/image/home/nav-category/8.png'),
          text: '小吃快餐',
        },
        {
          icon: require('../../static/image/home/nav-category/9.png'),
          text: '自助餐',
        },
        {
          icon: require('../../static/image/home/nav-category/10.png'),
          text: '酒吧',
        },
        {
          icon: require('../../static/image/home/nav-category/11.png'),
          text: '美食',
        },
        {
          icon: require('../../static/image/home/nav-category/12.png'),
          text: '电影',
        },
      ],
      /* swipeActiveIndex: 0, // 宫格左右轮播图当前项位置
      swipeInterval: {
        auto: 2000,
        callback: (index) => {
          console.log(index)
          console.log(this.state)
          this.setState({
            swipeActiveIndex: index,
          })
        },
      }, */
    }
  }

  render() {
    return (
      <div id="nav-category">
        <Grid
          data={this.state.navList}
          hasLine={false}
          style={{ backgroundColor: '#fff' }}
          isCarousel
          onClick={(_el) => console.log(_el)}
          columnNum={5}
          square={false}
          autoplay={true}
          autoplayInterval={3000}
          infinite={true}
          renderItem={(dataItem) => (
            <div>
              <img
                src={dataItem.icon}
                style={{ width: '50px', height: '50px' }}
                alt=""
              />
              <div
                style={{
                  color: '#666',
                  fontSize: '14px',
                  height: '20px',
                  lineHeight: '20px',
                }}
              >
                <span>{dataItem.text}</span>
              </div>
            </div>
          )}
        />
        {/* <ReactSwipe
          className="carousel"
          swipeOptions={this.state.swipeInterval}
        >
          <div>PANE 1</div>
          <div>PANE 2</div>
          <div>PANE 3</div>
        </ReactSwipe>
        <div>{this.state.swipeActiveIndex}</div> */}
      </div>
    )
  }
  componentDidMount() {
    console.log(data)
  }
}
