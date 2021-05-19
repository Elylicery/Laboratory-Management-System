/*
* @Author: Rosen
* @Date:   2018-01-23 22:18:41
 * @Last Modified by: Xiaochun
 * @Last Modified time: 2021-04-23 10:54:51
*/
import React from 'react';

class PageTitle extends React.Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
        document.title = this.props.title + ' - Lab1301 Manage';
    }
    render(){
        return (
            <div className="row">
                <div className="col-md-12">
                    <h1 className="page-header">{this.props.title}</h1>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default PageTitle;