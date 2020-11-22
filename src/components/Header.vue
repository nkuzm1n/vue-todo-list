<template>
  <header class="header">
    <div class="logo header__logo">
      <span>N</span>
    </div>
    <div class="header__content">
      <form class="form">
        <div class="form__search form-search">
          <input
            type="text"
            class="form-search__input"
            placeholder="Search"
            title="Поиск"
          />
          <button
            type="submit"
            class="form-search__btn"
            title="Искать"
          ></button>
        </div>
      </form>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style lang="scss" scoped>
@import '../scss/_vars.scss';

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: $headerHeight;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  background: linear-gradient(90deg, #413968 0%, rgba(65, 57, 104, 0.96) 100%);
  z-index: 9;

  &__logo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    background: #fee437;

    span {
      font-weight: 800;
      font-size: 30px;
      color: #252237;
    }
  }

  &__content {
    flex: 1;
    display: flex;
    align-items: center;
    padding-left: 30px;
  }
  .form-search {
    position: relative;

    &__input {
      width: 330px;
      padding: 11px 40px 11px 14px;
      background-color: #332e4c;
      border-radius: 20px;
      border: 2px solid transparent;
      font-weight: 400;
      font-size: 14px;
      color: #ffffff;
      overflow: hidden;

      &::placeholder {
        color: #ffffff;
      }

      &:focus {
        border: 2px solid darken(#332e4c, 5%);
        outline: none;
      }
    }

    &__btn {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      display: block;
      width: 32px;
      height: 100%;
      border: none;
      background-color: transparent;
      background-image: url(../assets/icons/search.svg);
      background-repeat: no-repeat;
      background-position: center right 16px;
      background-size: 16px;
      cursor: pointer;
    }
  }
}
</style>
