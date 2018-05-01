<template>
<div class="detail">
    <div class="detailHeader area">
        <div class="detailHeader_list flex">
            <div>订单号</div>
            <div class="gray"> 
                <div>0011135</div>
                <div class="isFirst">首次</div>
            </div>
        </div>
        <div class="applicant flex">
            <div>申请人</div>
            <div  class="gray">{{}}</div>
        </div>
        <div class="travelTime flex">
            <div>出差时间</div>
            <div class="gray flex_start"><span>4月18号</span>--<span class="Mr">4月19号</span><span>共一天</span></div>
        </div>
        <div class="address flex">
            <div>出差地址</div>
            <div class="gray flex_start"><span>北京</span>--<span>深圳</span></div>
        </div>
    </div>
    <div class="travalPeople area">
        <div class="travelPeoples flex">
            <div>出差人员</div>
            <div class="gray">3人</div>
        </div>
        <div class="travelPeopleList">
            <div class="travelPeopleList flex color">
                <div class="width">蜡笔小新</div>
                <div class="width">0021236</div>
                <div class="width">科技开发部</div>
            </div>
        </div> 
    </div>
    <div class="travelType area">
        <div class="flex">
            <div>交通方式</div>
            <div class="gray">火车</div>
        </div>
        <div class="flex">
            <div>入住酒店</div>
            <div class="gray">标准型（250-300/人）</div>
            
        </div>
        <div class="flex">
            <div>约共计花费</div>
            <div class="gray">￥2500人</div>
        </div>
    </div>
    <div>
        <div class="flex travelWhy">
            <div>出差事由</div>
            <div class="gray color">
                <textarea>我的出差的理由是，为了追求自己成为火影的目标，所以要去一趟深圳，有情报说晓这个组织在深圳有所举动。希望火影大人，能够批准，我一定完成任务</textarea>
            </div>
        </div>
        <div class="flex color">
            <div>审批人:技术部 李培根</div>
            <div>提交时间：1月18号 13:20</div>
        </div>
    </div>
    <div class="flex btn">
        <div>驳回</div>
        <div>同意</div>
    </div>
</div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
    .detail{
        padding-top: 0.2rem;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
    }
    .flex{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 0.86rem;
        background: #fff;
        border-bottom: 1px solid #e4e4e4;
        padding:0 0.24rem;
        color: #333;
        font-size: 0.28rem;
    }
    .gray{
        width: 67%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #666;

    }
    .area{
        margin-bottom:0.2rem;
    }
    .travelWhy{
        height: 2.08rem;
        padding: 0.3rem 0.23rem 0.3rem 0.28rem;
        align-items: flex-start;
    }
    textarea{
        width: 100%;
        height: 100%;
        outline: none;
        border:0 none;
        resize: none;
        color: #666;
    }
    .color{
        color: #666;
    }
    .width{
        width: 33%;
        white-space: nowrap;
    }
    .btn{
        padding: 0.6rem 0.24rem 0.88rem ;
        background: transparent;
    }
    .btn div{
        width: 3rem;
        height: .8rem;
        color: #fff;
        text-align: center;
        line-height: 0.8rem;
        background: #999;
        border-radius: 0.06rem;
    }
    .btn div:last-child{
        background: #e5012e;
    }
    .flex_start{
        justify-content: flex-start;
    }
    .Mr{
        margin-right: 0.1rem;
    }
</style>
