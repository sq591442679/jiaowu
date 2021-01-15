<template>
  <body>
  <div class="front" >
    <el-input v-model="id" placeholder="请输入学生学号" class="el-input"></el-input>
    <br><br>
    <el-input v-model="courseId" placeholder="请输入课程ID" class="el-input"></el-input>
    <br><br>
    <el-input v-model="grade" placeholder="请输入更改后的成绩" class="el-input"></el-input>
    <br><br>
    <el-button type="primary" @click="changeStudentGrade(id, courseId, grade)">更改成绩</el-button>
    <br>
  </div>
  </body>
</template>

<script>
export default {
  name: "ChangeStudentGrade",
  data() {
    return {
      id: '',
      courseId: '',
      grade: ''
    }
  },
  methods: {
    changeStudentGrade(id, courseId, grade) {
      if (id === '' || courseId === '' || grade === '') {
        alert('所填信息不能为空');
      }
      else {
        axios
          .post(
            'http://localhost:8080/changestudentgrade',
            {
              'id': id,
              'courseid': courseId,
              'grade': grade
            }
          )
          .then(
            (response) => {
              if (response.data === -1) {
                alert('成绩不存在');
              }
              else if (response.data === 1) {
                alert('更改学生成绩成功');
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
    width: 200px;
  }
  body{
    margin: 0;
    padding: 0;
    position: relative;
  }
  body {
    position:absolute;
    top: 15%;
    left:50%;
    z-index:1;
    background:rgba(255,255,255,0.3);
    border-radius: 10px;
    padding: 20px;
  }
</style>