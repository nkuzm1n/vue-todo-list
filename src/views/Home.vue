<template>
  <div class="home-page">
    <Header />
    <FilterBar />
    <LeftSidebar />
    <TaskList />
  </div>
</template>

<script>
import Header from '@/components/Header'
import LeftSidebar from '@/components/LeftSidebar'
import FilterBar from '@/components/FilterBar'
import TaskList from '@/components/TaskList'

export default {
  name: 'Home',
  components: { TaskList, FilterBar, LeftSidebar, Header },
}
</script>

<style lang="scss" scoped>
@import '../scss/_vars.scss';
.home-page {
  min-height: 100vh;
  padding-top: calc(#{$headerHeight} + #{$filterBarHeight});
  padding-left: $leftSidebarWidth;
}
</style>
