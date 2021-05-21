/*
 * @Author: Xiaochun
 * @Date: 2021-05-19 16:57:50
 * @Last Modified by: Xiaochun
 * @Last Modified time: 2021-05-21 16:09:15
 */

import React from "react";
import { Link } from "react-router-dom";
import MUtil from "util/mm.jsx";
import User from "service/user-service.jsx";

const _mm = new MUtil();
const _user = new User();

class NavTop extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: _mm.getStorage("userInfo").username || "默认用户名",
		};
	}
	// 退出登录
	onLogout() {
		// _user.logout().then(
		// 	(res) => {
		// 		_mm.removeStorage("userInfo");
		// 		window.location.href = "/login";
		// 	},
		// 	(errMsg) => {
		// 		_mm.errorTips(errMsg);
		// 	}
		// );
	}
	render() {
		return (
			<div className="navbar navbar-default top-navbar">
        {/* 左侧导航 */}
				<div className="navbar-header">
					<Link className="navbar-brand" to="/">
						<b>Lab1301</b>Back
					</Link>
				</div>

        {/* 导航菜单 */}
				<ul className="nav navbar-top-links navbar-right">
          {/* 用户信息标签 */}
					<li className="dropdown">
						<a className="dropdown-toggle" href="javascript:;">
							<i className="fa fa-user fa-fw"></i>
							{this.state.username ? (
								<span>欢迎，{this.state.username}</span>
							) : (
								<span>欢迎您</span>
							)}
							<i className="fa fa-caret-down"></i>
						</a>
            {/* 下拉菜单 */}
						<ul className="dropdown-menu dropdown-user">
							<li>
								<a
									onClick={() => {
										this.onLogout();
									}}
								>
									<i className="fa fa-sign-out fa-fw"></i>
									<span>退出登录</span>
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		);
	}
}

export default NavTop;
