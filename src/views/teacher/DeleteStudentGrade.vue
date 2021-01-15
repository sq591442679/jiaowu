<template>
<!--  删除学生成绩-->
  <body>
  <el-input class="el-input" v-model="id" placeholder="请输入学生ID"></el-input>
  <br>
  <el-input class="el-input" v-model="courseId" placeholder="请输入课程ID"></el-input>
  <br>
  <el-button type="primary" @click="deleteStudentGrade(id, courseId)" class="el-button">删除学生成绩</el-button>
  </body>
</template>

<script>
export default {
  name: "DeleteStudentGrade",
  data() {
    return {
      id: '',
      courseId: ''
    }
  },
  methods: {
    deleteStudentGrade(id, courseId) {
      if (id === '' || courseId === '') {
        alert('所填信息不能为空');
      }
      else {
        axios
          .post(
            'http://localhost:8080/deletestudentgrade',
            {
              'id': id,
              'courseid': courseId
            }
          )
          .then(
            (response) => {
              if (response.data === -1) {
                alert('成绩不存在');
              }
              else if (response.data === 1) {
                alert('删除成绩成功');
              }
            }
          )
      }
    }
  }
}
</script>

<style scoped>
body {
  position:absolute;
  top: 15%;
  left:50%;
  z-index:1;
  background:rgba(255,255,255,0.3);
  border-radius: 10px;
  padding: 20px;
}
.el-input {
  width: 250px;
  margin: 10px;
}
.el-button {
  margin: 10px;
}
</style>