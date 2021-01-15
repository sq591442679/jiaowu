<template>
  <body>
    <div class="background"></div>
    <br>
    <br>
    <br>
    <br>
    <div id="container" class="front">
      <h1>欢迎注册</h1>
      <form>
        <br>
        <el-input v-model="username" placeholder="username" style="width: 250px"></el-input>　
        <br>
        <br>
        <el-input v-model="password" placeholder="password" show-password style="width: 250px"></el-input>
        <br>
        <br>
        <el-radio v-model="occupation" label="student" style="width: 120px">学生</el-radio>
        <el-radio v-model="occupation" label="teacher" style="width: 120px">老师</el-radio>
        <br>
        <br>
        <el-input v-model="truename" placeholder="realName" style="width: 250px"></el-input>
        <br>
        <br>
        <el-input v-model="userId" placeholder="userId" style="width: 250px"></el-input>
        <br>
        <br>
        <el-button v-on:click="register(username, password, occupation, truename, userId)" type="primary">注册</el-button>
        <br>
        <br>
      </form>
    </div>
  </body>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
     username: '',
     password: '',
     truename: '',
     userId: '',
     occupation: '',
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    register(username, password, occupation, realName, userId) {
      if (username === '' || password === '' || occupation === '' || realName === '' || userId === '') {
        alert('请完整填写信息');
      }
      else {
        axios
          .post(
            'http://localhost:8080/regist',
            {
              'username': username,
              'password': password,
              'occupation': occupation,
              'truename': realName,
              'id': userId
            }
          )
          .then(
            (response) => {
              console.log(response.data);
              if (response.data === 0) {
                alert('id已被使用');
              }
              else if (response.data === -1) {
                alert('用户名已被使用');
              }
              else if (response.data === 1) {
                if (occupation === 'teacher') {
                  alert('注册成功，点击确定跳转到您的页面');
                  window.location='/teacher';
                }
                else if (occupation === 'student') {
                  alert('注册成功，点击确定跳转到您的页面');
                  window.location='/student';
                }
              }
            }
          )
      }
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