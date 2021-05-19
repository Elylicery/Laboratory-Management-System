/*
* @Author: Rosen
* @Date:   2018-01-23 19:47:59
 * @Last Modified by: Xiaochun
 * @Last Modified time: 2021-05-19 11:33:55
*/
import React from 'react';

import NavTop from 'component/nav-top/index.jsx';
import NavSide from 'component/nav-side/index.jsx';

import './theme.css';
import './index.scss';

class Layout extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div id="wrapper">
                <NavTop />
                <NavSide />
                {this.props.children}
            </div>
        );
    }
}

export default Layout;