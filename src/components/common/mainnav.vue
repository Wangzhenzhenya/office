<template>
    <div>
        <el-menu  style="border='0';"  class='el-menu-demo mainnav' mode="horizontal" >
            <el-menu-item index="1" class="home"><i class="icon iconfont icon-shouye1"></i><router-link to="/home">首页</router-link></el-menu-item>
            <el-menu-item index="2"><i class="icon iconfont icon-tongxunlu"></i><router-link to="/tel">通讯录</router-link> </el-menu-item>
            <el-submenu index='3'>
                <template slot='title'>
                    <i class="icon iconfont icon-gongzuotai"></i>工作台
                </template>
                <el-menu-item index='3-1'>职员</el-menu-item>
                <el-menu-item index='3-2'>打卡</el-menu-item>
                <el-menu-item index='3-3'>打卡</el-menu-item>
                <el-submenu index="3-4">
                    <template slot='title'>
                        查看
                    </template>
                    <el-menu-item index='3-4-1'>所有职员</el-menu-item>
                    <el-menu-item index='3-4-2'>往期记录</el-menu-item>
                    <el-menu-item index='3-4-3'>打卡</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index='4'><i class="icon iconfont icon-icon-test"></i><router-link to="/self">个人中心</router-link> </el-menu-item>
            <el-menu-item index='5'><i class="icon iconfont icon-shezhi"></i>设置</el-menu-item>
        </el-menu>
    </div>
    
    
</template>

<script>
    export default{
        
    }
</script>

<style>
.mainnav {
    width: 50%;
    float: right;
}
a {
    text-decoration: none;
}
.el-menu-item i {
    color: #909399;
    margin-right: 5px;
}
.el-submenu__title i {
    color: #909399;
    margin-right: 5px;
}

</style>

