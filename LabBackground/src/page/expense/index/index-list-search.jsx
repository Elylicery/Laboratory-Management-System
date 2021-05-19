/*
* @Author: Rosen
* @Date:   2018-01-31 20:54:10
 * @Last Modified by: Xiaochun
 * @Last Modified time: 2021-04-23 11:02:45
*/
import React        from 'react';

class ListSearch extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            searchType      : 'expenseId', //expenseId / expenseName
            searchKeyword   : ''
        }
    }
    // 数据变化的时候
    onValueChange(e){
        let name    = e.target.name,
            value   = e.target.value.trim();
        this.setState({
            [name] : value
        });
    }
    // 点击搜索按钮的时候
    onSearch(){
        this.props.onSearch(this.state.searchType, this.state.searchKeyword);
    }
    // 输入关键字后按回车，自动提交
    onSearchKeywordKeyUp(e){
        if(e.keyCode === 13){
            this.onSearch();
        }
    }
    render(){
        return (
            <div className="row search-wrap">
                <div className="col-md-12">
                    <div className="form-inline">
                        <div className="form-group">
                            <select className="form-control"
                                name="searchType"
                                onChange={(e) => this.onValueChange(e)}>
                                <option value="expenseId">按报账ID查询</option>
                                <option value="expenseName">按报账名称查询</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <input type="text" 
                                className="form-control" 
                                placeholder="关键词"
                                name="searchKeyword"
                                onKeyUp={(e) => this.onSearchKeywordKeyUp(e)}
                                onChange={(e) => this.onValueChange(e)}/>
                        </div>
                        <button className="btn btn-primary" 
                            onClick={(e) => this.onSearch()}>搜索</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default ListSearch;