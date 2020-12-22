import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const COLORS = ['#fee437', '#40976d']

export default new Vuex.Store({
  state: {
    tasksData: JSON.parse(localStorage.getItem('tasksData') || '[]'),
    column: {
      isNew: false,
    },
    task: {},
  },

  mutations: {
    createTask(state, task) {
      const tData = [...state.tasksData]
      const newTask = {
        id: task.id,
        category: task.category,
        text: task.text,
        completed: task.completed,
      }

      if (tData.length) {
        tData.forEach(column => {
          if (task.colId === column.id) {
            column.tasks.push(newTask)
          }
        })
      } else {
        tData.push({
          id: task.colId,
          title: '',
          tasks: [
            {
              ...newTask,
            },
          ],
        })
      }

      state.tasksData = tData
      localStorage.setItem('tasksData', JSON.stringify(state.tasksData))
    },

    updateTask(state, { colId, id, category, text, completed }) {
      const colsData = [...state.tasksData]
      const colIndex = colsData.findIndex(col => col.id === colId)
      const taskIndex = colsData[colIndex].tasks.findIndex(
        task => task.id === id,
      )
      if (category !== undefined) {
        colsData[colIndex].tasks[taskIndex].category = category
      }
      if (text !== undefined) {
        colsData[colIndex].tasks[taskIndex].text = text
      }
      if (completed !== undefined) {
        colsData[colIndex].tasks[taskIndex].completed = completed
      }
      state.tasksData = colsData
      localStorage.setItem('tasksData', JSON.stringify(state.tasksData))
    },

    deleteTask(state, { colId, id }) {
      const colsData = [...state.tasksData]
      const colIndex = colsData.findIndex(col => col.id === colId)
      const taskIndex = colsData[colIndex].tasks.findIndex(
        task => task.id === id,
      )
      colsData[colIndex].tasks.splice(taskIndex, 1)
      state.tasksData = colsData
      localStorage.setItem('tasksData', JSON.stringify(state.tasksData))
    },

    createColumn(state, options = {}) {
      const colsData = [...state.tasksData]
      const col = {
        id: options.id || Date.now(),
        title: options.title || 'Без названия',
        tasks: options.tasks || [],
        bgColor: '#fee437', // COLORS[Math.floor(Math.random() * COLORS.length)],
      }

      colsData.push(col)
      state.tasksData = colsData
      localStorage.setItem('tasksData', JSON.stringify(state.tasksData))
      state.column.isNew = true
    },

    updateColumnTasks(state, columnData) {
      const colsData = [...state.tasksData]
      const colIndex = colsData.findIndex(col => col.id === columnData.id)
      colsData[colIndex].tasks = [...columnData.tasks]
      state.tasksData = colsData
      localStorage.setItem('tasksData', JSON.stringify(state.tasksData))
    },

    setColumnTitle(state, { id, title }) {
      const colsData = [...state.tasksData]
      const idx = colsData.findIndex(col => col.id === id)
      colsData[idx].title = title
      state.tasksData = colsData
      localStorage.setItem('tasksData', JSON.stringify(state.tasksData))
    },

    setNewColFlag(state, flag = true) {
      state.column.isNew = flag
    },

    deleteColumn(state, id) {
      const colsData = [...state.tasksData]
      const idx = colsData.findIndex(col => col.id === id)
      colsData.splice(idx, 1)
      state.tasksData = colsData
      localStorage.setItem('tasksData', JSON.stringify(state.tasksData))
    },

    changeColumnColor(state, { id, color }) {
      const colsData = [...state.tasksData]
      const idx = colsData.findIndex(col => col.id === id)
      colsData[idx].bgColor = color
      state.tasksData = colsData
      localStorage.setItem('tasksData', JSON.stringify(state.tasksData))
    },
  },

  actions: {
    createTask({ commit }, task) {
      commit('createTask', task)
    },
    updateTask({ commit }, taskData) {
      commit('updateTask', taskData)
    },
    deleteTask({ commit }, taskData) {
      commit('deleteTask', taskData)
    },
    createColumn({ commit }, options) {
      commit('createColumn', options)
    },
    updateColumnTasks({ commit }, columnData) {
      commit('updateColumnTasks', columnData)
    },
    setColumnTitle({ commit }, columnData) {
      commit('setColumnTitle', columnData)
    },
    setNewColFlag({ commit }, flag) {
      commit('setNewColFlag', flag)
    },
    deleteColumn({ commit }, id) {
      commit('deleteColumn', id)
    },
    changeColumnColor({ commit }, options) {
      commit('changeColumnColor', options)
    },
  },

  getters: {
    tasksData: s => s.tasksData,
    columnTitleById: s => id => s.tasksData.find(col => col.id === id)?.title,
    taskById: s => ({ colId, id }) =>
      s.tasksData
        .find(col => col.id === colId)
        ?.tasks.find(task => task.id === id),
    isNewColAdded: s => s.column.isNew,
    getColumnBgColor: s => id =>
      s.tasksData.find(col => col.id === id)?.bgColor,
  },
})
