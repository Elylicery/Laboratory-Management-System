/*
 * @Author: Xiaochun 
 * @Date: 2021-05-19 16:53:32 
 * @Last Modified by: Xiaochun
 * @Last Modified time: 2021-05-19 16:57:41
 */


//Layout做布局用的
import React from "react";

import NavTop from "component/nav-top/index.jsx";
import NavSide from "component/nav-side/index.jsx";

import "./theme.css";
import "./index.scss";

class Layout extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div id="wrapper">
        {/*头部导航*/}
				<NavTop />
        {/*侧边导航*/}
				<NavSide />
        {/* layout里包含的子组件 */}
				{this.props.children}
			</div>
		);
	}
}

export default Layout;
