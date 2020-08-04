import Vue from "vue";
import Vuetify from "vuetify";
import VueRouter from "vue-router";

global.beforeAll(() => {
  Vue.use(Vuetify);
  Vue.use(VueRouter);
});
