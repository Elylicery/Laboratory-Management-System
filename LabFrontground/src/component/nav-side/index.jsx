/*
 * @Author: Xiaochun 
 * @Date: 2021-04-23 10:57:21 
 * @Last Modified by: Xiaochun
 * @Last Modified time: 2021-04-23 11:26:21
 */

/* 侧边栏 */
import React                from 'react';
import { Link, NavLink }    from 'react-router-dom';

class NavSide extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="navbar-default navbar-side">
              {/* Menu*/}
					<nav id="menu">
						<h2>Menu</h2>
						<ul>
							<li><a href="index.html">Home</a></li>
							<li><a href="generic.html">Ipsum veroeros</a></li>
							<li><a href="generic.html">Tempus etiam</a></li>
							<li><a href="generic.html">Consequat dolor</a></li>
							<li><a href="elements.html">Elements</a></li>
						</ul>
					</nav>

            </div>
        );
    }
}

export default NavSide;