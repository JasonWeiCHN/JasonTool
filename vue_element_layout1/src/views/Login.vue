<template>
  <div class="login">
    <div>
      <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'"></code>
        below
      </p>
      <el-button @click="login">登录</el-button>
      <p>{{this.$store.state.login.hello}}</p>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
  import request from '@/utils/request.js';

  @Component({
    components: {
      HelloWorld,
    },
  })
  export default class Login extends Vue {
    mounted(){
      console.log(this.$store.state)
    }

    login(){
      // console.log("login");

      // 直接请求 - success
      // request(`/v1/login/captchaid`);

      // 分发测试 - success
      // this.$store.dispatch("login/test")

      // login测试 - success
      // this.$store.dispatch("login/login",{aaa:"aaaa",bbb:"bbbb",cccc:"cc"})
    }
  }
</script>
