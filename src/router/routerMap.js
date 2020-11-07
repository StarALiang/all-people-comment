import React, { Component } from 'react'
//引入路由固定的模块
import { Link, Switch, HashRouter, Route } from 'react-router-dom'

//引入用到的所有组件
import Home from '../containers/Home'
import Search from '../containers/Search'
import City from '../containers/City'
import User from '../containers/User'
import Detail from '../containers/Detail'

//带有路由功能的组件
export default class Router extends Component {
  render() {
    // 要求: 带有路由操作的所有内容必须存放在固定的标签中
    // HashRouter: 是所有带有路由操作的内容的父标签
    return (
      <HashRouter>
        {/* Switch中存放需要切换的组件 */}
        <Switch>
          {/* 使用Route模块 指定 哪个路径对应哪个组件 */}

          {/* exact: 绝对匹配 */}
          <Route exact path="/" component={Home} />
          {/* 默认是非精确匹配, 即这个路径能 匹配 /news/xxxx */}
          <Route exact path="/detail" component={Detail} />
          <Route exact path="/search/:name/:age" component={Search} />
          <Route path="/city" component={City} />
          <Route path="/user" component={User} />
        </Switch>
      </HashRouter>
    )
  }
}

/**
 * 回顾vue的router
 *
 * <router-view />
 * 此空间会自动切换内容
 *
 * <router-link to="路由地址"></router>
 *
 * React一样, 只不过组件名有变化:
 * <Switch></Switch>  与 router-view 一样
 * <Link>
 */
