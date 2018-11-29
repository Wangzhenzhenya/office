<template>
  <div id="app">
    <el-header>
        <div class="head"><mainnav></mainnav></div>
      </el-header>
  
    <transition name='fade' mode="out-in">
      <router-view></router-view>
    </transition>
      
  
    
      
  </div>
</template>

<script>
import mainnav from '@/components/common/mainnav'
import leftview from '@/components/common/leftview'
import office from '@/components/office'
export default {
  name: 'App',
  components:{
    mainnav,leftview
  },
  mounted:function() {
        var orderheight=document.body.clientHeight;
        // document.getElementById('order-list').style.height=orderheight+'px';
      }
}
</script>

<style scoped>

*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

.head {
  width: 100%;
  float: right;
  border-bottom: solid 1px #e6e6e6;
  z-index: 2;
  position: relative;
}

.el-header {
  padding: 0;
}


.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1s;
}
.fade-leave {
  opacity: 1;
}
.fade-leave-active {
  transition: opacit 1s;
}

</style>
