<template>
  <div>
    <el-card class="box-card">
      <div slot="header">
        <!-- 这里是面包屑 -->
        <my-bread>内容管理</my-bread>
      </div>
      <el-form
        :model="articleForm"
        size="small"
        ref="ruleForm"
        label-width="50px"
        class="demo-ruleForm"
      >
        <el-form-item label="状态">
          <el-radio-group v-model="articleForm.status">
            <el-radio :label="null">全部</el-radio>
            <el-radio :label="0">草稿</el-radio>
            <el-radio :label="1">待审核</el-radio>
            <el-radio :label="2">审核通过</el-radio>
            <el-radio :label="3">审核失败</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="频道">
          <el-select v-model="articleForm.channel_id" placeholder="请选择">
            <el-option
              v-for="item in articleOption"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="日期">
          <div class="block">
            <el-date-picker
              v-model="dateAry"
              type="daterange"
              range-separator="至"
              begin_pubdate="开始日期"
              end_pubdate="结束日期"
            ></el-date-picker>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">筛选</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card style=" margin-top:20px">
      <div slot="header" style="fontSize:16px">
        根据筛选条件供查询到
        <b>{{0}}</b> 条结果:
      </div>
      <el-table :data="articleData" style="width: 100%">
        <el-table-column prop="cover" label="封面" width="180"></el-table-column>
        <el-table-column prop="title" label="标题" width="180"></el-table-column>
        <el-table-column prop="status" label="标题" width="180"></el-table-column>
        <el-table-column prop="pubdate" label="发布时间"></el-table-column>
        <el-table-column label="操作"></el-table-column>
      </el-table>
     <div style="text-align:center; margin:20px 0">
        <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
     </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 筛选项数据，提交给后台
      articleForm: {
        status: null,
        channel_id: ''
      },
      // 频道下拉数据
      articleOption: [{ value: '1', label: 'js' }],
      // 日期数据
      dateAry: [],
      // 文章表格数据
      articleData: [
        {
          title: '123',
          pubdate: new Date().toLocaleDateString(),
          status: '审核'
        }
      ]
    }
  },
  created () {
    this.$http.get('/articles').then(res => {
      //   这里获取的成功之后的情况
    })
  }
}
</script>

<style scoped lang='less' >
</style>
