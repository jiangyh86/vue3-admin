<template>
  <!-- 一级menu菜单 -->
  <!-- <el-menu
    :uniqueOpened="true"
    default-active="2"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"

         :uniqueOpened="true"
    default-active="2"
    background-color="#304156"
    text-color="#fff"

        :default-active="activeMenu"
    :background-color="$store.getters.cssVar.menuBg"
    :text-color="$store.getters.cssVar.menuText"
    :active-text-color="$store.getters.cssVar.menuActiveText"
  > -->
  <el-menu

    default-active="2"
    background-color="#304156"
    text-color="#fff"
    :active-text-color="$store.getters.cssVar.menuActiveText"
    :unique-opened="true"
    :collapse="!$store.getters.sidebarOpened"
    router
  >
    <sidebar-item v-for="item in routes" :key="item.path" :route="item"></sidebar-item>
  </el-menu>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import SidebarItem from './SidebarItem.vue'
import { computed } from 'vue'
import { filterRouters, generateMenus } from '@/utils/route'

const router = useRouter()
const routes = computed(() => {
  const filterRoutes = filterRouters(router.getRoutes())
  return generateMenus(filterRoutes)
})
// console.log(JSON.stringify(routes.value))

// 计算高亮menu的方法
const route = useRoute()
const activeMenu = computed(() => {
  const { path } = route
  return path
})
</script>

<style></style>
