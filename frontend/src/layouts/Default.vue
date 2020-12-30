<template>
  <div>
    <Header />
    <div class="layout">
      <div class="layout-body">
        <Menu />
        <div class="main">
          <Catalog />
          <Main />
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";
import Menu from "./Menu";
import Catalog from "./Catalog";
import Main from "./Main";

export default {
  components: {
    Header,
    Footer,
    Menu,
    Catalog,
    Main,
  },
};
</script>

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
}

.layout {
  max-width: 67rem;
  margin: 0 auto;
  font-size: 12px;
  color: #586069;
}

.layout-body {
  width: 64rem;
  margin: 0 auto;
}

.main {
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 2rem;
}
</style>
