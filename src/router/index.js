import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from "@/views/Register";
import Login from "@/views/Login";
import Student from "@/views/Student";
import Teacher from "@/views/Teacher";
import ChangeStudentGrade from "@/views/teacher/ChangeStudentGrade";
import CheckGrade from "@/views/teacher/CheckGrade";
import DeleteCourseInformation from "@/views/teacher/DeleteCourseInformation";
import DeleteStudentGrade from "@/views/teacher/DeleteStudentGrade";
import InsertCourseInformation from "@/views/teacher/InsertCourseInformation";
import InsertStudentGrade from "@/views/teacher/InsertStudentGrade";
import FindStudentName from "@/views/teacher/FindStudentName";
import CheckStudentGrade from "@/views/student/CheckStudentGrade";
import FindCourse from "@/views/student/FindCourse";
import FindTeacherName from "@/views/student/FindTeacherName";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: Login
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/teacher',
    name: 'Teacher',
    component: Teacher,
    redirect: '/insertcourseinformation',
    children: [
      {
        path: '/insertcourseinformation',
        name: '录入课程信息',
        component: InsertCourseInformation,
      },
      {
        path: '/deletecourseinformation',
        name: '删除课程信息',
        component: DeleteCourseInformation,
      },
      {
        path: '/insertstudentgrade',
        name: '录入学生成绩',
        component: InsertStudentGrade,
      },
      {
        path: '/changestudentgrade',
        name: '更改学生成绩',
        component: ChangeStudentGrade,
      },
      {
        path: '/deletestudentgrade',
        name: '删除学生成绩',
        component: DeleteStudentGrade,
      },
      {
        path: '/checkgrade',
        name: '导出成绩单',
        component: CheckGrade,
      },
      {
        path: '/findstudentname',
        name: '查询学生姓名',
        component: FindStudentName
      }
    ]
  },
  {
    path: '/student',
    name: 'Student',
    component: Student,
    redirect: '/checkstudentgrade',
    children: [
      {
        path: '/checkstudentgrade',
        name: '查询成绩',
        component: CheckStudentGrade
      },
      {
        path: '/findcourse',
        name: '查询课程',
        component: FindCourse
      },
      {
        path: '/findtachername',
        name: '查询老师姓名',
        component: FindTeacherName
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
