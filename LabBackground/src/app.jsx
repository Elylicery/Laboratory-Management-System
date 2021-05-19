/*
 * @Author: Xiaochun 
 * @Date: 2021-04-23 10:52:22 
 * @Last Modified by: Xiaochun
 * @Last Modified time: 2021-05-19 11:01:25
 */

import React            from 'react';
import ReactDOM         from 'react-dom';
import { BrowserRouter as Router, Switch, Redirect, Route, Link } from 'react-router-dom'

import Layout           from 'component/layout/index.jsx';
// 页面
import Home             from 'page/home/index.jsx';
import expenseRouter    from 'page/expense/router.jsx';
import Login            from 'page/login/index.jsx';
import businessList        from 'page/business/index.jsx';
import businessDetail      from 'page/business/detail.jsx';
import UserList         from 'page/user/index.jsx';
import ErrorPage        from 'page/error/index.jsx';

class App extends React.Component{
    render(){
        let LayoutRouter = (
            <Layout> 
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/expense" component={expenseRouter}/>
                    <Route path="/business/index" component={businessList}/>
                    <Route path="/business/detail/:businessNumber" component={businessDetail}/>
                    <Route path="/user/index" component={UserList}/>
                    <Redirect exact from="/business" to="/business/index"/>
                    <Redirect exact from="/user" to="/user/index"/>
                    <Route component={ErrorPage}/>
                </Switch>
            </Layout>
        );
        return (
            <Router>
                <Switch>
                    <Route path="/login" component={Login}/>
                    <Route path="/" render={ props => LayoutRouter}/>
                </Switch>
            </Router>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);