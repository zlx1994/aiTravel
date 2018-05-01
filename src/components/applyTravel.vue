<template>
  <div class="apply">
      <div class="applyTop">
          <div class="applyPeople style color">
              <div class="">申请人</div>
              <div style="height:100%;line-height:0.86rem;">老亚瑟</div>
          </div>
          <div class="travelTime">
            <div class="style color">出差时间</div>
            <div class="travelTimeSel style">
                <div type="text" class="time" @click="startTime('startDate')">{{sT}}
                    <!-- <mt-datetime-picker ref='startDate' v-model="dateShow" type="date" :startDate='sd'  year-format="{value}年" month-format="{value}月" date-format="{value}日" @confirm='selectDate'></mt-datetime-picker> -->
                </div>—
                <div type="text" class="time" @click='endTime()'>{{eT}}
                     <!-- <mt-datetime-picker ref='endDate' v-model="dateShow" type="date" :startDate='sd'  year-format="{value}年" month-format="{value}月" date-format="{value}日" @confirm='selectDateEnd'></mt-datetime-picker> -->
                </div>
                <div style="margin-left:0.1rem;" v-show='langTime>0'>共{{langTime}}天</div>
            </div>
          </div>
          <div class="travelAddress">
              <div class="style color">出差地址</div>
              <div class="style">
                  <div @click="startP(0)" >{{startPlace}}</div>—
                  <div @click="startP(1)">{{endPlace}}</div>
              </div>
          </div>
      </div>
      <div class="travelPeoples">  
          <div>
              <div class="style color">出差人员</div>
              <div class="addPeople style">
                  <div>{{peopleNum}}人</div>
                  <div @click.stop="addPeople"><img class="addP" src="../assets/addP.png" alt=""></div>
              </div>
          </div>
          <!--  v-show="travelPeople==null" -->
          <keep-alive>
          <div class="travelPeoplesList"  v-for="(item,index) in travelPeople" :key='index' v-if='travelPeople!=""' :id='item.businessEmpId'>
              <div class="travelPeoplesList_con" :style="textStyle"   @touchstart.prevent='touchStart($event)' @touchend='touchEnd($event)' @touchmove='touchMove($event)'>
                <div class="style" >
                    <div class="width">{{item.businessEmpName}}</div>
                    <div class="width">{{item.businessEmpNum}}</div>
                    <div class="width">{{item.businessEmpDet}}</div>
                </div>
                <div class="delete" :style='zIndex'>删除</div>
              </div>
          </div>
          </keep-alive>
      </div>
      <div class="transportation">
          <div class="transporttationType">
              <div class="style color">交通方式</div>
              <div class="chooseTransporttation style" id="chooseTransporttation" @click.self.stop="gettraffic">
                  <div>{{travelBy}}</div>
                  <div><img class="jtr" src="../assets/jtR.png" alt=""></div>
              </div>
          </div>
          <div class="hotle" >
              <div class="style color" >入住酒店</div>
              <div class="hotleChoose style"  @click.stop="choosehotle">
                  <div>{{hotelTypeSel}}</div>
                  <img class="jtr" src="../assets/jtR.png" alt="">
              </div>
          </div>
      </div>
      <div class="trip">
          <div class="style color">出差事由</div>
          <textarea class="style" name="" id="" placeholder="请输入出差事由，上线100字"></textarea>
      </div>
      <div class="submit">提交审核</div>
     <div class="bot hotelChoose" @click="botHidden">
         <div class="botCon">
             <h2>选择酒店类型</h2>
             <ul>
                 <li :value="item.businessId" v-for="(item,index) in entryMode" :key="index" @click.stop="getHotelType(item.businessId,item.businessModel,item.businessModelSize)">{{item.businessModel}}({{item.businessModelSize}})</li>
             </ul>
         </div>
     </div>
     <div class="bot traffic" @click="choosetraffic">
         <div class="botCon">
             <h2>选择交通工具</h2>
             <ul>
                <li :value="item.businessId" v-for='(item,index) in traffic' :key="index" @click.stop="trafficSel(item.businessId,item.businessName)"><img :src="trafficImg[index]" alt=""><span>{{item.businessName}}</span></li>
             </ul>
         </div>
     </div>
     <div>
          <mt-popup v-model="cityShow" :closeOnClickModal='show' position="bottom">
         <div class="pickerBtn">
             <div @click='closePopup'>取消</div>
             <div @click='chooseCityStart'>确定</div>
         </div>
        <mt-picker ref="picker" :slots="slots" value-key='citysName'  @change='onValuesChange'>Picker</mt-picker>
    </mt-popup>
     </div>
    
      
     
    <!-- </div> -->
  </div>
