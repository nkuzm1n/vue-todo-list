<template>
  <div class="task-list">
    <div class="task-list__inner" :class="{'task-list__inner--row' : !isGrid}">
      <div class="column__wrapper" v-for="col in tasksData" :key="col.id">
        <TaskListColumn :column="col" ref="column" />
      </div>

      <div class="task-list__column column">
        <div class="column__header">
          <button
            class="column__add-btn"
            title="Добавить колонку"
            @click="addColumn"
          ></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TaskListColumn from '@/components/TaskListColumn'
export default {
  name: 'TaskList',
  components: { TaskListColumn },

  methods: {
    addColumn() {
      this.$store.dispatch('createColumn')
      this.$store.dispatch('setNewColFlag', true)
    },
  },

  computed: {
    isGrid() {
      return this.$store.getters.isGrid
    },
    tasksData() {
      return this.$store.getters.tasksData
    },
  },

  mounted() {
    if (this.$store.getters.tasksData.length < 1) {
      !this.$store.getters.isNewColAdded && this.$store.dispatch('createColumn')
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../scss/_vars.scss';

.task-list {
  width: 100%;
  padding: 20px 0 0 20px;
  overflow: hidden;

  &__inner {
    display: flex;
    align-items: flex-start;
    height: 100%;
    margin-bottom: -20px;
    padding-left: 10px;
    padding-bottom: 25px;
    overflow-x: auto;

    &--row {
      flex-direction: column;
      align-items: stretch;
    }
  }
}

.column {
  // .column__wrapper
  &__wrapper {
    flex: 0 0 300px;
    min-height: 0;
    margin-right: 20px;
    padding-bottom: 20px;
  }

  &__header {
    display: flex;
    align-items: center;
    height: 37px;
  }

  &__add-btn {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    background-color: #ffffff;
    border: 2px solid transparent;
    border-radius: 50%;
    text-align: center;
    cursor: pointer;
    opacity: 0.8;
    transition: opacity 0.2s linear, background-color 0.2s linear;

    &:focus,
    &:hover {
      background-color: $colorPurple;
      outline: none;
      opacity: 0.9;

      &::before,
      &:after {
        background-color: #ffffff;
      }
    }

    &::before,
    &:after {
      position: absolute;
      content: '';
      width: 16px;
      height: 2px;
      background-color: $colorPurple;
      border-radius: 1px;
      pointer-events: none;
      transition: background-color 0.2s linear;
    }

    &::after {
      transform: rotate(90deg);
    }
  }
}
</style>
