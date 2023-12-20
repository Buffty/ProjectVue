<template>
  <main>
    <LoginView v-if="dIsLogged"></LoginView>
    <HomeView v-else></HomeView>
  </main>
</template>

<script>
import HomeView from './views/home/HomeView.vue';
import LoginView from './views/login/LoginView.vue';

export default {
  data() {
    return {
      dUserInfo: {},
      dIsLogged: false
    }
  },
  components: {
    LoginView,
    HomeView
  },
  methods: {
    fGetInfoUser() {
      let userInfo = this.$store.getters.getInfoUser
      if(!userInfo.userName && !userInfo.password){
        this.dIsLogged = true
      }
    }
  },
  mounted () {
    this.fGetInfoUser()
    
  }
};
</script>