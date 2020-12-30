<template>
  <div>
    <el-card
      shadow="never"
      style="min-height: 400px; margin-bottom: 20px; padding: 0px 0px 20px 0px"
    >
      <el-tabs v-model="activeTab" type="card" @tab-click="onSelect">
        <el-tab-pane
          :label="'粉丝 ' + $page.followers.totalCount"
          name="followers"
          style="padding: 5px"
        >
          <div v-loading="followers.loading">
            <div v-if="$page.followers.edges.length">
              <el-row style="min-height: 200px">
                <el-col
                  :span="8"
                  v-for="(item, index) in $page.followers.edges"
                  :key="'followers' + index"
                  style="padding: 10px"
                >
                  <el-card
                    shadow="hover"
                    style="font-size: 13px; color: #606266; line-height: 20px"
                  >
                    <i class="el-icon-star-off"></i>&emsp;
                    <a
                      @click="$router.push(`/user/social/details/${item.node.name}`)"
                      style="text-decoration: none; cursor: pointer"
                      >{{ item.node.name }}</a
                    >
                    <br />
                    <i class="el-icon-message"></i>&emsp;
                    <a
                      :href="item.node.htmlUrl"
                      target="_blank"
                      style="text-decoration: none; cursor: pointer"
                      >TA的主页</a
                    >
                    <br />
                    <img
                      :src="item.node.avatarUrl"
                      style="width: 100%; border-radius: 5px; margin-top: 5px"
                    />
                  </el-card>
                </el-col>
              </el-row>
              <div style="text-align: center; margin-top: 10px">
                <el-pagination
                  @current-change="onSelect"
                  background
                  layout="prev, pager, next"
                  :current-page.sync="$page.followers.pageInfo.currentPage"
                  :page-size="$page.followers.pageInfo.perPage"
                  :total="$page.followers.pageInfo.totalItems"
                >
                </el-pagination>
              </div>
            </div>
            <div
              style="
                min-height: 300px;
                margin-bottom: 20px;
                padding: 20px 0px 20px 0px;
                text-align: center;
              "
              v-else
            >
              <font style="font-size: 30px; color: #dddddd">
                <b>(￢_￢) 没有一个粉丝</b>
              </font>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane
          :label="'关注 ' + $page.followings.totalCount"
          name="following"
          style="padding: 5px"
        >
          <div v-loading="following.loading">
            <div v-if="$page.followings.edges.length">
              <el-row style="min-height: 200px">
                <el-col
                  :span="8"
                  v-for="(item, index) in $page.followings.edges"
                  :key="'following' + index"
                  style="padding: 10px"
                >
                  <el-card
                    shadow="hover"
                    style="font-size: 13px; color: #606266; line-height: 20px"
                  >
                    <i class="el-icon-star-off"></i>&emsp;
                    <a
                      @click="$router.push(`/user/social/details/${item.node.name}`)"
                      style="text-decoration: none; cursor: pointer"
                      >{{ item.node.name }}</a
                    >
                    <br />
                    <i class="el-icon-message"></i>&emsp;
                    <a
                      :href="item.node.htmlUrl"
                      target="_blank"
                      style="text-decoration: none; cursor: pointer"
                      >TA的主页</a
                    >
                    <br />
                    <img
                      :src="item.node.avatarUrl"
                      style="width: 100%; border-radius: 5px; margin-top: 5px"
                    />
                  </el-card>
                </el-col>
              </el-row>
              <div style="text-align: center; margin-top: 10px">
                <el-pagination
                  @current-change="onSelect"
                  background
                  layout="prev, pager, next"
                  :current-page.sync="$page.followings.pageInfo.currentPage"
                  :page-size="$page.followings.pageInfo.perPage"
                  :total="$page.followings.pageInfo.totalItems"
                >
                </el-pagination>
              </div>
            </div>
            <div
              style="
                min-height: 300px;
                margin-bottom: 20px;
                padding: 20px 0px 20px 0px;
                text-align: center;
              "
              v-else
            >
              <font style="font-size: 30px; color: #dddddd">
                <b>(￢_￢) 还没有关注一个人</b>
              </font>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<page-query>
query {
  followers: allStrapiFollower {
    totalCount
    pageInfo {
      perPage
      currentPage
      totalPages
      totalItems
    }
    edges {
      node{
        id
        name
        htmlUrl
        avatarUrl
      }
    }
  }

  followings: allStrapiFollowing {
    totalCount
    pageInfo {
      perPage
      currentPage
      totalPages
      totalItems
    }
    edges {
      node{
        id
        name
        htmlUrl
        avatarUrl
      }
    }
  }
}
</page-query>

<script>
export default {
  data() {
    return {
      activeTab: "followers",
      followers: {
        loading: false,
      },
      following: {
        query: {
          page: 1,
          pageSize: 9,
          pageNumber: 1,
        },
        loading: false,
        list: [],
      },
    };
  },
  mounted() {
    this.onSelect();
  },
  methods: {
    onSelect() {
      switch (this.activeTab) {
        case "followers":
          this.listFollowers();
          break;
        case "following":
          this.listFollowing();
          break;
        default:
          break;
      }
    },
    listFollowers() {},
    listFollowing() {},
  },
};
</script>