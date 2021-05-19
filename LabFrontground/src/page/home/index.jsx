/*
 * @Author: Xiaochun
 * @Date: 2021-04-23 11:22:36
 * @Last Modified by: Xiaochun
 * @Last Modified time: 2021-04-23 17:36:31
 */

//首页

import React from "react";
import { Link } from "react-router-dom";

import MUtil from "util/mm.jsx";

const _mm = new MUtil();

import PageTitle from "component/page-title/index.jsx";
import "./index.scss";

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userCount: "-",
			expenseCount: "-",
			orderCount: "-",
		};
	}
	componentDidMount() {
		this.loadCount();
	}
	loadCount() {
		// _statistic.getHomeCount().then(res => {
		//     this.setState(res);
		// }, errMsg => {
		//     _mm.errorTips(errMsg);
		// });
	}
	render() {
		return (
			<div className="is-preload">
				<div id="wrapper">
					{/* <PageTitle title="首页" /> */}
					<div id="main">
						<div className="inner">
							<header>
								<h1>
									Laboratory Management System
									<br />
									<a href="#">出差登记</a>. & <a href="#">报销记录</a>
								</h1>
								<p>
									出差登记，可选一天/上午/下午出差，月末统一进行出差补助的发放
									<br />
									公费报销，详细填写购买清单并上传发票，（出租车除发票外还要上传行程单），月末统一进行报销
								</p>
							</header>
							<section className="tiles">
								<article className="style1">
									<span className="image">
										<img src="../images/pic01.jpg" alt="" />
									</span>
									<a>
										<h2>出差登记</h2>
										<div className="content">
											<p>
                      出差登记，可选一天/上午/下午出差，月末统一进行出差补助的发放.
											</p>
										</div>
									</a>
								</article>
								<article className="style2">
									<span className="image">
										<img src="images/pic02.jpg" alt="" />
									</span>
									<a>
										<h2>报销登记</h2>
										<div className="content">
											<div>
                      公费报销，详细填写购买清单并上传发票，（出租车除发票外还要上传行程单），月末统一进行报销.
											</div>
										</div>
									</a>
								</article>
								<article className="style3">
									<span className="image">
										<img src="images/pic03.jpg" alt="" />
									</span>
									<a>
										<h2>我的记录</h2>
										<div className="content">
											<p>
                      包含出差记录 & 报销记录.
											</p>
										</div>
									</a>
								</article>
							</section>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
