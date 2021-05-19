/*
* @Author: Rosen
* @Date:   2018-01-31 13:06:57
 * @Last Modified by: Xiaochun
 * @Last Modified time: 2021-04-23 11:26:28
*/
import React            from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route, Link } from 'react-router-dom'

// 页面
import expenseList      from 'page/expense/index/index.jsx';
import expenseSave      from 'page/expense/index/save.jsx';
import expenseDetail    from 'page/expense/index/detail.jsx';

class expenseRouter extends React.Component{
    render(){
        return (
            <Switch>
                <Route path="/expense/index" component={expenseList}/>
                <Route path="/expense/save/:pid?" component={expenseSave}/>
                <Route path="/expense/detail/:pid" component={expenseDetail}/>
                <Redirect exact from="/expense" to="/expense/index"/>
            </Switch>
        )
    }
}
export default expenseRouter;