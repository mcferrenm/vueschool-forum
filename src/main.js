// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import firebase from 'firebase'
import App from './App'
import router from './router'
import store from '@/store'
import AppDate from '@/components/AppDate'

Vue.component('AppDate', AppDate)

Vue.config.productionTip = false

// Initialize Firebase
const config = {
  apiKey: "AIzaSyAvTsPf-b_RqyhId6nXbrQnxe5g33CKuQw",
  authDomain: "vueschool-forum-b1c74.firebaseapp.com",
  databaseURL: "https://vueschool-forum-b1c74.firebaseio.com",
  projectId: "vueschool-forum-b1c74",
  storageBucket: "vueschool-forum-b1c74.appspot.com",
  messagingSenderId: "375935390324"
}
firebase.initializeApp(config)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
