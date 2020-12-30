<template>
  <div class="container">
    <el-menu
      @select="selectTopbar"
      :default-active="topbar.active"
      mode="horizontal"
      menu-trigger="click"
    >
      <el-submenu index="#more">
        <template slot="title">了解博主</template>
        <el-menu-item index="#githubHome">github主页</el-menu-item>
        <el-menu-item index="#blog">其他博客</el-menu-item>
      </el-submenu>
      <el-submenu index="#webSites" v-if="webSites.length > 0">
        <template slot="title">其他网站</template>
        <el-menu-item
          :index="'#webSites-' + index"
          v-for="(item, index) in webSites"
          :key="'#webSites' + index"
          >{{ item.name }}</el-menu-item
        >
      </el-submenu>
    </el-menu>

    <div class="player">
      <player />
    </div>

    <div class="author">
      <div class="author-name">
        <b>{{ githubUsername }}</b>
      </div>
      <div class="author-location">
        <i class="el-icon-location" />
        &nbsp;{{ location ? location : "未填写地址" }}
      </div>
    </div>

    <div class="avatar">
      <img v-popover:bigAvatar :src="avatarUrl" class="image" />
      <el-popover
        ref="bigAvatar"
        placement="top-start"
        :title="githubUsername"
        width="200"
        trigger="hover"
      >
        <i class="el-icon-star-on"></i>&emsp;{{ name }}
        <br />
        <i class="el-icon-location"></i>&emsp;{{ location }}
        <br />
        <img :src="avatarUrl" width="200" height="200" />
      </el-popover>
    </div>
  </div>
</template>

<script>
import Player from "./Player";
export default {
  components: { Player },
  data() {
    return {
      topbar: {
        active: "",
      },
      webSites: "",
      githubUsername: "",
      location: "",
      avatarUrl: "",
      name: "",
    };
  },
  methods: {
    selectTopbar(index) {},
  },
};
</script>

<style>
.container {
  position: relative;
  z-index: 2;
  transform: translateY(-50%);
  border: 1px solid #ebeef5;
  background-color: #fff;
  color: #303133;
  border-radius: 4px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 5fr 4fr 2fr 1fr;
}

.image {
  margin-top: 4px;
  margin-right: 10px;
  width: 52px;
  height: 52px;
  border-radius: 5px;
  border: 1px solid #ebeef5;
}

.author {
  text-align: right;
}

.author-name {
  font-size: 20px;
  color: #606266;
  margin-top: 5px;
}

.author-location {
  color: #606266;
}

.avatar {
  align-self: center;
  justify-self: center;
}

.player {
  align-self: center;
}
</style>