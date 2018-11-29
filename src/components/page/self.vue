<template>
    <div class='contain'>
        <div class="head">
            <div class="head-img">
                <el-button icon="el-icon-edit" style="    position: absolute;
    right: 8px;
    bottom: 9px;
    padding: 6px 0px;
    font-size: 0.6em;
    width: 68px;
    text-align: center;">编辑资料</el-button>
                <img src="@/assets/carouselImg/head.jpg" alt="无法加载" title='头像' srcset="">
            </div>
            <p>用户：{{name}}</p>
        </div>
        <div class="selfinfo">
         <table >
             <tr>
                <td class='td-title'>性别：</td>
                 <td>{{sex}}</td>
             </tr>
            <tr>
                 <td class='td-title'>年龄：</td>
                 <td><el-input-number v-model="age" style="width:98px;" controls-position="right"   :min="1" :max="200"></el-input-number></td>
             </tr>
             <tr>
                <td class='td-title'>年级：</td>
                 <td>{{grade}}</td>
             </tr>
             <tr>
                 <td class='td-title'>方向：</td>
                 <td>{{directe}}</td>
             </tr>
             <tr>
                 <td class='td-title'>手机：</td>
                 <td>{{tel}}</td>
             </tr>
             
             <tr>
                 <td class='td-title'>生日：</td>
                 <td>
                      <div class="block">
                        <el-date-picker
                        v-model="value1"
                        type="date"
                        placeholder="选择日期">
                        </el-date-picker>
                    </div>
                 </td>
             </tr>
         </table>
        </div>



    </div>
</template>

<script>
export default {
    data(){
        return{
            name:'羊羊羊',
            src:'@/assets/carouselImg/head.jpg',
            age:19,
            grade:'17软件工程三班',
            sex:'女',
            tel:12345678910,
            birth:12.29,
            signal:'数据库',
            directe:'前端',
            value1: '1998-12-29',
        }
    }
}
</script>

<style scoped>
.contain {
    width: 36%;
    margin: 0 auto;
    overflow: hidden;
    border-radius: 21px;
    margin-top: 25px;
    border: 1px solid cadetblue;
   
}
.td-title {
    font-weight: 600;
    color: #fff;
    text-shadow: 0 0 20px cadetblue;
}
.head { 
    padding-top: 36px;
    padding-bottom: 20px;
    color: #fff;
    text-shadow: 0 0 20px red;
    background-color: cadetblue;
    position: relative;
}
.head-img {
    width: 100px;
    margin: 0 auto;
    height: 100px;
}
.head-img img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
}

table {
    width: 60%;
    margin: 0 auto;
    padding-top: 10px;
}

table td {
    text-align: left;
    padding-bottom: 35px;
}
</style>
