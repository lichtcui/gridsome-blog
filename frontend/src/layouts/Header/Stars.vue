<template>
  <div>
    <div
      v-for="(item, index) in randomIcon"
      :key="'ri' + index"
      :style="'top:' + item.top + 'px; left:' + item.left + 'px;'"
      class="icon"
    >
      <font :style="'font-size: ' + item.size + 'px;'">
        <b>♪</b>
      </font>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      randomIcon: [],
    };
  },
  mounted() {
    let width = window.innerWidth;
    for (let i = 0; i < 12; i++) {
      let temp = {};
      let left = this.$util.randomInt(10, width - 310);
      if (left > width / 2 - 150) {
        left += 300;
      }
      temp.left = left;
      temp.top = this.$util.randomInt(20, 300);
      temp.size = this.$util.randomInt(20, 40);
      this.randomIcon.push(temp);
    }
  },
};
</script>

<style>
.icon {
  position: absolute;
  z-index: 1;
}

font {
  color: #fff;
}
</style>