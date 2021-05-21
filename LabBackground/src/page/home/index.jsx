/*
 * @Author: Xiaochun 
 * @Date: 2021-04-23 11:22:36 
 * @Last Modified by: Xiaochun
 * @Last Modified time: 2021-05-19 17:09:44
 */

//首页
import React        from 'react';
import { Link }     from 'react-router-dom';

import MUtil        from 'util/mm.jsx'
import Statistic    from 'service/statistic-service.jsx'

const _mm           = new MUtil();
const _statistic    = new Statistic();

import PageTitle    from 'component/page-title/index.jsx';
import './index.scss'

//Home组件
class Home extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         userCount       : '-',
    //         expenseCount    : '-',
    //         orderCount      : '-'
    //     }
    // }
    // componentDidMount(){
    //     this.loadCount();
    // }
    // loadCount(){
    //     _statistic.getHomeCount().then(res => {
    //         this.setState(res);
    //     }, errMsg => {
    //         _mm.errorTips(errMsg);
    //     });
    // }
    render(){
        return (
            <div id="page-wrapper">
                <PageTitle title="首页" />
                <div>
                  <h3>备注：该系统仅面向实验室财务管理人员</h3>
                  <br/>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <Link to="/user" className="color-box brown">
                            {/* <p className="count">{this.state.userCount}</p> */}
                            <p className="count">37</p> 
                            <p className="desc">
                                <i className="fa fa-user-o"></i>
                                <span>用户总数</span>
                            </p>
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <Link to="/expense" className="color-box green">
                            {/* <p className="count">{this.state.expenseCount}</p> */}
                            <p className="count">112</p>
                            <p className="desc">
                                <i className="fa fa-list"></i>
                                <span>报账总数</span>
                            </p>
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <Link to="/business" className="color-box blue">
                            {/* <p className="count">{this.state.orderCount}</p> */}
                            <p className="count">23</p>
                            <p className="desc">
                                <i className="fa fa-check-square-o"></i>
                                <span>出差记录</span>
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;