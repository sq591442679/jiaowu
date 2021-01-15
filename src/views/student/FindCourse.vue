<template>
  <body>
  <el-input v-model="courseId" placeholder="请输入要查询的课程ID" class="el-input"></el-input>
  <br>
  <el-button type="primary" @click="findCourse(courseId)">查询</el-button>
  </body>
</template>

<script>
export default {
  name: "FindCourse",
  data() {
    return {
      courseId: ''
    }
  },
  methods: {
    findCourse(courseId) {
      if (courseId === '') {
        alert('所填信息不能为空');
      }
      else {
        axios
          .post(
            'http://localhost:8080/findcourse',
            {
              'courseid': courseId
            }
          )
          .then(
            (response) => {
              console.log(response.data);
              if (response.data.length === 0) {
                alert('没有此课程');
              }
              else {
                alert('课程名为' + response.data[0] + ', 任课老师名为' + response.data[1]);
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