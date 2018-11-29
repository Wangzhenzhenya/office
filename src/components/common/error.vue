<template>
    <div >
       <p :style='msgclass'>{{msg}}<i class="el-icon-loading"></i></p> 
        <img src="@/assets/carouselImg/error2.jpg" alt="没有" title='嘤嘤嘤，没有找到页面哦~'>
    </div>

</template>

<script>
export default {
    name:'error',
    data(){
        return {
            msg:'404.Not found',
            msgclass:{
                color:'red',
                fontSize:'2em',
                marginTop:'100px',
                fontFamily:'YouYuan',
                marginBottom:'50px'
            }
        }
    }
}
</script>

<style>

</style>
