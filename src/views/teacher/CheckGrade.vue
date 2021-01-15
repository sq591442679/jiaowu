<template>
<!--  查询成绩-->
  <body>
  <div v-show="inputShow" class="myInput">
    <el-input class="el-input" v-model="courseId" placeholder="请输入要导出成绩单的课程ID" ></el-input>
    <br><br>
    <el-button type="primary" @click="checkStudentGrade(courseId)">导出成绩单</el-button>
  </div>
  <div v-show="tableShow" class="myTable">
    <el-col :span="30">
      <el-table :data="tableData" style="border-radius: 10px;">
        <el-table-column fixed prop="courseid" label="课程号" width="150px" align="center"></el-table-column>
        <el-table-column fixed prop="id" label="学号" width="150px" align="center"></el-table-column>
        <el-table-column fixed prop="grade" label="成绩" width="150px" align="center"></el-table-column>
      </el-table>
    </el-col>
  </div>
  </body>
</template>

<script>
export default {
  name: "CheckGrade",
  data() {
    return {
      courseId: '',
      inputShow: true,
      tableShow: false,
      tableData: [{}]
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
            'http://localhost:8080/checkgrade',
            {
              'courseid': courseId
            }
          )
          .then(
            (response) => {
              if (response.data === -1) {
                alert('没有成绩！');
              }
              else {
                this.tableData = response.data;
                console.log(response.data);
                this.inputShow = false;
                this.tableShow = true;
              }
            }
          )
      }
    }
  }
}
</script>

<style scoped>
  .myInput {
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
  }
  .myTable {
    position:absolute;
    top: 15%;
    left:50%;
    z-index:1;
    background:rgba(255,255,255,0.3);
    border-radius: 10px;
    padding: 20px;
  }
  body {
    position:absolute;
    top: 15%;
    left:50%;
    z-index:1;
    padding: 20px;
  }
</style>