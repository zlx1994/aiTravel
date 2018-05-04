<template>
    <div>
        <mt-picker :slots="slots" value-key="name" @change="onValuesChange"></mt-picker>
        <div @click="open('picker1')" size="large">日期选择</div>
         <mt-datetime-picker
    ref="picker1"
    type="date"
    v-model="pickerValue">
  </mt-datetime-picker>
        <mt-datetime-picker
      ref="picker1"
      type="date"
      v-model="value1"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      @confirm="handleChange">
    </mt-datetime-picker>
    </div>
</template>
<script>
const address = [
  {
    "code": "001",
    "name": "省份1",
    "childs": [
      {
        "code": "001-1",
        "name": "城市1",
        "childs": [
          {
            "code": "001-1-1",
            "name": "城市1县城1"
          },
          {
            "code": "001-1-2",
            "name": "城市1县城2"
          }
        ]
      },
      {
        "code": "001-2",
        "name": "城市2",
        "childs": [
          {
            "code": "001-2-1",
            "name": "城市2县城1"
          },
          {
            "code": "001-2-2",
            "name": "城市2县城2"
          }
        ]
      }
    ]
  },
  {
    "code": "002",
    "name": "省份2",
    "childs": [
      {
        "code": "002-1",
        "name": "城市3",
        "childs": [
          {
            "code": "002-1-1",
            "name": "城市3县城1"
          },
          {
            "code": "002-1-2",
            "name": "城市3县城2"
          }
        ]
      },
      {
        "code": "002-2",
        "name": "城市4",
        "childs": [
          {
            "code": "002-2-1",
            "name": "城市4县城1"
          },
          {
            "code": "002-2-2",
            "name": "城市4县城2"
          }
        ]
      }
    ]
  },
  {
    "code": "003",
    "name": "省份3",
    "childs": [
      {
        "code": "003-1",
        "name": "城市5",
        "childs": [
          {
            "code": "003-1-1",
            "name": "城市5县城1"
          },
          {
            "code": "003-1-2",
            "name": "城市5县城2"
          }
        ]
      },
      {
        "code": "003-2",
        "name": "城市6",
        "childs": [
          {
            "code": "003-2-1",
            "name": "城市6县城1"
          },
          {
            "code": "003-2-2",
            "name": "城市6县城2"
          }
        ]
      }
    ]
  },
]; 
import {Toast} from 'mint-ui'
export default {
    name: 'app',
    data () {
        return {
          pickerValue:false,
          sd:new Date('1970-01-01'),
          ed:new Date(),
          startDate: new Date('2014-1-1'),
        endDate: new Date(),
        value1:false,
            myAdress:null,
            slots: [
                {
                  flex: 1,
                  values: address,
                  defaultIndex:10,
                  className: 'slot1',
                  textAlign: 'right'
                }, {
                  divider: true,
                  content: '-',
                  className: 'slot2'
                }, {
                  flex: 1,
                  values: address[0].childs,
                  defaultIndex:0,
                  className: 'slot3',
                  textAlign: 'left'
                }, {
                  divider: true,
                  content: '-',
                  className: 'slot4'
                }, {
                  flex: 1,
                  values: address[0].childs[0].childs,
                  defaultIndex:0,
                  className: 'slot5',
                  textAlign: 'left'
                }
            ]
        }
    },
    methods: {
          onValuesChange(picker, values) {
            if(!values[0]){
               this.$nextTick(()=>{
                    if(this.myAdress){
                         // 赋默认值
                    }else{
                         picker.setValues([address[0],address[0].childs[0],address[0].childs[0].childs[0]])
                    }
               });
            }else{
               picker.setSlotValues(1, values[0].childs);
               let town = [];
               if(values[1]){
                  town = values[1].childs;
               }
               picker.setSlotValues(2,town);
            }

          },
         open(picker) {
        this.$refs[picker].open();
      },
          handleChange(value) {
        this.date1 = value.toString();
        //this.show = true;
        Toast({
          message: '已选择 ' + value.toString(),
          position: 'bottom'
        });
      },
    }
}

</script>
