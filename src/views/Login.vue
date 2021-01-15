<template>
  <body>
  <div class="background"> </div>
  <br><br><br><br>
  <div id="container" class="front">
    <h1>欢迎登录</h1>
    <el-input v-model="username" placeholder="username" style="width: 250px"></el-input>
    <br>
    <br>
    <el-input v-model="password" placeholder="password" show-password style="width: 250px"></el-input>
    <br>
    <br>
    <el-button v-on:click="login(username, password)">登录</el-button>
    <el-button v-on:click="jumpToRegister" type="primary">注册</el-button>
  </div>
  </body>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login(username, password) {
      axios
        .post(
          'http://localhost:8080/login',
          {
            'username': username,
            'password': password
          }
        )
      .then(
        (response) => {
          if (response.data === 0) {
            alert('用户名不存在');
          }
          else if (response.data === -1) {
            alert('密码错误');
          }
          else if (response.data === 1) { //登录成功
            console.log("denglu" + response.data);
            axios
              .post(
                'http://localhost:8080/ifteacher',
                {
                  'username': username
                }
              )
              .then(
                (response) => {
                  console.log(response.data)
                  if (response.data === 1) { //是老师
                    alert('登录成功，点击跳转');
                    window.location = '/teacher';
                  }
                  else { //是学生
                    alert('登录成功，点击跳转');
                    window.location = '/student';
                  }
                }
              )
          }
        }
      )
    },
    jumpToRegister() {
      window.location='/register';
    }
  }
}
</script>

<style scoped>
  body{
    margin: 0;
    padding: 0;
    position: relative;
  }
  .background{
    background: url("https://images.cnblogs.com/cnblogs_com/Locksoyev/1861997/o_201012082103%E8%83%8C%E6%99%AF1.png");
    width:100%;
    height:100%;  /**宽高100%是为了图片铺满屏幕 */
    background-size: 100% 100%;
    z-index:-1;
    position: fixed;
  }
  .front{
    position:absolute;
    left:50%;
    -webkit-transform:translateX(-50%);
    transform:translateX(-50%);
    z-index:1;
    background:rgba(255,255,255,0.3);
    border-radius: 10px;
    padding: 0 20px 20px;
  }
</style>