</template>
<script>
import store from '../vuex/vuex'
import city from '../../static/js/city'
export default {
    name:"apply",
    data(){
        return{
            show:false,
            sT:"起始时间",
            eT:"结束时间",
            sd:new Date(),
            ed:new Date(),
            startPlace:'出发地',
            endPlace:"目的地",
            dateShow:false,//时间Picker默认不显示
            startDate:new Date('1970-01-01'),
            endDate:new Date(),
            cityState:'0',
            langTime:0,
            travelBy:'请选择交通方式',
            botCon:false,
            botShow:false,
            hotelType:'',
            hotelTypeSel:'请选择酒店类型',
            peopleNum:0,
            trafficImg:["../assets/huoche@3x.png","../assets/feiji@3x.png","../assets/qiche@3x.png","../assets/chuan@3x.png"],
            traffic:[],//交通方式
            entryMode:[],//入驻方式
            trafficShow:true,//交通显示
            travelPeople:[],
            startX: 0,       //触摸位置
            moveX: 0,       //滑动时的位置
            disX: 0,       //移动距离
            txtStyle: '',
            delWidth: 200,
            top: '',
            zIndex: 'z-index:-1',
            textStyle:'',
            slots: [
                {
                flex: 1,
                values: city.citys,
                 defaultIndex:0,
                className: 'slot1',
                textAlign: 'right'
                }, {
                divider: true,
                content: '-',
                className: 'slot2'
                }, {
                flex: 1,
                values: city.citys[0].citys,
                 defaultIndex:0,
                className: 'slot3',
                textAlign: 'left'
                }
            ],
            cityShow:false
        }
    },
    store,
    created(){
         var url=store.state;
         console.log(this.startDate)
        // this.getWay(url,this,0)
    },
    mounted(){
        //添加员工
        if(this.$route.params!=undefined){
             var thisP=this.travelPeople;
            //   console.log(this.travelPeople)
             var list=this.$route.params.list;
             if(this.travelPeople.length>1){
                console.log(this.travelPeople)
                 thisP.forEach(function(item,index){
                     if(item.toString()==list[index].toString()){
                         console.log(index +=index)
                     }
                 })
             }else{
                 this.travelPeople=this.$route.params.list
             }
         }
         
       var url=store.state;
       var header={"Content-Type":'application/x-www-form-urlencoded'}

        var _this=this;
        var now = new Date();
        var currYear = now.getFullYear();
        var currMonth = now.getMonth() + 1;
        var currDay = now.getDate();
            //左滑删除 
            var moveList=[];
            var leftS=document.getElementsByClassName('travelPeoplesList');
            // var leftS=$('.travelPeoplesList')
            for(var i=0;i<$('.travelPeoplesList').length;i++){
                 var startx,endx,movex,disx;    
                $('.travelPeoplesList').eq(i).on('touchstart',function(e){
                    // console.log(startx,endx,movex,disx)
                    startx=e.originalEvent.changedTouches[0].pageX;
                });
                $('.travelPeoplesList').eq(i).on('touchend',function(e){
                     endx=e.originalEvent.changedTouches[0].pageX; 
                    disx=startx-endx;
                    if(endx>startx){
                        console.log("右划")
                             $(this).find('.travelPeoplesList_con').css({'transform':'translateX(0rem)','transition': 'all .3s'})
                    }else{
                       
                    } 
                })
                $('.travelPeoplesList').eq(i).on('touchmove',function(e){
                    movex=e.originalEvent.changedTouches[0].pageX;
                    disx=startx-movex;
                    if(disx>0&&disx/100>1.42/2){
                        $(this).find('.travelPeoplesList_con').css({'transform':'translateX(-1.42rem)','transition': 'all .3s'})
                    }
                   
                })
                
            }
           
    },
    methods:{
        open:function(picker){
             
        },
        handleChange:function(){

        },
        //选择初始时间
        startTime:function(picker){
            this.$refs[picker].open();
    //         this.$picker.show({
    //             type:'datePicker',
    //             onOk: (date) =>{
    //                 this.startDate=date;
    //                 var date=date.split('-')
    //                 date=date[1]+'月'+date[2]+'日'
    //                 this.sT = date;
                
    //             console.log(date)
    //             }
    //    });
        },
        //选择结束时间
        endTime:function(picker){
            
            // if(this.sT){
            //    this.$refs[picker].open(); 
            // }else{
                
            // }
    //         this.$picker.show({
    //             type:'datePicker',
    //             onOk: (date) =>{
    //                 if(this.startDate){//如果初始时间存在
    //                      this.endDate=date;
    //                     var date=date.split('-');
    //                     date=date[1]+'月'+date[2]+'日';
    //                     this.eT = date;
    //                     this.rexTime(this.startDate,this.endDate)   
    //                 }else{
    //                       this.$message({message:'初始时间未填，请先填写初始时间',type:'warning'});
    //                 }
    //             }
    //    });
        },
        //选择初始日期
        selectDate:function(value){
            console.log(value.toUTCString())
            var year=value.getFullYear();
            var month=value.getMonth()+1;
            var day=value.getDate()
            this.sT=month+'月'+day+'日'
            console.log(year,month,day)
        },
        //选择结束时间
        selectDateEnd:function(value){
            console.log(value)
        },
        //出发地
        startP:function(value){
            
             this.cityState=value;
           this.cityShow=true;
          
        },
        //slideStart
        onSlideChangeStart:function(e){
            console.log(e)
            console.log(4568764)
        },
        onSlideChangeEnd:function(e){
            console.log(e)
        },
        //打开酒店类型
        choosehotle:function(){
            console.log(this.hotelTypeSel)
            $(".hotelChoose").show().removeClass('animated slideOutDown').addClass('animated slideInUp')
        },
        //关闭酒店类型
        botHidden:function(){
            $(".hotelChoose").removeClass('animated slideInUp').addClass('animated slideOutDown').animate(function(){
                setTimeout(function(){
                    $(this).hide()
                },200)
            })
        },
        //选择酒店类型
        getHotelType:function(a,b,c){
            console.log(a,b,c)
            $(".hotelChoose").removeClass('animated slideInUp').addClass('animated slideOutDown').animate(function(){
                setTimeout(function(){
                    $(this).hide()
                },200)
            })
            this.hotelTypeSel=b+"("+c+")";
            this.hotelType=a;
        },
        //打开交通方式
        gettraffic:function(){
            $(".traffic").show().removeClass('animated slideOutDown').addClass('animated slideInUp')
        },
        //关闭交通方式
        choosetraffic:function(){
             $(".traffic").removeClass('animated slideInUp').addClass('animated slideOutDown').animate("",function () {
                 setTimeout(function(){
                    $(this).hide()
                 },200)
               })
        },
        //选择交通方式
        trafficSel:function(a,b){
            console.log(a,b)
              $(".traffic").removeClass('animated slideInUp').addClass('animated slideOutDown').animate("",function () {
                 setTimeout(function(){
                    $(this).hide()
                 },200)
               });
               this.travelBy=b;
               this.travelTypr=a;
        },
        //添加出差人数
        addPeople: function(){
            this.$router.push('/addPeople')
        },
         getWay:function(url,that,type){
         $.ajax({
               url:url.localhost+url.way,
               type:"POST",
               success:function(res){
                console.log(res)
                if(res.code==200){
                var data=res.data.list;
                data.forEach((item,index)=>{
                    if(item.businessType==0){
                        that.traffic.push(item)
                    }else if(item.businessType==1){
                         that.entryMode.push(item)
                    }
                })
                console.log(that.entryMode)
               }
               }
           })
    },
    //  rexTime:function (startTime,endTime){//验证输入时间
    //  console.log(startTime)
    //     if(startTime!=null){
    //         var st=new Date(startTime).getTime();
    //         var et=new Date(endTime).getTime();
    //             this.langTime=(et-st)/(1000*60*60*24)+1;
    //     }  
    // },
    //选择城市
    onValuesChange:function(picker,value){
        if(value[0]){
            picker.setSlotValues(1,value[0].citys)
            this.province=value[0].citysName;
            this.city=value[1].citysName;
            if(picker.getSlotValue(0)){
                var slot= picker.getSlotValue(0).citysName
                var slots=picker.getValues()
                var province=slots[0].citysName;
                var cityName=slots[1].citysName;
                this.province=province;
                this.city=cityName;
            }
        }
    },
    //关闭模板
    closePopup:function(){
        this.cityShow=false
    },
    //确定城市
    chooseCityStart:function(){
        console.log(this.cityState)
        
        if(this.cityState==0){
            if(this.province||this.city){
                this.startPlace=this.province+'-'+this.city;
            }
        }else{
            console.log(this.endProvince)
            if(this.province||this.city){
                this.endPlace=this.province+'-'+this.city;
            }
        }
        this.cityShow=false;
    }
    },  
    
   
}
</script>
<style scoped>
.apply{
    background: #f0ebeb;
    width: 100%;
    height: 100%;
    padding-top: 0.2rem;
}
.apply>div{
    margin-bottom: 0.2rem;
}
.applyTop>div,.travelPeoples>div,.transportation .transporttationType,.hotle{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 0.86rem;
    background: #fff;
    padding: 0 0.26rem 0 0.28rem;
    box-sizing: border-box;
    border-bottom:1px solid #e4e4e4;
}
.travelPeoples>.travelPeoplesList{
    padding: 0;
}
.applyTop>div>div:last-child,.applyPeople input,.travelPeoples>div>div:last-child{
    width: 67%;
    height: 100%;
    background: #fff;
    color:#666666;
}
.travelTimeSel{
    display: flex;
    align-items: center;
}
.travelAddress div{
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.travelPeoplesList{
    overflow: hidden;
}
.travelPeoples>div>div:last-child{
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.travelPeoples .travelPeoplesList>.travelPeoplesList_con{
    width: 100%;
    position: relative;
    padding: 0 0.26rem 0 0.28rem;
}
div.travelPeoplesList_con>div:first-child{
    width: 100%;
    height: 0.86rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 2;
    transition:all 0.3s;
}
div.travelPeoplesList_con>div:first-child div{
    position: relative;
    z-index: 1;
}
div.travelPeoplesList_con>.delete{
    width: 1.42rem;
    background: #e5012e;
    height: 0.86rem;
    color: #fff;
    font-size: 0.28rem;
    text-align: center;
    line-height: 0.86rem;
    position: absolute;
    right: -1.42rem;
    top: 0;
    transition:all 0.3s;
}
.chooseTransporttation{
    display: flex;
    width: 67%;
    height: 100%;
    justify-content: space-between;
    align-items: center;
}
.jtr{
    width: 0.16rem;
    height: 0.26rem;
}
.travelPeoples>div .addPeople:last-child{
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.addP{
    width: 0.38rem;
    height: 0.38rem;
}
.hotleChoose{
    width: 67%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
}
.dw-i img{
    width: 0.41rem;
    height: 0.24rem;
    margin-right: 0.22rem;
}
.dw-bf .dw-i{
    font-size: 0.28rem;
    color: #333333;
    border-bottom:1px solid #e4e4e4; 
}
.budget{
    text-align: center;
    background: #fff;
    padding-top: 0.28rem;
}
.budget h2{
    font-size: 0.28rem;
    color: #333333;
}
.budget p{
    font-size: 0.3rem;
    color: #e5012e;
    line-height: 0.46rem;
}
.trip{
    width: 100%;
    height: 2.08rem;
    font-size: 0.28rem;
    color: #333333;
    padding: 0.3rem 0.28rem;
    box-sizing: border-box;
    background: #fff;
    display: flex;
    justify-content: space-between;
}
.trip div{
    font-size: 0.28rem;
    color: #333333;
    white-space: nowrap;
}
.trip textarea{
    width: 67%;
    height: 100%;
    background: transparent;
    outline: none;
    resize: none;
    border:0;
}
.submit{
    width: 92%;
    height: 0.8rem;
    background: #e5012e;
    text-align: center;
    line-height: 0.8rem;
    margin: 0 auto;
    color: #fff;
    border-radius: 0.06rem;
    margin-top: 0.54rem;
}
.apply .bot{
    width: 100%;
    height: 100%;
    position: fixed;
    background: rgba(0,0,0,.7);
    bottom: 0;
    left: 0;
    margin-bottom: 0;
    z-index: 1;
    display: none;
}
.botCon{
   position:absolute;
   bottom:0;
   left:0;
   background:#fff;
   width:100%;
   text-align:center;
    font-size: 0.28rem;
    color: #333;
    z-index: 2;
}
.botCon h2{
    line-height: 0.84rem;
    border-bottom: 1px solid #d5d5d5;
    font-size: 0.3rem;
    color:#333;
}
.botCon li{
    line-height: 0.87rem;
    border-bottom: 1px solid #d5d5d5;
}
.botConBottom{
    bottom:0;
}
.style{
    font-size: 0.28rem;
    color: #666;
}
.width{
    width: 33%;
}
.color{
    color: #333;
}
.apply>.mint-popup{
    margin: 0;
    width: 100%;
    height: 50vw;
}
.pickerBtn{
    width: 100%;
    padding:0 0.36rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 0.8rem;
    font-size: 0.24rem;
}
</style>
