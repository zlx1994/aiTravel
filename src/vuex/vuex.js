import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state={
    localhost:"http://192.168.1.8:8181",//地址
    way:"/business/order/way",//入住方式、交通方式获取
    applyTravel:"/business/order/applyForBusiness",//申请出差
    listByCompanyId:"/business/emp/listByCompanyId",//获取用户该公司出差人员
    list:"/business/order/list",//获取审批列表
    reply:"/business/order/reply",//审核 出差单
    remove:"/business/order/remove",//审核 移除/撤回 出差单
    queryHistory:"/business/order/queryHistry",//历史查询
    travelPeople:[]
}
const mutations={
    addPeople(state,list){
        if(list!=''){
            var newList=state.travelPeople.concat(list)
           return state.travelPeople=newList;
        }
    }
}


export default new Vuex.Store({
   state,mutations
})

// module.exports.url={
//     localhost:"http://192.168.1.8:8181",//地址
//     way:"/business/order/way",//入住方式、交通方式获取
//     applyTravel:"/business/order/applyForBusiness",//申请出差
//     listByCompanyId:"/business/emp/listByCompanyId",//获取用户该公司出差人员
//     list:"/business/order/list",//获取审批列表
//     reply:"/business/order/reply",//审核 出差单
//     remove:"/business/order/remove",//审核 移除/撤回 出差单
//     queryHistory:"/business/order/queryHistry",//历史查询
// }