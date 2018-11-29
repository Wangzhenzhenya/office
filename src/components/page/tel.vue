<template>
  <el-table 
    :data="tableData7.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    style="width: 48%">
            <el-table-column
            label="方向"
            prop="date">
            </el-table-column>
            <el-table-column
            label="Name"
            prop="name">
            </el-table-column>
            <el-table-column
            label="Tel"
            prop="tel">
            </el-table-column>
            <el-table-column
            align="right">
            <template slot="header" slot-scope="scope">
                <el-input
                v-model="search"
                size="mini"
                placeholder="输入关键字搜索"/>
            </template>
            <template slot-scope="scope">
                <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
                <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
            </template>
            </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData7: [{
          date: 'java',
          name: '周旭波',
          tel: '110'
        }, {
          date: '美工',
          name: '周婵',
          tel: '110'
        }, {
          date: '前端',
          name: '王珍',
          tel: '110'
        }, {
          date: 'java',
          name: '张紫嫣',
          tel: '110'
        }, {
          date: 'c++',
          name: '唐宇航',
        tel: '110'
        }, {
          date: 'java',
          name: '肖彬斌',
        tel: '120'
        }],
        search: ''
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    },
  }
</script>
<style>
.el-table {
    margin: 0 auto;
    margin-top: 50px;
}
</style>
