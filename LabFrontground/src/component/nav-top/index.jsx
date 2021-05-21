/*
 * @Author: Rosen
 * @Date:   2018-01-23 19:59:56
 * @Last Modified by: Xiaochun
 * @Last Modified time: 2021-05-21 17:26:24
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
			username: _mm.getStorage("userInfo").username || "",
		};
	}
	// 退出登录
	onLogout() {
		_user.logout().then(
			(res) => {
				_mm.removeStorage("userInfo");
				window.location.href = "/login";
			},
			(errMsg) => {
				_mm.errorTips(errMsg);
			}
		);
	}
	//菜单显隐
	showMenu() {
		let menu = document.getElementById("menu");
		// menu.style.visibility = "visible";
		// menu.style.transform = "translateX(0)";
    let menuclass = menu.getAttribute("class");
    menuclass = 'is-menu-visible';
	}
	render() {
		return (
			<div id="wrapper" className="top">
				{/* 顶部菜单 */}
				<div className="navbar navbar-default top-navbar">
					<div className="inner">
						{/* 右侧登录 */}
						<ul className="nav navbar-top-links navbar-right">
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
				</div>
			</div>
		);
	}
}

export default NavTop;
