/*
* @Author: Rosen
* @Date:   2018-01-31 13:19:15
 * @Last Modified by: Xiaochun
 * @Last Modified time: 2021-04-23 11:28:50
*/
import MUtil        from 'util/mm.jsx'

const _mm   = new MUtil();

class expense{
    // 获取报账列表
    getexpenseList(listParam){
        let url     = '',
            data    = {};
        if(listParam.listType === 'list'){
            url                         = '/manage/product/list.do';
            data.pageNum                = listParam.pageNum;
        }else if(listParam.listType === 'search'){
            url = '/manage/product/search.do';
            data.pageNum                = listParam.pageNum;
            data[listParam.searchType]  = listParam.keyword;
        }
        return _mm.request({
            type    : 'post',
            url     : url,
            data    : data
        });
    }
    // 获取报账详情
    getexpense(productId){
        return _mm.request({
            type    : 'post',
            url     : '/manage/product/detail.do',
            data    : {
               productId : productId || 0
            }
        });
    }
    // 变更报账销售状态
    setexpenseStatus(expenseInfo){
        return _mm.request({
            type    : 'post',
            url     : '/manage/product/set_sale_status.do',
            data    : expenseInfo
        });
    }
    // 检查保存报账的表单数据
    checkexpense(expense){
        let result = {
            status: true,
            msg: '验证通过'
        };
        // 判断用户名为空
        if(typeof expense.name !== 'string' || expense.name.length ===0){
            return {
                status: false,
                msg: '报账名称不能为空！'
            }
        }
        // 判断描述不能为空
        if(typeof expense.subtitle !== 'string' || expense.subtitle.length ===0){
            return {
                status: false,
                msg: '报账描述不能为空！'
            }
        }
        // 验证品类ID
        if(typeof expense.categoryId !== 'number' || !(expense.categoryId > 0)){
            return {
                status: false,
                msg: '请选择报账品类！'
            }
        }
        // 判断报账金额为数字，且大于0
        if(typeof expense.price !== 'number' || !(expense.price >= 0)){
            return {
                status: false,
                msg: '请输入正确的报账金额！'
            }
        }
        // 判断库存为数字，且大于或等于0
        if(typeof expense.stock !== 'number' || !(expense.stock >= 0)){
            return {
                status: false,
                msg: '请输入正确的库存数量！'
            }
        }
        
        return result;
    }
    // 保存报账
    saveexpense(expense){
        return _mm.request({
            type    : 'post',
            url     : '/manage/product/save.do',
            data    : expense
        });
    }
    /*
    *  品类相关
    */
    // 根据父品类id获取品类列表
    getCategoryList(parentCategoryId){
        return _mm.request({
            type    : 'post',
            url     : '/manage/category/get_category.do',
            data    : {
                categoryId : parentCategoryId || 0
            }
        });
    }
}

export default expense;