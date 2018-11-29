<template>
  <el-container >
     
      
          <leftview></leftview>
          <router-view></router-view>

    </el-container>
</template>

<script>
    import leftview from '@/components/common/leftview'
    export default {
        name:'office',
        components:{
            leftview
            },
        data(){
            return { 
                students:[{
                    name:'王珍',
                    stuId:1
                    },
                    {
                        name:'周婵',
                        stuId:2
                    },
                    {
                        name:'周旭波',
                        stuId:3
                    },
                    {
                        name:'唐宇航',
                        stuId:4
                    },{
                        name:'张紫嫣',
                        stuId:5
                    }
                ]
            }
        }      
    }
</script>

<style scoped>
</style>

