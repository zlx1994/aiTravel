<template>
    <div class="box">
  <div class="top">
            <div class="topImg">
            <img src="../assets/banner.png" >
            </div>
            <div class="main">
                <div  class="main_list" @click="toApply">
                    <div class="main_list_img"><img src="../assets/chuchai@3x.png" /></div>
                    <div class="main_list_title">申请出差</div>
                </div>
                <div  class="main_list" >
                     <div class="main_list_img"><img src="../assets/baoxiao@3x.png" /></div>
                    <div class="main_list_title">申请报销</div>
                </div>
                <div  class="main_list" >
                     <div class="main_list_img"><img src="../assets/dingdan@3x.png" /></div>
                    <div class="main_list_title">差旅订单</div>
                </div>
            </div>
        
        <div class="section">
            <div class="section_list">
                <div class="section_list_icon"><img src="../assets/jiudian@3x.png" ></div>
                <div class="section_list_title">酒店</div>
            </div>
        </div>
        <div class="trevalBy">
            <h2>出行工具</h2>
            <div class="section">
                    <div class="section_list">
                        <div class="section_list_icon"><img src="../assets/qiche@3x.png" alt=""></div>
                        <div class="section_list_title">汽车</div>
                    </div>
                    <div class="section_list">
                        <div class="section_list_icon"><img src="../assets/feiji@3x.png" alt=""></div>
                        <div class="section_list_title">飞机</div>
                    </div>
                    <div class="section_list">
                        <div class="section_list_icon"><img src="../assets/chuan@3x.png" alt=""></div>
                        <div class="section_list_title">轮船</div>
                    </div>
                    <div class="section_list">
                        <div class="section_list_icon"><img src="../assets/huoche@3x.png" alt=""></div>
                        <div class="section_list_title">火车</div>
                    </div>
        </div>
            </div>
       
    </div>
    <div class="bottom">
            <div class="bottom_left">
                <div class="bottom_left_icon" @click="toApproval">
                    <img src="../assets/xiaoxi@3x.png" alt="">
                    <div class="bottom_left_num"></div>
                </div>
                <div class="BacthOfTrial"></div>
            </div>
            <div class="immediate">立即批审</div>
        </div>
    </div>
</template>
<script>
import urls from '../vuex/vuex'
export default {
     name :'index',
    data(){
        return{
            mainList:[{"src":"../assets/chuchai@3x.png","title":"申请出差"},{"src":"../assets/baoxiao@3x.png","title":"申请报销"},{"src":"../assets/dingdan@3x.png","title":"差旅订单"}]
        }
    },
    mounted(){
    //   var data={"code":200,"data":{"D":[{"businessEmpCompid":2,"businessEmpDet":"外交部","businessEmpId":3,"businessEmpLevel":"c","businessEmpName":"迪丽热巴","businessEmpNum":"1160","businessEmpPosition":"金鹰"}],"W":[{"businessEmpCompid":2,"businessEmpDet":"销售部","businessEmpId":1,"businessEmpLevel":"A","businessEmpName":"吴奇隆","businessEmpNum":"1140","businessEmpPosition":"经理"},{"businessEmpCompid":2,"businessEmpDet":"市场部","businessEmpId":2,"businessEmpLevel":"B","businessEmpName":"吴彦祖","businessEmpNum":"1150","businessEmpPosition":"干部"}]},"failMessage":"","message":"请求成功"}
    //     var json=data.data;
    //     for(var key in json){
    //         console.log(json[key])
    //     } 

    },
    methods:{
        toApproval:function(){
            this.$router.push({path:'/approval'})
        },
        toApply:function(){
            this.$router.push({path:'/apply'})
        }
    }
}
</script>
<style scoped>
.box{
    min-height: 100vh;    
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.top{
    width: 100%;
}
.topImg{
    width:100%;
    background: #eee;
    margin-bottom:10px;
}
.topImg img{
    width: 100%;
    display: inline-block;
}
.main{
    width: 100%;
    height:2.14rem;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .32rem .31rem;
    box-sizing: border-box;
    margin-bottom: 0.2rem;
    font-size: 0.28rem;
}
.main_list{
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
}
.main_list_img{
    width: 1.04rem;
    height: 1.04rem;
    border-radius: 50%;
}
.main_list_img img{
    width: 100%;
    height: 100%;
}
.main_list_title{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.section_list_icon img{
    width: 0.39rem;
    height: 0.4rem;
   margin-right: 0.25rem;
}
.bottom_left_icon img{
    width: 1rem;
    height: 1rem;
}
.section{
    width: 100%;
    height: auto;
    padding:0 0.24rem;
    box-sizing: border-box;
    background: #fff;
}
.section_list{
    width: 100%;
    height: 0.9rem;
    display: flex;
    align-items: center;
    font-size: 0.28rem;
    color: #333;
}
.section_list_icon{
    width: 0.64rem;
    height: 0.4rem;
}
.section_list_title{
    width: 100%;
    height: 100%;
    line-height: 0.9rem;
    box-sizing: border-box;
    border-bottom: 1px solid #e4e4e4;
}
.trevalBy h2{
    width: 100%;
    line-height: 0.94rem;
    font-size: 0.27rem;
    padding-left: 0.24rem;
    box-sizing: border-box;
}
.bottom{
    width: 100%;
    height: 0.9rem;
    background: #fff;
    display: flex;
    align-items: center;
}
.bottom_left{
    width: 70.66666666%;
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 0.35rem;
    box-sizing: border-box;
}
.bottom_left_icon{
    position: relative;
    width: 1rem;
    height: 1rem;
    top: -0.3rem;
}
.bottom_left_num{
    width: 0.3rem;
    height: 0.3rem;
    position: absolute;
    top: 0;
    right: 0;
    background: #e5012e;
    border-radius: 50%;
    font-size: 0.18rem;
    color: #fff;
    text-align: center;
}
.BacthOfTrial{
    margin-left: 0.21rem;
    font-size: 0.28rem;
    color: #666;
}
.immediate{
    background: #e5012e;
    color: #fff;
    font-size: 0.3rem;
    width: 29.333333334%;
    height: 100%;
    text-align: center;
    line-height: 0.9rem;
}
/* 审批页面 */
.approvalHtml{
    width: 100%;
    height: 100%;
}
.approvalTop_history{
    height: 0.9rem;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 0.21rem;
}
.approvalTop_history div{
    width: 0.82rem;
    height: 100%;
    border-bottom-left-radius: 50%;
    background: #fff;
}
</style>

