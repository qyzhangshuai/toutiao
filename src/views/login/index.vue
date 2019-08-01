<template>
  <div class="loginbox">
    <el-card class="box-card">
      <img src="../../assets/images/logo_index.png" alt />
    </el-card>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang='less'>
.loginbox {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url(../../assets/images/login_bg.jpg) no-repeat center/cover;

  .box-card {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%);
    width: 300px;
    height: 300px;
    text-align: center;
    img {
      width: 200px;
    }
  }
}
</style>
