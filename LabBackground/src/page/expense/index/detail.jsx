/*
* @Author: Rosen
* @Date:   2018-02-02 21:57:52
 * @Last Modified by: Xiaochun
 * @Last Modified time: 2021-04-23 11:27:26
*/

import React                from 'react';
import MUtil                from 'util/mm.jsx'
import expense              from 'service/expense-service.jsx'
import PageTitle            from 'component/page-title/index.jsx';
import './save.scss';

const _mm           = new MUtil();
const _expense      = new expense();

class expenseDetail extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id                  : this.props.match.params.pid,
            name                : '',
            subtitle            : '',
            categoryId          : 0,
            parentCategoryId    : 0,
            subImages           : [],
            price               : '',
            stock               : '',
            detail              : '',
            status              : 1 //报账状态1为未报销
        }
    }
    componentDidMount(){
        this.loadexpense();
    }
    // 加载报账详情
    loadexpense(){
        // 有id的时候，表示是编辑功能，需要表单回填
        if(this.state.id){
            _expense.getexpense(this.state.id).then((res) => {
                let images = res.subImages.split(',');
                res.subImages = images.map((imgUri) => {
                    return {
                        uri: imgUri,
                        url: res.imageHost + imgUri
                    }
                });
                this.setState(res);
            }, (errMsg) => {
                _mm.errorTips(errMsg);
            });
        }
    }
    render(){
        return (
            <div id="page-wrapper">
                <PageTitle title="添加报账" />
                <div className="form-horizontal">
                    <div className="form-group">
                        <label className="col-md-2 control-label">报账名称</label>
                        <div className="col-md-5">
                            <p className="form-control-static">{this.state.name}</p>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-md-2 control-label">报账描述</label>
                        <div className="col-md-5">
                            <p className="form-control-static">{this.state.subtitle}</p>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-md-2 control-label">报账金额</label>
                        <div className="col-md-3">
                            <div className="input-group">
                                <input type="number" className="form-control" 
                                    value={this.state.price} readOnly/>
                                <span className="input-group-addon">元</span>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-md-2 control-label">报账库存</label>
                        <div className="col-md-3">
                            <div className="input-group">
                                <input type="number" className="form-control"
                                    value={this.state.stock} readOnly/>
                                <span className="input-group-addon">件</span>
                            </div>
                            
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-md-2 control-label">报账图片</label>
                        <div className="col-md-10">
                            {
                                this.state.subImages.length ? this.state.subImages.map(
                                    (image, index) => (
                                    <div className="img-con" key={index}>
                                        <img className="img" src={image.url} />
                                    </div>)
                                ) : (<div>暂无图片</div>)
                            }
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-md-2 control-label">报账详情</label>
                        <div className="col-md-10" dangerouslySetInnerHTML={{__html: this.state.detail}}></div>
                    </div>
                </div>
            </div>
        )
    }
}
export default expenseDetail;