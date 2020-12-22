<template>
  <div class="filter-bar">
    <label for="filter-form-select" class="filter-bar__title">Фильтр</label>
    <form class="filter-bar__form filter-form">
      <div class="filter-bar__select filter-form-select">
        <select id="filter-form-select" title="Фильтр">
          <option value="completed">Завершенные</option>
          <option value="inwork">В работе</option>
          <option value="all" selected>Все</option>
        </select>
      </div>
      <button
        type="submit"
        class="filter-form__btn filter-form__btn-grid filter-form__btn--active"
        title="В сетку"
      ></button>
      <button
        type="submit"
        class="filter-form__btn filter-form__btn-list"
        title="Списком"
      ></button>
      <button
        type="submit"
        class="filter-form__btn filter-form__btn-byname filter-form__btn--active"
        title="По имени"
      >
        По имени
      </button>
      <button
        type="submit"
        class="filter-form__btn filter-form__btn-bystatus"
        title="По статусу"
      >
        По статусу
      </button>
    </form>
    <button class="add-task-button">+ Добавить задачу</button>
  </div>
</template>

<script>
export default {
  name: 'FilterBar',
}
</script>

<style lang="scss" scoped>
@import '../scss/_vars.scss';

.filter-bar {
  position: fixed;
  top: $headerHeight;
  left: $leftSidebarWidth;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - #{$leftSidebarWidth});
  height: $filterBarHeight;
  padding-left: 30px;
  padding-right: 15px;
  background-color: #ffffff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
  z-index: 9;

  // filter-bar__title
  &__title {
    margin-right: 40px;
    font-weight: 500;
    font-size: 1.6rem;
    color: $colorDark;
  }
  // filter-bar__form
  &__form {
  }
}

.filter-form {
  flex: 1;
  display: flex;
  align-items: center;

  &-select {
    flex-basis: 200px;
    border-radius: 20px;

    select {
      width: 100%;
      padding: 8px 13px;
      border-radius: 18px;
      border: 1px solid rgba($colorDark, 0.4);
      background-color: #ffffff;
      font-weight: 500;
      font-size: 1.3rem;
      text-align: center;
      text-transform: uppercase;
      letter-spacing: 0.01em;
      color: $colorDark;
      box-shadow: none;
      overflow: hidden;
      cursor: pointer;

      &:focus {
        border-color: $colorDark;
        outline: none;
      }
    }
  }

  // FIXME: совместить похожие стили сюда
  &__btn {
    transition: opacity 0.2s linear;

    &:hover {
      opacity: 1;
    }
  }

  &__btn-grid {
    width: 18px;
    height: 18px;
    margin-left: 40px;
    border: none;
    background: #ffffff url('../assets/icons/grid.svg') no-repeat center;
    background-size: contain;
    opacity: 0.5;
    cursor: pointer;
  }

  &__btn-list {
    width: 18px;
    height: 18px;
    margin-left: 20px;
    border: none;
    background: #ffffff url('../assets/icons/burger.svg') no-repeat center;
    background-size: contain;
    opacity: 0.5;
    cursor: pointer;
  }

  &__btn-byname {
    display: none;
    margin-left: 40px;
    padding: 1px 0;
    border: none;
    background-color: transparent;
    font-weight: 500;
    font-size: 1.6rem;
    opacity: 0.5;
    cursor: pointer;
  }

  &__btn-bystatus {
    display: none;
    margin-left: 40px;
    padding: 1px 0;
    border: none;
    background-color: transparent;
    font-weight: 500;
    font-size: 1.6rem;
    opacity: 0.5;
    cursor: pointer;
  }

  &__btn--active {
    opacity: 1;
  }
}

.add-task-button {
  padding: 9px 17px;
  border: none;
  border-radius: 5px;
  background-color: #42bf83;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 19px;
  color: #efffff;
  cursor: pointer;
  transition: background-color 0.2s linear;

  &:hover {
    background-color: darken(#42bf83, 5%);
    color: #ffffff;
  }
}
</style>
