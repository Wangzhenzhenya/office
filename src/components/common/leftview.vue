<template>
<div>


    <el-tabs class='tableone' type='border-card'>
        <el-tab-pane label='早到榜'>
            <el-tag>王珍</el-tag>
            <el-tag type="success">张紫嫣</el-tag>
            <el-tag type="info">周婵</el-tag>
            <el-tag type="warning">周旭波</el-tag>
            <el-tag type="danger">唐宇航</el-tag>
        </el-tab-pane>
        <el-tab-pane label="迟到榜">
            <el-tag type="danger">王珍</el-tag>
            <el-tag type="danger">周婵</el-tag>
        </el-tab-pane>
        <el-tab-pane label='打卡'><p class='work'>
      {{time}} <el-button class='punch' @click="stopInterval">今日打卡</el-button>
    </p></el-tab-pane>
        <el-tab-pane label='今日工作'>加油吧，孩子，我真的不知道写什么了</el-tab-pane>
    </el-tabs>
    
    
   
</div>
</template>
<script>
export default {
    name:'leftview',
    data() {
      return {
        isCollapse: true,
        endTime: '',
        time:''
      };
    },
    mounted:function() {
        this.startTime();
        },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      startTime(){
          this.endTime=setInterval(()=>{
            var today=new Date();
            var h=today.getHours();
            var m=today.getMinutes();
            var s=today.getSeconds();
            m=this.checkTime(m);
            s=this.checkTime(s);
            this.time=h + ":" +m +":"+ s;
            },500)
      },
      stopInterval(){
        //   clearInterval(this.endTime);
          this.$message({
                message:this.time+'打卡成功',
                type:'success'
                });
      },
      checkTime(i)
        {
        if (i<10) 
        {i="0" + i}
        return i
        }
    }
  }
</script>

<style>
.tableone {
        /* margin: 10px 0px 50px 0; */
        height: auto;
        margin: 0 auto;
        width: 48%;
        margin-top: 10px;
        margin-bottom: 12px;
}
</style>
