<template>
  <div>
  <h1 class="logo-title" v-if="$store.getters.sidebarOpened">
        {{ $t('msg.test') }}
</h1>
    <div class="logo-container">
      <el-avatar
        :size="logoHeight"
        shape="square"
        src="https://wang-rich.oss-cn-hangzhou.aliyuncs.com/md/202204071504617.png"
      />
      <h1 class="logo-title" v-if="$store.getters.sidebarOpened">super-admin</h1>
    </div>
    <el-scrollbar>
      <sidebar-menu></sidebar-menu>
    </el-scrollbar>
  </div>
</template>

<script setup>
import {} from 'vue'
import SidebarMenu from './SidebarMenu'
const logoHeight = 44
</script>

<style lang="scss" scoped>
.logo-container {
  height: v-bind(logoHeight) + 'px';
  padding: 10px 0 22px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  .logo-title {
    margin-left: 10px;
    color: #fff;
    font-weight: 600;
    line-height: 50px;
    font-size: 16px;
    white-space: nowrap;
  }
}
</style>
