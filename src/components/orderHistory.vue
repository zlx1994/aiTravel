<template>
  <div class="orderHistory">
    <div class="condition">
        <div class="date" >日期不限</div>
        <div class="conditions" @click="conditionsChoose"><div>条件不限</div>
            
        </div>
    </div>
  <div class="conditionChoose" v-show="conditionChoose" @click="closecondition">
      <ul class="conditionChooseBox">
              <li>不限</li>
              <li>通过</li>
              <li>驳回</li>
              <li>过期</li>
      </ul>
  </div>
  </div>
</template>
<script>

export default {
  name:'orderHistory',
  data(){
      return{
         day:"日期不限",
         conditionChoose:false
      }
  },
  mounted:function(){
    // var that=this;
    // new Mdate("date",{
    //   beginYear:new Date().getFullYear(),
    //   beginMonth:new Date().getMonth()+1,
    //   beginDay:new Date().getDate(),
    //   endYear:new Date().getFullYear()+100,
    //   endMonth:12,
    //   endDay:new Date().getDate(),
    //   format:'-'
    // })
  },
  methods:{
    
    getDate(){
    var year=$('#date').attr("data-year");
    var month=$('#date').attr("data-year");
    var day=$('#date').attr("data-year");
    that.date=year+"-"+month+"-"+day;
    console.log(year+"-"+month+"-"+day)
  },
    conditionsChoose:function(){
      this.conditionChoose=true;
      $(".conditionChoose").eq(0).removeClass('animated fadeOutUp').addClass('animated fadeInDown')
    },
  closecondition:function(){
      var that=this;
      $(".conditionChoose").eq(0).removeClass('animated fadeInDown').addClass('animated fadeOutUp').animate('',function(){
        setTimeout(function(){
          that.conditionChoose=false;  
        },1000)
      })
  }
  }
}
</script>
<style scoped>
.condition{
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 0.75rem;
  background: #f5f5f5;
  color:#999999;
  font-size: 0.28rem;
}
.condition>div{
  position: relative;
}
.conditionChoose{
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0.75rem;
  left: 0;
  /* display: none; */
  background: rgba(0,0,0,.7);
}
.conditionChoose li{
  height: 0.94rem;
  font-size: 0.3rem;
  color:#333333;
  text-align: center;
  line-height: 0.94rem;
  background: #fff;
  border-bottom: 1px solid #e4e4e4;
}
.dis{
  display: block;
}
</style>
