<template>
  <div class="player-wrapper">
    <el-popover placement="top" trigger="hover">
      <div style="text-align: center">
        <el-progress
          color="#67C23A"
          type="circle"
          :percentage="volume"
        ></el-progress>
        <br />
        <el-button
          @click="changeVolume(-10)"
          icon="el-icon-minus"
          circle
        ></el-button>
        <el-button
          @click="changeVolume(10)"
          icon="el-icon-plus"
          circle
        ></el-button>
      </div>

      <el-button
        @click="play"
        id="play"
        slot="reference"
        :icon="isPlay ? 'el-icon-refresh' : 'el-icon-caret-right'"
        circle
      ></el-button>
    </el-popover>

    <el-slider
      @change="changeTime"
      :format-tooltip="$util.formatTime"
      :max="maxTime"
      v-model="currentTime"
      style="width: 100%"
    ></el-slider>

    <div class="player-time">
      {{ $util.formatTime(currentTime) }}/{{ $util.formatTime(maxTime) }}
    </div>

    <audio ref="music" loop autoplay v-if="audioAutoPlay">
      <source :src="audioUrl" type="audio/mpeg" />
    </audio>
    <audio ref="music" loop v-else>
      <source :src="audioUrl" type="audio/mpeg" />
    </audio>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isPlay: false,
      currentTime: 0,
      maxTime: 0,
      volume: 100,
    };
  },
  methods: {
    changeVolume() {},
    play() {},
    changeTime() {},
    audioAutoPlay() {},
    audioUrl() {},
  },
};
</script>

<style>
.player-wrapper {
  display: grid;
  grid-template-columns: 2fr 7fr 3fr;
  align-items: center;
}

.player-time {
  color: #909399;
  font-size: 13px;
  padding-left: 9px;
}
</style>