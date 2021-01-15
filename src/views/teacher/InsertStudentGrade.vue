<template>
  <body>
    <el-input class="el-input" v-model="id" placeholder="请输入学生ID"></el-input>
    <br>
    <el-input class="el-input" v-model="courseId" placeholder="请输入课程ID"></el-input>
    <br>
    <el-input class="el-input" v-model="grade" placeholder="请输入成绩"></el-input>
    <br>
    <el-button type="primary" @click="insertStudentGrade(id, courseId, grade)" class="el-button">录入学生成绩</el-button>
  </body>
</template>

<script>
export default {
  name: "InsertStudentGrade",
  data() {
    return {
      id: '',
      courseId: '',
      grade: ''
    }
  },
  methods: {
    insertStudentGrade(id, courseId, grade) {
      if (id === '' || courseId === '' || grade === '') {
        alert('所填信息不能为空');
      }
      else if (Number(grade) < 0 || Number(grade) >= 100) {
        alert('成绩不合法');
      }
      else {
        axios
          .post(
            'http://localhost:8080/insertstudentgrade',
            {
              'id': id,
              'courseid': courseId,
              'grade': Number(grade)
            }
          )
          .then(
            (response) => {
              if (response.data === -1) {
                alert('该学生该科成绩已存在，请在侧边栏选择“更改学生成绩”');
              }
              if (response.data === -2) {
                alert('课程不存在');
              }
              else if (response.data === 0) {
                alert('学生不存在');
              }
              else if (response.data === 1) {
                alert('录入成功');
                window.location = '/insertstudentgrade'
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