<template>
  <body>
  <el-input v-model="id" placeholder="请输入要查询的老师ID" class="el-input"></el-input>
  <br>
  <el-button type="primary" @click="findTeacherName(id)">查询</el-button>
  </body>
</template>

<script>
export default {
  name: "FindTeacherName",
  data() {
    return {
      id: ''
    }
  },
  methods: {
    findTeacherName(id) {
      if (id === '') {
        alert('所填信息不能为空');
      }
      else {
        axios
          .post(
            'http://localhost:8080/findteachername',
            {
              'id': id
            }
          )
          .then(
            (response) => {
              if (response.data === -1) {
                alert('没有此老师');
              }
              else {
                alert('老师名为' + response.data);
              }
            }
          )
      }
    }
  }
}
</script>

<style scoped>
.el-input {
  width: 250px;
  margin: 10px;
}
.el-button {
  margin: 10px;
}
body {
  position: absolute;
  top: 15%;
  left:50%;
  z-index: 1;
  background: rgba(255,255,255,0.3);
  border-radius: 10px;
  padding: 20px;
}
</style>