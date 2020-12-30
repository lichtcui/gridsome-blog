// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import "element-ui/lib/theme-chalk/index.css"
import util from "./utils/util"
import Vue from "vue"
import ElementUI from "element-ui"
import App from "./App.vue"

Vue.use(ElementUI)
Vue.prototype.$util = util

export default function(Vue, { router, head, isClient }) {
	Vue.component("App", App)
}
