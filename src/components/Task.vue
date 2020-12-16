<template>
  <div 
    class="task"
    :class="{'task--wide' : !isGrid}"  
    :style="{ borderLeftColor: this.bdLeftColor }"
  >
    <div class="task__header">
      <input
        type="text"
        class="task__category"
        ref="taskCategory"
        v-model="taskCategory"
        :disabled="!isTaskEditable"
      />
      <button
        class="task__delete-btn"
        @click="deleteTask"
        :class="{
          'task__delete-btn--show': isTaskEditable,
        }"
      >
        &times;
      </button>
      <button
        class="task__edit-btn"
        @click="editTaskHandler"
        title="Редактировать задачу"
      ></button>
    </div>
    <textarea
      class="task__text"
      @input="areaAutoHeight"
      v-model="taskText"
      :disabled="!isTaskEditable"
      ref="textarea"
      rows="1"
    ></textarea>

    <!--        <div class="task__footer">-->
    <!--            <button class="task__time-btn">01:12:00</button>-->
    <!--            <button class="task__complete-btn">Завершить</button>-->
    <!--        </div>-->
  </div>
</template>

<script>
export default {
  name: 'Task',

  props: {
    colId: {
      type: Number,
      default() {
        return -1
      },
    },
    id: {
      type: Number,
      default() {
        return -1
      },
    },
    bdLeftColor: {
      type: String,
      default() {
        return 'transparent'
      },
    },
  },

  data: () => ({
    isTaskEditable: false,
  }),

  methods: {
    capitalizeText(text) {
      // if (!text || text.length < 1) {
      //   return ''
      // }
      // text = text.toString()
      // return text.charAt(0).toUpperCase() + text.slice(1)
      return text
    },

    focusCategory() {
      this.isTaskEditable = true
      const listener = ({ target }) => {
        if (this.$el !== target.closest('.task')) {
          this.isTaskEditable = false
          document.removeEventListener('click', listener)
        }
      }
      document.addEventListener('click', listener)
      setTimeout(() => this.$refs.textarea.focus(), 0)
    },

    editTaskHandler() {
      this.isTaskEditable = !this.isTaskEditable
      if (this.isTaskEditable) {
        const listener = ({ target }) => {
          if (this.$el !== target.closest('.task')) {
            this.isTaskEditable = false
            document.removeEventListener('click', listener)
          }
        }
        document.addEventListener('click', listener)

        setTimeout(() => this.$refs.textarea.focus(), 0)
      }
    },

    deleteTask() {
      if (confirm('Удалить таск?')) {
        this.$store.dispatch('deleteTask', { colId: this.colId, id: this.id })
      }
    },

    areaAutoHeight() {
      this.$refs.textarea.style.height = '1px'
      let areaScrollHeight = this.$refs.textarea.scrollHeight
      this.$refs.textarea.style.height = `${areaScrollHeight}px`
    },
  },

  computed: {
    taskCategory: {
      get() {
        const options = {
          colId: this.colId,
          id: this.id,
        }
        return this.$store.getters.taskById(options).category
      },
      set(category) {
        const options = {
          colId: this.colId,
          id: this.id,
          category,
        }
        this.$store.dispatch('updateTask', options)
      },
    },
    taskText: {
      get() {
        const params = {
          colId: this.colId,
          id: this.id,
        }
        return this.$store.getters.taskById(params).text
      },
      set(text) {
        const options = {
          colId: this.colId,
          id: this.id,
          text,
        }
        this.$store.dispatch('updateTask', options)
      },
    },
    isGrid() {
      return this.$store.getters.isGrid
    },
  },

  mounted() {
    this.areaAutoHeight()
  },
}
</script>

<style lang="scss" scoped>
@import '../scss/_vars.scss';

.task {
  $task: &;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 300px;
  min-height: 100px;
  margin-bottom: 15px;
  padding: 13px 12px 20px 21px;
  background-color: #ffffff;
  border-radius: 5px;
  border-left-width: 5px;
  border-left-style: solid;
  box-shadow: 1px 1px 6px rgba(37, 34, 55, 0.4);
  cursor: move;

  // .task--wide
  &--wide {
    width: auto;
  }

  // .task__header
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;

    &:hover {
      #{$task}__delete-btn {
        opacity: 0.5;
        transform: translateX(0);
      }
    }
  }

  // .task__category
  &__category {
    flex: 1;
    min-height: 14px;
    padding-left: 25px;
    padding-bottom: 5px;
    border: none;
    border-bottom: 1px solid transparent;
    background: transparent url(../assets/icons/bookmark.svg) no-repeat left top
      1px;
    background-size: 14px;
    color: $colorDark;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    opacity: 0.55;

    &:focus {
      border-bottom: 1px solid $colorPurple;
      outline: none;
    }

    &:disabled {
      cursor: move;
    }
  }

  // .task__delete-btn
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
      //border: 1px solid #ff0000;
      color: white;
      opacity: 1 !important;
    }

    // .task__delete-btn--show
    &--show {
      opacity: 0.5;
      transform: translateX(0);
    }
  }

  // .task__edit-btn
  &__edit-btn {
    width: 18px;
    height: 18px;
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
  }

  // .task__text
  &__text {
    min-height: 20px;
    margin: 0;
    padding: 5px 0 0;
    background-color: inherit;
    border: none;
    border-bottom: 1px solid transparent;
    color: $colorDark;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    resize: none;
    outline: none;
    appearance: none;

    &:focus {
      border: none;
      border-bottom: 2px solid $colorPurple;
      outline: none;
    }

    &:disabled {
      cursor: move;
    }
  }

  // .task__footer
  &__footer {
    flex: 1 0 41px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 14px;
    padding: 5px 18px;
    border-top: 1px solid #dddddd;
  }

  // .task__time-btn
  &__time-btn,
  &__complete-btn {
    height: 30px;
    border: none;
    background-color: transparent;
    background-repeat: no-repeat;
    background-size: 20px;
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 1.6rem;
    cursor: pointer;
  }

  // .task__time-btn
  &__time-btn {
    flex: 1 1 50%;
    padding-right: 5px;
    padding-left: 44px;
    border-right: 1px solid #dddddd;
    background-image: url(../assets/icons/play.svg);
    background-position: left center;
    text-align: left;
    opacity: 0.6;

    &:hover {
      opacity: 0.75;
    }
  }

  // .task__complete-btn
  &__complete-btn {
    flex: 1 1 calc(50% - 1px);
    padding-left: 44px;
    padding-right: 0;
    background-image: url(../assets/icons/clock.svg);
    background-position: left 10px center;
    color: #40976d;
    text-align: right;
    opacity: 0.9;

    &:hover {
      color: darken(#40976d, 2%);
      opacity: 1;
    }
  }
}
</style>
