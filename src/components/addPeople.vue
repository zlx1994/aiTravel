<template>
<keep-alive>
    <div  class="addPeople">
        <div class="chooseLetter" >
            <div v-for="item in sort" @click="toView(item)">{{item}}</div>
        </div> 
        <div class="peopleList">
            <div v-for="item in list">
                <div class="letter" :id="item.letter">{{item.letter}}</div>
                <div class="peopleList_box"  v-for="(items,key) in item.list">
                    <div class="select"><img  @click='chooseThis(items,$event,"aaa")' :src="nosele" alt=""></div>
                    <div class="peopleList_R">
                        <div class="peopleList_title">{{items.businessEmpName}}</div>
                        <div class="peopleMsg">
                            <div>编号：{{items.businessEmpNum}}</div>
                            <div>部门:{{items.businessEmpDet}}</div>
                            <div>职位:{{items.businessEmpPosition}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="save" @click="save">保存</div>
    </div>
</keep-alive>
</template>
<script>
import store from '../vuex/vuex'
import {mapMutations} from 'vuex'
export default {
  name:'addPeople',
  data:function(){
      return{
        'sort':["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
        people:[{'s':[{'name':'史蒂芬','number':'3956',"department":'技术部',"job":"经理"}]},{'s':[{'name':'史蒂芬','number':'3956',"department":'技术部',"job":"经理"}]}],
        list:[],
        nosele:require('../assets/nosel.png'),
        sele:require('../assets/sele.png'),
        selectList:[],
  }
},
  mounted:function(){
      var url=store.state;
      var data={"code":200,"data":{"D":[{"businessEmpCompid":2,"businessEmpDet":"外交部","businessEmpId":3,"businessEmpLevel":"c","businessEmpName":"迪丽热巴","businessEmpNum":"1160","businessEmpPosition":"金鹰"}],"W":[{"businessEmpCompid":2,"businessEmpDet":"销售部","businessEmpId":1,"businessEmpLevel":"A","businessEmpName":"吴奇隆","businessEmpNum":"1140","businessEmpPosition":"经理"},{"businessEmpCompid":2,"businessEmpDet":"市场部","businessEmpId":2,"businessEmpLevel":"B","businessEmpName":"吴彦祖","businessEmpNum":"1150","businessEmpPosition":"干部"}]},"failMessage":"","message":"请求成功"}
      var list=data.data;
      var arr=[];
      for(var key in list){
          var obj={};
          obj.letter=key;
          obj.list=list[key];
          arr.push(obj)
      }
      this.list=arr
    //   $.ajax({
    //       url:url.localhost
    //   })
  },
  methods:{
      //跳转
      toView:function(letter){
          var a=document.getElementById(letter)
          var anchor = this.$el.querySelector(letter)
        // document.body.scrollTop = a.offsetTop; // chrome
        document.documentElement.scrollTop = a.offsetTop; // firefox
      },
      //选择人员
      chooseThis:function(data,e,b){
          var e=e||event;
      console.log(e.currentTarget)
      var list=this.selectList;
      if(e.target!='undefined'){
       if(e.target.src==this.nosele){
           e.target.src=this.sele;
           this.selectList.push(data)
       }else{
           e.target.src=this.nosele;
           list.forEach(function( item,index){
               if(data==item){
                  list.splice(index,1)
               }
           })
       }
       }
      },
      //保存
      save:function(){
          var list=this.selectList;
          this.$router.push({name:'apply',params:{list:list}})
      }
  }
}
</script>
<style scoped>
.addPeople{
    padding-bottom:0.8rem;
    box-sizing: border-box; 
}
.chooseLetter{
    height: 100%;
    position: fixed;
    right: 0.1rem;
    top: 1.45rem;
}
.chooseLetter div{
    padding:0.03rem;
    color: #e5012e;
    font-size: 0.24rem;
}
.peopleList{
    width: 100%;
    height: auto;
    /* padding-top:  */
}
.letter{
    width: 100%;
    height: 0.54rem;
    font-size: 0.26rem;
    color: #666;
    line-height: 0.54rem;
    padding-left: 0.24rem;
    box-sizing: border-box;
}
.peopleList_box{
    background: #fff;
    height: 1.25rem;
    display: flex;
    padding:0 0.24rem;
}
.select{
    display: flex;
    margin-right: 0.24rem;
    height: 100%;
    justify-content: center;
    align-items: center;
}
.select img{
     width: 0.38rem;
     height: 0.38rem;
}
.peopleList_R{
    width: 100%;
    border-bottom: 1px solid #ddd;
}
.peopleMsg,.peopleList_title{
    display: flex;
    height: 50%;
    justify-content: space-between;
    align-items: center;
}
.peopleMsg div{
    width: 33%;
}
.save{
    width: 100%;
    height: 0.8rem;
    background: #e2e2e2;
    color: #e5012e;
    font-size: 0.32rem;
    text-align: center;
    line-height: 0.8rem;
    position: fixed;
    bottom: 0;
    left: 0;
}
</style>