import React from 'react'
import {Link} from 'react-router'

export default React.createClass({
  render() {
    // 使用es6的扩展运算符去将属性扩展开来
    return <Link {...this.props} activeClassName="active"></Link>
  }
})
