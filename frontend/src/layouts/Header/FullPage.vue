<template>
  <el-tooltip
    effect="dark"
    :content="fullButton.full ? '退出' : '全屏'"
    placement="bottom-end"
  >
    <el-button
      @click="full"
      :icon="fullButton.full ? 'el-icon-close' : 'el-icon-rank'"
      circle
    ></el-button>
  </el-tooltip>
</template>

<script>
export default {
  data() {
    return {
      fullButton: {
        full: false,
      },
    };
  },
  methods: {
    full() {
      if (!this.fullButton.full) {
        this.$util.fullScreen();
        this.fullButton.full = true;
      } else {
        this.$util.fullExit();
        this.fullButton.full = false;
      }
    },
  },
};
</script>

<style>
</style>