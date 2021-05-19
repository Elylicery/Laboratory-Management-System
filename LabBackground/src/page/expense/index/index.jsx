/*
* @Author: Rosen
* @Date:   2018-01-31 13:10:47
 * @Last Modified by: Xiaochun
 * @Last Modified time: 2021-04-23 11:33:42
*/
import React        from 'react';
import { Link }     from 'react-router-dom';
import MUtil        from 'util/mm.jsx'
import expense      from 'service/expense-service.jsx'

import PageTitle    from 'component/page-title/index.jsx';
import ListSearch   from './index-list-search.jsx';
import TableList    from 'util/table-list/index.jsx';
import Pagination   from 'util/pagination/index.jsx';

import './index.scss';

const _mm           = new MUtil();
const _expense      = new expense();

class expenseList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list            : [],
            pageNum         : 1,
            listType        : 'list'
        };
    }
    componentDidMount(){
        this.loadexpenseList();
    }
    // 加载报账列表
    loadexpenseList(){
        let listParam = {};
        listParam.listType = this.state.listType;
        listParam.pageNum  = this.state.pageNum;
        // 如果是搜索的话，需要传入搜索类型和搜索关键字
        if(this.state.listType === 'search'){
            listParam.searchType = this.state.searchType;
            listParam.keyword    = this.state.searchKeyword;
        }
        // 请求接口
        _expense.getexpenseList(listParam).then(res => {
            this.setState(res);
        }, errMsg => {
            this.setState({
                list : []
            });
            _mm.errorTips(errMsg);
        });
    }
    // 搜索
    onSearch(searchType, searchKeyword){
        let listType = searchKeyword === '' ? 'list' : 'search';
        this.setState({
            listType        : listType,
            pageNum         : 1,
            searchType      : searchType,
            searchKeyword   : searchKeyword
        }, () => {
            this.loadexpenseList();
        });
    }
    // 页数发生变化的时候
    onPageNumChange(pageNum){
        this.setState({
            pageNum : pageNum
        }, () => {
            this.loadexpenseList();
        });
    }
    // 改变报账状态，未报销 / 下架
    onSetexpenseStatus(e, expenseId, currentStatus){
        let newStatus   = currentStatus == 1 ? 2 : 1,
            confrimTips = currentStatus == 1 
                ? '确定要下架该报账？' : '确定要未报销该报账？';
        if(window.confirm(confrimTips)){
            _expense.setexpenseStatus({
                expenseId: expenseId,
                status: newStatus
            }).then(res => {
                _mm.successTips(res);
                this.loadexpenseList();
            }, errMsg => {
                _mm.errorTips(res);
            });
        }
    }
    render(){
        let tableHeads = [
            {name: '报账ID', width: '10%'},
            {name: '报账信息', width: '50%'},
            {name: '金额', width: '10%'},
            {name: '状态', width: '15%'},
            {name: '操作', width: '15%'},
        ];
        return (
            <div id="page-wrapper">
                <PageTitle title="报账列表">
                    <div className="page-header-right">
                        <Link to="/expense/save" className="btn btn-primary">
                            <i className="fa fa-plus"></i>
                            <span>添加报账</span>
                        </Link>
                    </div>
                </PageTitle>
                <ListSearch onSearch={(searchType, searchKeyword) => {this.onSearch(searchType, searchKeyword)}}/>
                <TableList tableHeads={tableHeads}>
                    {
                        this.state.list.map((expense, index) => {
                            return (
                                <tr key={index}>
                                    <td>{expense.id}</td>
                                    <td>
                                        <p>{expense.name}</p>
                                        <p>{expense.subtitle}</p>
                                    </td>
                                    <td>￥{expense.price}</td>
                                    <td>
                                        <p>{expense.status == 1 ? '未报销' : '已报销'}</p>
                                        <button className="btn btn-xs btn-warning" 
                                            onClick={(e) => {this.onSetexpenseStatus(e, expense.id, expense.status)}}>{expense.status == 1 ? '已报销过' : '暂未报销'}</button>
                                    </td>
                                    <td>
                                        <Link className="opear" to={ `/expense/detail/${expense.id}` }>详情</Link>
                                        <Link className="opear" to={ `/expense/save/${expense.id}` }>编辑</Link>
                                    </td>
                                </tr>
                            );
                        })
                    }
                </TableList>
                <Pagination current={this.state.pageNum} 
                    total={this.state.total} 
                    onChange={(pageNum) => this.onPageNumChange(pageNum)}/>
            </div>
        );
    }
}

export default expenseList;