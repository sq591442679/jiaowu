<template>
<!-- 录入课程信息 -->
  <body>

  <br>
  <el-input v-model="courseName" placeholder="请输入课程名" class="el-input"></el-input>
  <br><br>
  <el-input v-model="courseId" placeholder="请输入课程ID" class="el-input"></el-input>
  <br><br>
  <el-input v-model="id" placeholder="请输入您的ID" class="el-input"></el-input>
  <br><br>
  <el-button type="primary" @click="insertCourseInformation(courseName, courseId, id)">录入课程信息</el-button>
  <br>
  </body>
</template>

<script>
export default {
  name: "InsertCourseInformation",
  data() {
    return {
      courseName: '',
      courseId: '',
      id: '',
    }
  },
  methods: {
    insertCourseInformation(courseName, courseId, id) {
      if (courseName === '' || courseId === '' || id === '') {
        alert('所填信息不能为空');
      }
      else {
        axios
          .post(
            'http://localhost:8080/insertcourseinformation',
            {
              'coursename': courseName,
              'courseid': courseId,
              'id': id
            }
          )
          .then(
            (response) => {
              if (response.data === -1) {
                alert('课程id重复');
              }
              else if (response.data === 0) {
                alert('教师id不存在');
              }
              else if (response.data === 1) {
                alert('录入课程信息成功')
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
    padding: 0 20px 20px;
  }
  .el-input {
    width: 250px;
  }
</style>