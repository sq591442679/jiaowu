<template>
  <body>
  <div class="background"></div>
  <div id="container" class="front">
    <el-container class="el-container" style="height: 100%">
      <el-aside width="200px" class="el-aside">
        <el-menu router :default-openeds="['/student']">
          <el-submenu
            v-for="item in $router.options.routes"
            :index="item.path"
            :key="item.path"
            v-if="item.path === '/student'"
          >
            <template slot="title" > <i class="el-icon-setting"></i>可选操作</template>
            <el-menu-item
              v-for="(child, index) in item.children"
              :index="child.path"
              :key="index"
              :class="$route.path === child.path ? 'is-active' : ''"
              @click="jumpTo(child.path)"
            >
              {{child.name}}
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
  </body>
</template>

<script>
export default {
  name: "Student",
  methods: {
    jumpTo: function (url) {
      this.$router.replace(url);
    }
  }
}
</script>

<style scoped>
.el-aside {
  display: block;
  position: relative;
  overflow-x: unset;
  opacity: 0.9;
  border-radius: 10px;
  margin-top: 10px;
}
body{
  margin: 0;
  padding: 0;
  position: relative;
}
.background{
  background: url("https://images.cnblogs.com/cnblogs_com/Locksoyev/1861997/o_201012082103%E8%83%8C%E6%99%AF1.png");
  width:100%;
  height:100%;  /**宽高100%是为了图片铺满屏幕 */
  background-size: 100% 100%;
  z-index:-1;
  position: fixed;
}
</style>