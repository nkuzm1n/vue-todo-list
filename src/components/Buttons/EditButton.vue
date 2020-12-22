<template>
  <button
    class="edit-btn"
    @click="$emit('editClick')"
    title="Редактировать задачу"
  ></button>
</template>

<script>
export default {
  name: 'EditButton',
}
</script>

<style lang="scss">
edit-btn {
  width: 20px;
  height: 20px;
  border: none;
  background-color: transparent;
  background-image: url(../../assets/icons/edit.svg);
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
</style>
