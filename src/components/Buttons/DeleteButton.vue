<template>
  <button
    class="delete-btn"
    @click="$emit('deleteClick')"
    :class="{
      'delete-btn--show': show,
    }"
  >
    &times;
  </button>
</template>

<script>
export default {
  name: 'DeleteButton',
  props: {
    show: {
      type: Boolean,
    },
  },
}
</script>

<style lang="scss">
delete-btn {
  display: block;
  width: 20px;
  height: 20px;
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
  }

  // .delete-btn--show
  &--show {
    opacity: 0.5;
    transform: translateX(0);
  }
}
</style>
