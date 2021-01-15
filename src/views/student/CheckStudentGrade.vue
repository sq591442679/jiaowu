<template>
  <body>
  <el-input v-model="courseId" placeholder="请输入要查分的课程ID" class="el-input"></el-input>
  <br>
  <el-button type="primary" @click="checkStudentGrade(courseId)">查询</el-button>
  </body>
</template>

<script>
export default {
  name: "CheckStudentGrade",
  data() {
    return {
      courseId: ''
    }
  },
  methods: {
    checkStudentGrade(courseId) {
      if (courseId === '') {
        alert('所填信息不能为空');
      }
      else {
        axios
          .post(
            'http://localhost:8080/checkstudentgrade',
            {
              'courseid': courseId
            }
          )
          .then(
            (response) => {
              if (response.data === -1) {
                alert('没有成绩');
              }
              else {
                alert('您的成绩为' + response.data);
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