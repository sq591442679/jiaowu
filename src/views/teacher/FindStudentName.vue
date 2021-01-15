<template>
  <body>
  <el-input class="el-input" v-model="id" placeholder="请输入学生ID" ></el-input>
  <br>
  <el-button type="primary" @click="findStudentName(id)" class="el-button">查询对应的学生姓名</el-button>
  </body>
</template>

<script>
export default {
  name: "FindStudentName",
  data() {
    return {
      id: '',
    }
  },
  methods: {
    findStudentName(id) {
      if (id === '') {
        alert('所填信息不能为空');
      }
      else {
        axios
          .post(
            'http://localhost:8080/findstudentname',
            {
              'id': id
            }
          )
          .then(
            (response) => {
              if (response.data === -1) {
                alert('没有这个id的学生');
              }
              else {
                console.log(response.data);
                alert('学生名为' + response.data);
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
body{
  position:absolute;
  top: 15%;
  left:50%;
  z-index:1;
  background:rgba(255,255,255,0.3);
  border-radius: 10px;
  padding: 20px;
}
</style>