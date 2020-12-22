<template>
  <div class="task-list__column column">
    <div
      class="column__header column-title"
      :class="{ 'column-title--wide': !isGrid }"
      :style="initTitleStyleObj"
    >
      <input
        type="text"
        class="column-title__text"
        v-model="columnTitle"
        ref="titleText"
        @keyup.enter="titleTextBlur"
        :class="{
          'column-title__text--active': isTitleEditable,
        }"
        :tabindex="!isTitleEditable ? '-1' : '0'"
      />
      <button
        @click="deleteColumn"
        class="column__delete-btn"
        :class="{
          'column__delete-btn--show': isTitleEditable,
        }"
      >
        &times;
      </button>
      <button
        @click="editTitleText"
        class="column__edit-btn"
        :class="{
          'column__edit-btn--active': isTitleEditable,
        }"
        title="Редактировать колонку"
      ></button>
    </div>

    <draggable
      class="column__wrapper"
      :class="{ 'column__wrapper--wide': !isGrid }"
      group="tasks"
      :list="column.tasks"
      @add="updateColumnTasks"
      @remove="updateColumnTasks"
      @update="updateColumnTasks"
    >
      <Task
        v-for="task in column.tasks"
        :key="task.id"
        :colId="column.id"
        :id="task.id"
        ref="taskItem"
      />
    </draggable>

    <div class="column__add-task-btn-wrapper">
      <button
        class="column__add-task-btn"
        title="Добавить задачу"
        @click="addTask"
      ></button>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import Task from '@/components/Task'
export default {
  name: 'TaskListColumn',
  components: { Task, draggable },

  props: ['column'],

  data: () => ({
    initTitleStyleObj: {
      borderLeftColor: 'transparent',
    },
    isTitleEditable: false,
    isTaskDragging: false,
  }),

  methods: {
    editTitleText() {
      this.isTitleEditable = !this.isTitleEditable

      if (this.isTitleEditable) {
        this.$refs.titleText.focus()

        const disableEditHandler = ({ target }) => {
          if (!target.closest('.column-title')) {
            this.isTitleEditable = false
            document.removeEventListener('click', disableEditHandler)
          }
        }
        document.addEventListener('click', disableEditHandler)
      }
    },

    deleteColumn() {
      if (confirm('Удалить колонку?')) {
        this.$store.dispatch('deleteColumn', this.column.id)
      }
    },

    titleTextBlur() {
      this.$refs.titleText.blur()
      this.isTitleEditable = false
    },

    addTask() {
      const newTask = {
        colId: this.column.id,
        id: Date.now(),
        category: this.columnTitle,
        text: '',
      }
      this.$store.dispatch('createTask', newTask)
      setTimeout(() => {
        this.$refs.taskItem &&
          this.$refs.taskItem[this.$refs.taskItem.length - 1].focusCategory()
      }, 0)
    },

    updateColumnTasks() {
      this.$store.dispatch('updateColumnTasks', this.column)
    },
  },

  computed: {
    columnTitle: {
      get() {
        return (
          this.$store.getters.columnTitleById(this.column.id) ||
          this.column.title
        )
      },
      set(title) {
        const colData = {
          id: this.column.id,
          title,
        }
        this.$store.dispatch('setColumnTitle', colData)
      },
    },

    isGrid() {
      return this.$store.getters.isGrid
    },
  },

  mounted() {
    if (this.$store.getters.isNewColAdded) {
      this.$refs.titleText.focus()
      this.$store.dispatch('setNewColFlag', false)
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../scss/_vars.scss';

.column {
  $column: &;

  // .column__wrapper--wide
  &__wrapper--wide {
    margin-right: 0;
  }

  // .column__header
  &__header {
    margin-bottom: 15px;
    background-color: yellow;
    border-radius: 5px;
    box-shadow: 1px 1px 6px rgba(37, 34, 55, 0.4);
  }

  // .column-title
  &-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 300px;
    padding: 8px 12px 7px 20px;
    border-left-width: 5px;
    border-left-style: solid;

    &:hover {
      #{$column}__delete-btn {
        opacity: 0.5;
        transform: translateX(0);
      }
    }

    // .column-title--wide
    &--wide {
      max-width: none;
    }
  }

  // .column-title__text
  &-title__text {
    flex: 1;
    background: transparent;
    border: none;
    border-bottom: 2px solid transparent;
    color: $colorPurple;
    font-weight: 600;
    font-size: 1.6rem;
    line-height: 1.9rem;
    pointer-events: none;
    cursor: text;

    &:focus {
      border-bottom-color: $colorPurple;
      outline: none;
    }

    // .column-title__text--active
    &--active {
      pointer-events: all;
    }
  }

  // .column__delete-btn
  &__delete-btn {
    display: block;
    width: 18px;
    height: 18px;
    margin-right: 15px;
    margin-left: 10px;
    padding: 0;
    border-radius: 50%;
    border: none;
    background-color: red;
    font-size: 16px;
    line-height: 16px;
    opacity: 0;
    cursor: pointer;
    transform: translateX(10px);
    transition: opacity 0.1s linear, transform 0.1s linear;

    &:hover {
      background-color: red;
      color: white;
      opacity: 1 !important;
      transform: translateX(0);
    }

    // .column__delete-btn--show
    &--show {
      opacity: 0.5;
      transform: translateX(0);
    }
  }

  // .column__edit-btn
  &__edit-btn {
    width: 20px;
    height: 20px;
    border: none;
    background-color: transparent;
    background-image: url(../assets/icons/edit.svg);
    background-repeat: no-repeat;
    background-size: 100%;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }

    &:focus {
      opacity: 1;
      outline: none;
    }

    // .column__edit-btn--active
    &--active {
      opacity: 1;
    }
  }

  // .column__add-task-btn-wrapper
  &__add-task-btn-wrapper {
    text-align: center;
  }

  // .column__add-task-btn
  &__add-task-btn {
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
