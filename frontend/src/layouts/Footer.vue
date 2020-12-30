<template>
  <div class="footer">
    <div>
      © 2018 GitHub-Laziji&emsp;&emsp;
      <a href="https://github.com/GitHub-Laziji" target="_blank">Profile</a
      >&emsp;&emsp;
      <a href="https://github.com/GitHub-Laziji/vblog" target="_blank">VBlog</a>
    </div>

    <div class="mid">
      <i class="el-icon-location-outline"></i>
    </div>

    <div class="right">
      <a href="https://developer.github.com" target="_blank">GitHub-API</a
      >&emsp;&emsp;
      <a href="https://cn.vuejs.org/" target="_blank">Vue.js</a>&emsp;&emsp;
      <a href="http://element.eleme.io/" target="_blank">Element</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.footer {
  display: grid;
  grid-template-columns: 5fr 2fr 5fr;
  border-top: 1px #e1e4e8 solid;
  padding: 45px 0px 45px 0px;
}

.mid {
  text-align: center;
  font-size: 18px;
}

.right {
  text-align: right;
}
</style>