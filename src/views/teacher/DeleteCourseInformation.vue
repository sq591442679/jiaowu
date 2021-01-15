<template>
<!--  删除课程信息-->
  <body>
  <div class="front">
    <br>
    <el-input v-model="courseId" placeholder="请输入要删除的课程ID" class="el-input"></el-input>
    <br><br>
    <el-button type="primary" @click="deleteCourseInformation(courseId)">删除课程信息</el-button>
  </div>
  </body>
</template>

<script>
export default {
  name: "DeleteCourseInformation",
  data() {
    return {
      courseId: ''
    }
  },
  methods: {
    deleteCourseInformation(courseId) {
      if (courseId === '') {
        alert('所填信息不能为空');
      }
      else {
        axios
          .post(
            'http://localhost:8080/deletecourseinformation',
            {
              'courseid': courseId
            }
          )
          .then(
            (response) => {
              if (response.data === -1) {
                alert('课程不存在');
              }
              else if (response.data === 1) {
                alert('删除课程信息成功');
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
  }
  body {
    position:absolute;
    top: 15%;
    left:50%;
    z-index:1;
    background:rgba(255,255,255,0.3);
    border-radius: 10px;
    padding: 0 20px 20px;
  }
</style>