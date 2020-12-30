<template>
  <div>
    <section class="page-header">
      <div class="full">
        <full-page />
      </div>

      <stars />

      <h1 class="project-name">{{ blogTitle }}</h1>
      <h2 class="project-tagline">{{ blogDescribe }}</h2>

      <div class="btns">
        <a
          :href="'https://github.com/' + githubUsername"
          class="btn"
          target="_blank"
          >GitHub主页</a
        >
        <a
          href="https://github.com/GitHub-Laziji/vblog"
          class="btn"
          target="_blank"
          v-if="!mini"
          >博客源码</a
        >
      </div>
    </section>
  </div>
</template>

<script>
import FullPage from "./FullPage";
import Stars from "./Stars";

export default {
  components: {
    FullPage,
    Stars,
  },
  data() {
    return {
      blogTitle: "template title",
      blogDescribe: "template description",
      githubUsername: "licht",
      mini: false,
    };
  },
};
</script>

<style>
.page-header {
  padding: 5rem 6rem;
  color: #fff;
  text-align: center;
  background-color: #159957;
  background-image: linear-gradient(120deg, #155799, #159957);
  color: rgb(255, 255, 255);
}

.full {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 2;
}

.project-name {
  font-size: 3.25rem;
  margin: 0;
}

.project-tagline {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  font-weight: normal;
  opacity: 0.7;
}

.btns {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.7);
}

.btn {
  display: block;
  padding: 0.75rem 1rem;
  margin: 0 0.5rem;
  color: rgba(255, 255, 255, 0.7);
  background-color: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.3rem;
  transition: color 0.2s, background-color 0.2s, border-color 0.2s;
}

.btn:hover {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  background-color: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.3);
}

a:hover {
  text-decoration: underline;
}

a:active,
a:hover {
  outline: 0;
}

a {
  color: #1e6bb8;
  text-decoration: none;
}
</style>