<template>
  <div id="approval">
        <!-- <div class="con"> -->
            <div class="top">
                <div class="history" @click='toOrderHistory'><img src="../assets/history.png" alt=""></div>
            </div>
            <div class="approval_list" v-for="(item,index) in dataList" :key='index'>
                <div class="approval_list_top">
                    <div class="approval_list_top_order">
                        <div class="approval_list_top_new"><img src="../assets/new.png" alt=""></div>
                        <div class="orderNumber">订单号:{{item.businessNum}}</div>
                    </div>
                    <div class="SeveralTimes" >首次</div>
                </div>
                <div class="approval_list_main">
                    <div class="approval_list_main_left">
                        <div class="tripNum">出差人数：<span>{{item.totalPerson}}</span></div>
                        <div class="tripTime">出差时间：<span>{{item.startTime}}--{{item.endTime}}</span></div>
                    </div>
                    <div class="approval_state">
                        <img src="" alt="">
                    </div>
                </div>
                <div class="approval_list_bottom">
                    <div class="approval_list_bottom_application">
                        <div class="applicant">申请人：{{item.applyName}}</div>
                        <div class="applicationtime">申请时间：{{item.creatTime}}</div>
                    </div>
                    <div class="removeHistory">
                        移除
                    </div>
                </div> 
            </div>
        <!-- </div> -->
    </div>
</template>
<script>
import store from '../vuex/vuex'
export default {
  name:'approval',
  data(){
    return{
        list:{"code":200,"data":{"endRow":0,"firstPage":1,"hasNextPage":false,"hasPreviousPage":false,"isFirstPage":true,"isLastPage":true,"lastPage":1,"list":[{"applyName":"\u009D\u009D?蓝战非","auditorPerson":"DJ?\u009D\u009D","businessEmp":[{"businessEmpCompid":2,"businessEmpDet":"市场部","businessEmpId":2,"businessEmpLevel":"B","businessEmpName":"吴彦祖","businessEmpNum":"1150","businessEmpPosition":"干部"}],"businessId":7,"businessMoney":"","businessNum":"Z1O2BMWK20180418151807","businessState":"3","businessText":"ajsodhaksd","creatTime":1524036386000,"createTime":1524035888000,"destination":"?\u009D\u009D\u009D\u009D\u009D\u009D","empId":1,"endTime":1524035421000,"hotleWay":6,"isFirst":true,"new":false,"replyList":[{"replyBusorderid":7,"replyEmpid":1,"replyPid":1,"replyText":"撒大大","replyTime":1524125425000,"replyType":1},{"replyBusorderid":7,"replyEmpid":1,"replyPid":2,"replyText":"11大苏打啊实打实大","replyTime":1524125447000,"replyType":2}],"startTime":1524128871000,"totalPerson":3,"tranWay":1}],"navigateFirstPage":1,"navigateLastPage":1,"navigatePages":8,"navigatepageNums":[1],"nextPage":0,"orderBy":"","pageNum":1,"pageSize":1,"pages":1,"prePage":0,"size":1,"startRow":0,"total":1},"message":"SUCCESS"},
        dataList:[{"applyName":"\u009D\u009D?蓝战非","auditorPerson":"DJ?\u009D\u009D","businessEmp":[{"businessEmpCompid":2,"businessEmpDet":"市场部","businessEmpId":2,"businessEmpLevel":"B","businessEmpName":"吴彦祖","businessEmpNum":"1150","businessEmpPosition":"干部"}],"businessId":7,"businessMoney":"","businessNum":"Z1O2BMWK20180418151807","businessState":"3","businessText":"ajsodhaksd","creatTime":1524036386000,"createTime":1524035888000,"destination":"?\u009D\u009D\u009D\u009D\u009D\u009D","empId":1,"endTime":1524035421000,"hotleWay":6,"isFirst":true,"new":false,"replyList":[{"replyBusorderid":7,"replyEmpid":1,"replyPid":1,"replyText":"撒大大","replyTime":1524125425000,"replyType":1},{"replyBusorderid":7,"replyEmpid":1,"replyPid":2,"replyText":"11大苏打啊实打实大","replyTime":1524125447000,"replyType":2}],"startTime":1524128871000,"totalPerson":3,"tranWay":1}],
        num:15456465465,
        empId:'1',
    }
  },
  mounted:function(){
      console.log(store.url.localhost)
      var url=store.url;
      var that=this;
    //   var header={
    //             'Access-Control-Allow-Origin': '*',
    //             'Content-Type': 'text/plain'
    //         }
    var header={"Content-Type":'application/x-www-form-urlencoded'}
      fetch(url.localhost+url.list,{
          method:"POST",
          headers:header,
          body:{
              empId:that.empId
          },
        //   mode:'cors'
      }).then(function (res) {
          console.log(res)
        });
        $.ajax({
            url:url.localhost+url.list,
            type:"POST",
            header:{"Content-Type":"application/x-www-form-encoded"},
            data:{
                 empId:that.empId
            },
            success:function(res){
                console.log(res)
            }
        })
  },
  methods:{
      toOrderHistory:function(){
          console.log("跳转失败？")
          this.$router.push({path:'/orderHistory'})
      }
  }
}
</script>
<style scoped>
#approval{
    min-height: 100vh;
    background: #f0ebeb;
}
.con{
    width: 100%;
    min-height: 100%;
    
}
.approval_list{
    background: #fff;
    margin-bottom: 0.22rem;
}
.approval_list_top{
    display: flex;
    height: 0.88rem;
    justify-content: space-between;
    padding: 0 0.24rem;
    box-sizing: border-box;
    align-items: center;
    border-bottom: 1px solid #e4e4e4;
}
.approval_list_top_order{
    display: flex;
    justify-content: flex-start;
    height: 100%;
    align-items: center;
}
.approval_list_top_new{
    width: 0.34rem;
    height: 0.34rem;
    background: #e5012e;
    border-radius: 50%;
   margin-right: 0.13rem;
}
.approval_list_top_new img{
    width: 100%;
    height: 100%;
}
.orderNumber{
    font-size: 0.3rem;
    color: #333;
}
.SeveralTimes{
    width: 1.04rem;
    height: .34rem;
    background: #ffe2e7;
    text-align: center;
    line-height: 0.34rem;
    color:#e5012e;
    font-size: 0.24rem;
    border-radius: 0.17rem;
}
.approval_list_main{
    display: flex;
    padding: 0.28rem 0.24rem 0.24rem 0.26rem; 
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;
}
.approval_list_main_left{
    width: 80%;
    height: 100%;
    font-size: 0.26rem;
    color: #333;
}
.tripNum{
    margin-bottom: 0.28rem;
}
.tripNum span,.tripTime{
    color: #666;
}
.approval_list_bottom{
    display: flex;
    justify-content: space-between;
    padding-left: 0.27rem;
    box-sizing: border-box;
    height: 0.7rem;
    align-items: center;
}
.approval_list_bottom_application{
    display: flex;
    width: 77%;
    justify-content: space-between;
    color: #999999;
    font-size: 0.24rem;
}
.removeHistory{
    width: 1.58rem;
    height: 0.7rem;
    background: #e5012e;
    color: #fff;
    font-size: 0.24rem;
    text-align: center;
    line-height: 0.7rem;
}
.top{
    display: flex;
    height: 0.9rem;
    justify-content: flex-end;
    margin-bottom: 0.2rem;
}
.history{
    width: 0.82rem;
    height: 100%;
    background: #fff;
    border-bottom-left-radius: 50%;
    text-align: center;
    line-height: 0.9rem;
}
.history img{
    width: 0.34rem;
    height: 0.34rem;
}
</style>
