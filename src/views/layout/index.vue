<template>
  <div class="wrap">
    <el-container>
      <el-aside>
        <aside-bar></aside-bar>
      </el-aside>
    </el-container>
  </div>
</template>

<script>
import AsideBar from "./components/AsideBar.vue";
export default {
  name: "layout",
  components: { AsideBar }
};
</script>
<style lang="scss" scoped>
.wrap {
  height: 100%;
  width: 100%;
  display: flex;
}
</style>
