<template>
  <el-container class="my-container">
    <el-aside width="200px">
      <div class="logo"></div>
      <el-menu
        default-active="1-4-1"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        text-color="#fff"
        active-text-color="#FFD04B"
        background-color="#002033"
      >
        <el-menu-item index="1">
          <i class="el-icon-s-home"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-document"></i>
          <span slot="title">内容管理</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-picture"></i>
          <span slot="title">素材管理</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-s-promotion"></i>
          <span slot="title">发布文章</span>
        </el-menu-item>
        <el-menu-item index="5">
          <i class="el-icon-chat-dot-round"></i>
          <span slot="title">评论管理</span>
        </el-menu-item>
        <el-menu-item index="6">
          <i class="el-icon-present"></i>
          <span slot="title">粉丝管理</span>
        </el-menu-item>
        <el-menu-item index="7">
          <i class="el-icon-setting"></i>
          <span slot="title">个人设置</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <i class="el-icon-s-fold"></i>
        <span>江苏传智播客科技教育有限公司</span>
        <el-dropdown>
          <span class="el-dropdown-link">
            <img src="../../assets/images/avatar.jpg" />
            亲爱的刘老弟
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人设置</el-dropdown-item>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      isCollapse: false
    }
  }
}
</script>

<style scoped lang='less' >
.my-container {
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  right: 0;
  .el-aside {
    display: block;
    height: 100%;
    background-color: #002033;
    .logo {
      width: 200px;
      height: 60px;
      background: #002244 url(../../assets/images/logo_admin.png) no-repeat
        center/120px auto;
    }
    .el-menu {
      border-right: none;
    }
  }
  //   头部
  .el-header {
    height: 60px;
    line-height: 60px;
    i {
      font-size: 24px;
      vertical-align: middle;
      margin-right: 10px;
    }
    span {
      font-size: 16px;
      vertical-align: middle;
    }
    .el-dropdown {
      float: right;
      span {
        font-size: 14px;
        font-weight: bold;
        img {
          vertical-align: middle;
          width: 36px;
          border-radius: 50%;
        }
      }
    }
  }
}
</style>
