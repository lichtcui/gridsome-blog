<template>
  <div>
    <el-card shadow="never">
      <el-menu :default-active="active" @select="onSelect">
        <el-menu-item index="/user/new/main">Trends</el-menu-item>
        <el-menu-item index="/user/social/main">Society</el-menu-item>
        <el-menu-item index="/user/blog/main">Blog list</el-menu-item>
      </el-menu>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: "",
    };
  },
  mounted() {
    const active = this.$route.path.split("/").join("/");
    this.active = active;
  },
  methods: {
    onSelect(index) {
      this.$router.push(index);
    },
  },
};
</script>

<style>
</style>